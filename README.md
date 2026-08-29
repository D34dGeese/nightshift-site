# Nightshift landing page

A fully static Astro landing page for the fictional Nightshift command-line utility. Product details and download links are local data, so the site has no database, authentication, server runtime, or provider-specific API dependency.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

Run these commands from this directory:

```bash
npm install
npm run dev
```

Astro prints the local development URL after startup.

## Production build

```bash
npm run build
```

The complete deployable website is written to `dist/`.

Preview that exact production output locally:

```bash
npm run preview
```

## Edit product and release content

- `src/data/product.json` contains the product name, messaging, repository links, install command, and utility modules.
- `src/data/releases.json` contains the current release information and per-platform GitHub Release URLs.
- `public/` contains static files copied into the final site without processing.

Replace the `github.com/example/nightshift` URLs before launch. Download links should continue pointing to GitHub Releases (or another external release host); do not add downloadable application binaries to this repository.

## Deploy the `dist` directory

The site uses static output only. Any ordinary static host can serve the contents of `dist/`.

### GitHub Pages

The included `.github/workflows/deploy-pages.yml` workflow builds and publishes the site whenever the default branch is pushed.

1. Open the repository's **Settings → Pages**.
2. Set the source to **GitHub Actions**.
3. Push to `main`.

The workflow automatically sets `PUBLIC_SITE_BASE` to the repository path for project Pages and to `/` for a user or organization Pages repository.

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

### Standard web server

Copy the contents of `dist/` to the server's document root. No Node.js process is required after the build.

## Optional base path

For hosting below a subdirectory, copy `.env.example` to `.env` and set:

```bash
PUBLIC_SITE_BASE=/your-subdirectory
```

Use `/` or leave the variable unset for root-domain hosting. No secrets are required.