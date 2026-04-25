# zayzream

A tiny fake project used as test fodder for [Nightmare](https://github.com/lawik/nightmare),
a TikTok-style PR review app.

## Why this exists

Nightmare needs a real GitHub repository with real, varied open pull requests
to demo against. zayzream is that repository: it has a few small modules,
some PRs in flight at any given time, and nothing of value to anyone else.

## Install

```
npm install
```

## Usage

The package ships a CLI:

```
npx zayzream --upper hello world      # → HELLO WORLD
npx zayzream --lower HELLO WORLD      # → hello world
npx zayzream --help                   # → usage line
```

Or run directly:

```
node src/index.js --upper hi
```

## Layout

```
src/
├── index.js   — CLI entry, argv parsing
└── utils.js   — string helpers (upper, lower, greet, shout)
```

## Contributing

Don't. This repo exists so that opening a PR against it is harmless.
If you want to play with Nightmare, fork your own copy.

## License

MIT — see [LICENSE](./LICENSE).
