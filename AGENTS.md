# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a **Music Player** — a client-side-only React 18 SPA (no backend, no database). It uses React 18, Redux Toolkit, Webpack 5, Babel 7, and dart-sass.

### Node.js version requirement

This project uses **Node.js 22** (via nvm). The nvm default alias is set to `22`. After nvm loads, ensure `nvm use default` or `nvm use 22` is active.

### Key commands

All standard dev commands are in `package.json` scripts and documented in `README.md`:

- `yarn start` — dev server on port **9000** with HMR
- `yarn test` — Jest 29 + @testing-library/react tests
- `yarn lint` — ESLint 8 (Airbnb config)
- `yarn build` — production build to `dist/`

### Non-obvious gotchas

- The old DLL vendor bundle (`dll/`) is still committed to the repo for history but is **no longer used**. Webpack 5 bundles everything directly. Do not re-enable the DLL plugin.
- `resolve.extensions` in `webpack.common.js` must include `.mjs` and `.cjs` — modern npm packages (react-dom, @reduxjs/toolkit, react-redux) ship ESM as `.mjs` files.
- The catch-all asset/resource rule in webpack configs must exclude `.mjs` and `.cjs` extensions to prevent them from being treated as static assets instead of JavaScript modules.
- Bootstrap peer dependency warnings (`@popperjs/core`) during `yarn install` are harmless — popper.js is only needed for Bootstrap dropdowns/tooltips which this app does not use.
- Audio files are served from `src/assets/audio/` via webpack-dev-server's static file serving (configured with `static.directory` pointing to project root).
- Husky 9 hooks are in `.husky/` as plain shell scripts. The `prepare` script in `package.json` initializes husky on `yarn install`.
