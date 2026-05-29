# env-validator

---

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/SCL339/env-validator?style=social)](https://github.com/SCL339/env-validator)
[![npm downloads](https://img.shields.io/npm/dt/env-validator)](https://www.npmjs.com/package/env-validator)

---

- ⚠️ **Extra keys** — Variables in `.env` but not in `.env.example`
- 🔤 **Type inference** — Detect string/boolean/integer/float/URL mismatches
- 🔧 **`--fix` mode** — Auto-add missing keys from `.env.example`
- 🤖 **GitHub Action** — Use it in CI/CD pipelines
- 📦 **Zero runtime deps** — CLI mode uses only Node.js built-ins
- 📊 **JSON output** — Machine-readable for CI integration

---

# Install globally
npm i -g env-validator

# Or use directly
npx env-validator
```

---

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

---

|------|---------|
| `0`  | All valid |
| `1`  | Missing keys or type mismatches |

---

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

---

✗ Missing keys (in .env.example but not in .env): 2
- DATABASE_URL
- REDIS_HOST

! Extra keys (in .env but not in .env.example): 1
- DEBUG_MODE=true

! Type mismatches: 1
- PORT: expected string, got integer
```

---

|-------|------|
| `true` / `false` | boolean |
| `42` | integer |
| `3.14` | float |
| `https://...` | url |
| `user@example.com` | email |
| `"hello"` / `hello` | string |

---

- [SCL339/repo-stats-dashboard](https://github.com/SCL339/repo-stats-dashboard) — Beautiful repo stats dashboards
- [SCL339/json-to-types](https://github.com/SCL339/json-to-types) — JSON to TypeScript types converter

---

- 🚀 **Deploy your frontend** on [Vercel](https://vercel.com/?utm_source=scl339&utm_campaign=oss)
- ⭐ **Star this repo** to help others discover it

---

---

## 🤝 赞助支持 (Sponsor)

如果这个项目对你有帮助，可以请我喝杯咖啡 ☕

- 💖 **支付宝 (Alipay)**: `18559219554` | 邮箱联系: `530765059@qq.com`
- ☁️ **DigitalOcean 联盟链接**: [免费 $200 额度](https://m.do.co/c/2ca0db2b48be)
- ⭐ **在 GitHub 上点 Star** 帮助更多人发现这个项目

## 📄 License