import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(__dirname, '../lite-embed/packages');

// Pre-publish: alias the package specifiers to the local workspace dist files.
// After `pnpm publish` lands the packages on npm, delete the `resolve.alias`
// block and run `npm i @lite-embeds/{core,twitter,spotify,vimeo,instagram,tiktok}`.
export default defineConfig({
  resolve: {
    alias: {
      '@lite-embeds/core': resolve(pkgRoot, 'core/dist/index.js'),
      '@lite-embeds/twitter': resolve(pkgRoot, 'twitter/dist/index.js'),
      '@lite-embeds/spotify': resolve(pkgRoot, 'spotify/dist/index.js'),
      '@lite-embeds/vimeo': resolve(pkgRoot, 'vimeo/dist/index.js'),
      '@lite-embeds/instagram': resolve(pkgRoot, 'instagram/dist/index.js'),
      '@lite-embeds/tiktok': resolve(pkgRoot, 'tiktok/dist/index.js'),
    },
  },
});
