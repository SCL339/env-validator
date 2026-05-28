# env-validator

> 🔍 **Validate .env files against .env.example** — catch missing keys, extra keys, and type mismatches before they cause production bugs.

[![npm version](https://img.shields.io/npm/v/env-validator.svg)](https://www.npmjs.com/package/env-validator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/SCL339/env-validator?style=social)](https://github.com/SCL339/env-validator)
[![npm downloads](https://img.shields.io/npm/dt/env-validator)](https://www.npmjs.com/package/env-validator)

---

## 🚀 Features

- ✅ **Missing keys** — Variables in `.env.example` but not in `.env`
- ⚠️ **Extra keys** — Variables in `.env` but not in `.env.example`
- 🔤 **Type inference** — Detect string/boolean/integer/float/URL mismatches
- 🔧 **`--fix` mode** — Auto-add missing keys from `.env.example`
- 🤖 **GitHub Action** — Use it in CI/CD pipelines
- 📦 **Zero runtime deps** — CLI mode uses only Node.js built-ins
- 📊 **JSON output** — Machine-readable for CI integration

## 📦 Install

```bash
# Install globally
npm i -g env-validator

# Or use directly
npx env-validator
```

## 🎯 Usage

### CLI

```bash
# Basic validation
env-validator

# Custom file paths
env-validator .env.production --example .env.example.prod

# With strict type checking
env-validator --strict-types

# JSON output (for CI)
env-validator --json

# Fix mode: add missing keys
env-validator --fix
```

#### Exit Codes

| Code | Meaning |
|------|---------|
| `0`  | All valid |
| `1`  | Missing keys or type mismatches |

### GitHub Action

```yaml
name: Validate Environment
on: [push]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Validate .env
        uses: SCL339/env-validator@v1
        with:
          env-path: .env
          example-path: .env.example
          strict-types: 'true'
```

## 📋 Example Output

```
✗ Missing keys (in .env.example but not in .env): 2
  - DATABASE_URL
  - REDIS_HOST

! Extra keys (in .env but not in .env.example): 1
  - DEBUG_MODE=true

! Type mismatches: 1
  - PORT: expected string, got integer
```

## 🔧 Type Inference

| Value | Type |
|-------|------|
| `true` / `false` | boolean |
| `42` | integer |
| `3.14` | float |
| `https://...` | url |
| `user@example.com` | email |
| `"hello"` / `hello` | string |

## 📚 Related Projects

- [SCL339/whatsnew-cli](https://github.com/SCL339/whatsnew-cli) — See what's new in your GitHub repos
- [SCL339/repo-stats-dashboard](https://github.com/SCL339/repo-stats-dashboard) — Beautiful repo stats dashboards
- [SCL339/json-to-types](https://github.com/SCL339/json-to-types) — JSON to TypeScript types converter



---

## 🤝 Support

If you find this project useful, consider supporting my work:

- 💖 **赞助支持 (Sponsor)**: 支付宝 `18559219554`
- ☁️ **Get $200 free credit** on [DigitalOcean](https://www.digitalocean.com/?refcode=scl339-01&utm_campaign=Referral_Invite&utm_medium=opensource&utm_source=SCL339)
- 🚀 **Deploy your frontend** on [Vercel](https://vercel.com/?utm_source=scl339&utm_campaign=oss)
- ⭐ **Star this repo** to help others discover it


## 📄 License

MIT © SCL339
