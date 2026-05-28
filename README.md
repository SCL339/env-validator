1|     1|     1|# env-validator
     2|     2|     2|
     3|     3|     3|---
     4|     4|     4|
     5|     5|     5|
     6|     6|     6|[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
     7|     7|     7|[![GitHub Stars](https://img.shields.io/github/stars/SCL339/env-validator?style=social)](https://github.com/SCL339/env-validator)
     8|     8|     8|[![npm downloads](https://img.shields.io/npm/dt/env-validator)](https://www.npmjs.com/package/env-validator)
     9|     9|     9|
    10|    10|    10|---
    11|    11|    11|
    12|    12|    12|
    13|    13|    13|- ⚠️ **Extra keys** — Variables in `.env` but not in `.env.example`
    14|    14|    14|- 🔤 **Type inference** — Detect string/boolean/integer/float/URL mismatches
    15|    15|    15|- 🔧 **`--fix` mode** — Auto-add missing keys from `.env.example`
    16|    16|    16|- 🤖 **GitHub Action** — Use it in CI/CD pipelines
    17|    17|    17|- 📦 **Zero runtime deps** — CLI mode uses only Node.js built-ins
    18|    18|    18|- 📊 **JSON output** — Machine-readable for CI integration
    19|    19|    19|
    20|    20|    20|---
    21|    21|    21|
    22|    22|    22|
    23|    23|    23|# Install globally
    24|    24|    24|npm i -g env-validator
    25|    25|    25|
    26|    26|    26|# Or use directly
    27|    27|    27|npx env-validator
    28|    28|    28|```
    29|    29|    29|
    30|    30|    30|---
    31|    31|    31|
    32|    32|    32|
    33|    33|    33|# Basic validation
    34|    34|    34|env-validator
    35|    35|    35|
    36|    36|    36|# Custom file paths
    37|    37|    37|env-validator .env.production --example .env.example.prod
    38|    38|    38|
    39|    39|    39|# With strict type checking
    40|    40|    40|env-validator --strict-types
    41|    41|    41|
    42|    42|    42|# JSON output (for CI)
    43|    43|    43|env-validator --json
    44|    44|    44|
    45|    45|    45|# Fix mode: add missing keys
    46|    46|    46|env-validator --fix
    47|    47|    47|```
    48|    48|    48|
    49|    49|    49|---
    50|    50|    50|
    51|    51|    51|
    52|    52|    52||------|---------|
    53|    53|    53|| `0`  | All valid |
    54|    54|    54|| `1`  | Missing keys or type mismatches |
    55|    55|    55|
    56|    56|    56|---
    57|    57|    57|
    58|    58|    58|
    59|    59|    59|name: Validate Environment
    60|    60|    60|on: [push]
    61|    61|    61|
    62|    62|    62|jobs:
    63|    63|    63|  validate:
    64|    64|    64|    runs-on: ubuntu-latest
    65|    65|    65|    steps:
    66|    66|    66|      - uses: actions/checkout@v4
    67|    67|    67|      - name: Validate .env
    68|    68|    68|        uses: SCL339/env-validator@v1
    69|    69|    69|        with:
    70|    70|    70|          env-path: .env
    71|    71|    71|          example-path: .env.example
    72|    72|    72|          strict-types: 'true'
    73|    73|    73|```
    74|    74|    74|
    75|    75|    75|---
    76|    76|    76|
    77|    77|    77|
    78|    78|    78|✗ Missing keys (in .env.example but not in .env): 2
    79|    79|    79|  - DATABASE_URL
    80|    80|    80|  - REDIS_HOST
    81|    81|    81|
    82|    82|    82|! Extra keys (in .env but not in .env.example): 1
    83|    83|    83|  - DEBUG_MODE=true
    84|    84|    84|
    85|    85|    85|! Type mismatches: 1
    86|    86|    86|  - PORT: expected string, got integer
    87|    87|    87|```
    88|    88|    88|
    89|    89|    89|---
    90|    90|    90|
    91|    91|    91|
    92|    92|    92||-------|------|
    93|    93|    93|| `true` / `false` | boolean |
    94|    94|    94|| `42` | integer |
    95|    95|    95|| `3.14` | float |
    96|    96|    96|| `https://...` | url |
    97|    97|    97|| `user@example.com` | email |
    98|    98|    98|| `"hello"` / `hello` | string |
    99|    99|    99|
   100|   100|   100|---
   101|   101|   101|
   102|   102|   102|
   103|   103|   103|- [SCL339/repo-stats-dashboard](https://github.com/SCL339/repo-stats-dashboard) — Beautiful repo stats dashboards
   104|   104|   104|- [SCL339/json-to-types](https://github.com/SCL339/json-to-types) — JSON to TypeScript types converter
   105|   105|   105|
   106|   106|   106|---
   107|   107|   107|
   108|   108|   108|ARKER
   109|   109|   109|- 🚀 **Deploy your frontend** on [Vercel](https://vercel.com/?utm_source=scl339&utm_campaign=oss)
   110|   110|   110|- ⭐ **Star this repo** to help others discover it
   111|   111|   111|
   112|   112|   112|
   113|   113|   113|---
   114|   114|   114|
   115|   115|   115|
   116|   116|   116|

---

## 🤝 赞助支持 (Sponsor)

如果这个项目对你有帮助，可以请我喝杯咖啡 ☕

- 💖 **支付宝 (Alipay)**: `18559219554` | 邮箱联系: `530765059@qq.com`
- ☁️ **DigitalOcean 联盟链接**: [免费 $200 额度](https://www.digitalocean.com/?refcode=scl339-01&utm_campaign=Referral_Invite&utm_medium=opensource&utm_source=SCL339)
- ⭐ **在 GitHub 上点 Star** 帮助更多人发现这个项目

## 📄 License
