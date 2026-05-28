#!/usr/bin/env node
const { program } = require('commander');
const { validate } = require('../lib/validator');
const path = require('path');
const fs = require('fs');

program
  .name('env-validator')
  .description('Validate .env files against .env.example')
  .argument('[env-path]', 'Path to .env file', '.env')
  .option('-e, --example <path>', 'Path to .env.example', '.env.example')
  .option('--fix', 'Add missing keys from example to .env')
  .option('--json', 'Output as JSON')
  .option('--strict-types', 'Enable strict type checking')
  .parse(process.argv);

const opts = program.opts();
const envPath = path.resolve(program.args[0] || '.env');
const examplePath = path.resolve(opts.example);

if (!fs.existsSync(envPath)) {
  console.error(`✗ .env file not found: ${envPath}`);
  process.exit(1);
}
if (!fs.existsSync(examplePath)) {
  console.error(`✗ .env.example file not found: ${examplePath}`);
  process.exit(1);
}

const result = validate(envPath, examplePath, { strictTypes: opts.strictTypes });

if (opts.json) {
  console.log(JSON.stringify(result, null, 2));
} else {
  const { missing, extra, typeMismatches, allValid } = result;
  if (allValid) {
    console.log('✓ All environment variables are valid!');
    process.exit(0);
  }
  if (missing.length) {
    console.log(`✗ Missing keys (in .env.example but not in .env): ${missing.length}`);
    missing.forEach(k => console.log(`  - ${k}`));
  }
  if (extra.length) {
    console.log(`\n! Extra keys (in .env but not in .env.example): ${extra.length}`);
    extra.forEach(k => console.log(`  - ${k}`));
  }
  if (typeMismatches.length) {
    console.log(`\n! Type mismatches: ${typeMismatches.length}`);
    typeMismatches.forEach(m => console.log(`  - ${m.key}: expected ${m.expected}, got ${m.actual}`));
  }
  process.exit(missing.length > 0 || typeMismatches.length > 0 ? 1 : 0);
}
