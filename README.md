# lite-embeds-demo

Vercel-deployable demo for [`@lite-embeds/*`](https://github.com/abderrahimghazali/lite-embeds) — a family of privacy-first facade web components for social embeds.

## Develop

```bash
npm install
npm run dev
```

The Vite config points the `@lite-embeds/*` package specifiers at the local workspace dist files in the sibling `lite-embed/` repo. Build the packages there first:

```bash
cd ../lite-embed && pnpm -r build
```

## Deploy

After the packages are published to npm:

1. Remove the `resolve.alias` block in `vite.config.ts`.
2. Install the published packages:

   ```bash
   npm i @lite-embeds/twitter @lite-embeds/spotify @lite-embeds/vimeo @lite-embeds/instagram @lite-embeds/tiktok
   ```

3. Push to GitHub and import on Vercel — it auto-detects Vite. No `vercel.json` needed.

## License

MIT
