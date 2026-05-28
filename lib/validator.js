const fs = require('fs');

function parseEnv(content) {
  const vars = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
    const eqIdx = trimmed.indexOf('=');
    const key = trimmed.slice(0, eqIdx).trim();
    let value = trimmed.slice(eqIdx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    vars[key] = value;
  }
  return vars;
}

function inferType(value) {
  if (value === undefined || value === null || value === '') return 'empty';
  if (value === 'true' || value === 'false' || value === 'yes' || value === 'no') return 'boolean';
  if (/^-?\d+$/.test(value)) return 'integer';
  if (/^-?\d+\.\d+$/.test(value)) return 'float';
  if (/^https?:\/\//.test(value)) return 'url';
  if (/^[^\s]+@[^\s]+\.[^\s]+$/.test(value)) return 'email';
  return 'string';
}

function validate(envPath, examplePath, options = {}) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const exampleContent = fs.readFileSync(examplePath, 'utf-8');

  const env = parseEnv(envContent);
  const example = parseEnv(exampleContent);

  const envKeys = new Set(Object.keys(env));
  const exampleKeys = new Set(Object.keys(example));

  const missing = [];
  const extra = [];
  const typeMismatches = [];

  for (const key of exampleKeys) {
    if (!envKeys.has(key)) {
      missing.push(key);
    } else if (options.strictTypes) {
      const expectedType = inferType(example[key]);
      const actualType = inferType(env[key]);
      if (expectedType !== actualType && expectedType !== 'empty') {
        typeMismatches.push({ key, expected: expectedType, actual: actualType });
      }
    }
  }

  for (const key of envKeys) {
    if (!exampleKeys.has(key)) {
      extra.push(key);
    }
  }

  return {
    missing,
    extra,
    typeMismatches,
    totalKeys: envKeys.size,
    expectedKeys: exampleKeys.size,
    allValid: missing.length === 0 && extra.length === 0 && typeMismatches.length === 0,
    env,
    example
  };
}

module.exports = { validate, parseEnv, inferType };
