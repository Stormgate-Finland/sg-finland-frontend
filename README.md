# Stormgate Finland Frontend

This is a Sveltekit project bootstrapped by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), that hosts the [stormgate.fi](https://stormgate.fi) website frontend codebase.

The news content and users are hosted in a Strapi project [sg-finland-cms](https://gitlab.com/stormgate-finland/sg-finland-cms).

## Developing

1. Installe dependencies with `pnpm install` (or `npm install` or `yarn`).

2. Copy `.env.example` to `.env` and edit variables to your liking.

3. Start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
