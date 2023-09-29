# Bun monorepo

This a demo of a monorepo using bun workspace.

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `backend`: [Elysia.js](https://elysiajs.com/) app
- `web`: [Next.js](https://nextjs.org/) app
- `mobile`:  React Native [Expo](https://expo.dev/) + expo-router
- `backend-api`: a shared end-to-end type safety package.

### Utilities

This monorepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome.js](https://biomejs.dev/) for code formatting and linting

### Getting Started

To install and start developing all apps, run the following command:

```sh
bun install
bun dev
```


### Others scripts


```sh
# type check all packages
bun typecheck

# format all packages
bun format

# lint all packages
bun lint

```