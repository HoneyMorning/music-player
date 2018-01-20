# music-player

![MPlayer](./docs/README.png)

## Installation And Usage

```bash
git clone git@github.com:HoneyMorning/music-player.git

cd music-player
yarn install

yarn start # start a dev server
yarn start-browser # start a dev server and open default browser
yarn build # build for production
yarn build-analyse # build and generate a stats.json
yarn dll # generate DllPlugin
yarn test # run test
yarn lint # run lint jsx
yarn format # format code: .jsx?, .md, .s?css
yarn server # test build folder, here is dist folder.
yarn doc # run esdoc to generate docs.
yarn server-doc # test esdoc generated folder, here is doc folder.
```

## Configuration

* npm init & gitignore
* File structure
* commitlint
* eslint
* format(prettier)
* webpack
* Test
* Router
* Common http request and interceptor
* webpack dll
* precommit format

## Commitlint

> The most common commit conventions follow this pattern:

```md
type: subject(lower-case)

<!-- add one space line -->

body?

<!-- add one space line -->

footer?
```

type includes:

```json
["add", "update", "feat", "fix", "docs", "style", "refactor", "test", "rever"]
```

You could config vim as default editor for git commit, just do:

```bash
git config --global core.editor "vim"
```

## Code styles

* [React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## MIT License

Copyright (c) 2017 TaylorPzreal
