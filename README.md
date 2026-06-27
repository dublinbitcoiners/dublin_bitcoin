# Dublin Bitcoin

Static Astro site for Dublin Bitcoin community pages and presentation links.

## Development

With Nix:

```bash
nix --extra-experimental-features nix-command --extra-experimental-features flakes develop
npm install
npm run dev
```


Without Nix, install Node.js and npm, then run the same npm commands.

## Presentations

Presentation entries live in `src/content/presentations/`.

Use `kind: html` for an internal Astro-rendered presentation page:

```yaml
---
title: "Bitcoin Self-Custody"
date: 2026-06-27
speaker: "Dublin Bitcoin"
kind: html
summary: "A short intro to practical self-custody."
---
```

Use `kind: pdf` for a static PDF or external PDF URL:

```yaml
---
title: "Lightning Payments"
date: 2026-07-25
speaker: "Dublin Bitcoin"
kind: pdf
url: "/presentations/lightning-payments.pdf"
summary: "A PDF deck about Lightning payments."
---
```

Files in `public/` are served from the site root after build.

## GitHub Pages

The site is configured as a project page with this base path:

```js
ASTRO_BASE=/dublin_bitcoin
```

If the GitHub repository uses a different name, set `ASTRO_BASE` in the deploy
workflow or update the default in `astro.config.mjs`. If you deploy to a custom
domain, use `ASTRO_BASE=/`.
