# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a **Music Player** — a client-side-only React SPA (no backend, no database). It uses React 16, Redux, Webpack 3, Babel 6, and `node-sass` 4.7.

### Node.js version requirement

This project **requires Node.js 8.x** (specifically 8.17.0 via nvm). The `node-sass` 4.7.2 dependency has prebuilt binaries only for Node 8 and earlier; it will fail to install on Node 10+ without Python 2 for native compilation. The nvm default alias is set to `8.17.0`. After nvm loads, run `nvm use default` or `nvm use 8` if needed.

### Key commands

All standard dev commands are in `package.json` scripts and documented in `README.md`:

* `yarn start` — dev server on port **9000** with HMR
* `yarn test` — Jest + Enzyme unit tests
* `yarn lint` — ESLint (Airbnb config)
* `yarn build` — production build to `dist/`

### Non-obvious gotchas

* The DLL vendor bundle (`dll/vendor-manifest.json`) is **committed to the repo**. Do not delete it — webpack dev/prod configs depend on it. If vendor deps change, regenerate with `yarn dll`.
* Yarn must be installed globally under the Node 8 nvm environment: `npm install -g yarn`.
* Bootstrap peer dependencies (`jquery`, `popper.js`) produce warnings during install but are not needed at runtime for this app.
