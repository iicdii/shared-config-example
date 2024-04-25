# ESLint, Prettier Shared Config Example

This project is based on the article [Creating a Shared ESLint and Prettier Config for Our Team - 우리 팀을 위한 ESLint, Prettier 공유 컨피그 만들어보기](https://techblog.woowahan.com/15903/). It serves as an example to help understand the shared ESLint/Prettier configuration designed for our team.

### 🏗️ Structure

- Monorepo: pnpm workspace
- Packages
  - eslint-config
    - (Main) [@rushstack/eslint-config](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-config)
  - prettier-config
  - example
    - Vite
    - React

### ⚙️ Scripts

Run the lint command in the example app.

```bash
pnpm example lint
```

Run the code formatting command in the example app.

```bash
pnpm example prettier
```
