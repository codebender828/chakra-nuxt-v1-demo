# Chakra UI Nuxt 3 Minimal Starter

This project installs Chakra UI Vue in your Nuxt project. Simply installing the `@chakra-ui/nuxt-next` module
is enough to get yout project up and running in development mode.

However, in order to get this working in production with **pnpm**, we have to make a few more tweeks:
1. Remove `shamefully-hoist=true` from the `.npmrc`.
2. Manually install the following dependencies (Altogether are **7.2KB**)
  1. `lodash.mergewith` - 3.7kb
  2. `lodash.camelcase` - 2.1kb
  3. `lodash.memoize` - 1.4kb
  
  4. `vue` (Already needed by Nuxt.js)

These dependencies are already used inside the framework since they are optimized inside of Vite. However, due to
pnpm's dependency resolution, [Rollup](https://rollup.js.org) may not know how to resolve dependencies at build-time. So we have to do some special handling
to accomplish this resolution.

The Chakra UI Team is aware of this unique situation when working with pnpm and Nuxt.js. And we are currently working towards solving
this problem.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
