# Repository Guidelines

## Project Structure & Module Organization

This repository is a static GitHub Pages site for Dublin Bitcoin. The public entry point is `index.html`, with shared styling in `styles.css`. Standalone presentation decks live in `dublin_bitcoin_pres/` and `presentations/`; keep deck-specific HTML and assets near the deck they support. `CNAME` configures the custom domain. `flake.nix` and `flake.lock` provide an optional Nix development shell.

## Build, Test, and Development Commands

There is no build step; files are served directly from the repository root.

- `python3 -m http.server 4321`: serve the site locally at `http://localhost:4321`.
- `nix --extra-experimental-features nix-command --extra-experimental-features flakes develop`: enter the Nix shell with Python available.
- `jj status`: inspect local changes in this JJ-backed workspace.
- `jj diff`: review the current change before submitting.

## Coding Style & Naming Conventions

Use plain, semantic HTML and centralized CSS. Follow the existing two-space indentation in HTML and CSS. Prefer descriptive class names such as `presentation-card`, `meetup-panel`, and `site-header-inner`. Keep CSS variables in `:root` for shared colors, spacing, and type settings. Use lowercase, hyphenated filenames for new HTML pages or assets, for example `self-custody-basics/index.html`.

## Testing Guidelines

No automated test framework is currently configured. Before submitting changes, run the local server and manually verify the affected pages in a browser. Check desktop and mobile widths, navigation links, presentation links, and any externally linked resources. For content-only changes, confirm spelling, dates, venue details, and URLs.

## Commit & Pull Request Guidelines

Recent history uses short conventional-style commit subjects such as `feat: base` and `feat: just use html`. Keep commit messages concise and imperative, with a prefix when useful (`feat:`, `fix:`, `docs:`). Pull requests should describe the visible change, list pages touched, link any related issue, and include screenshots for layout or visual updates.

## Deployment Notes

GitHub Pages publishes the repository root directly. Avoid introducing generated build artifacts, package-manager directories, or framework-specific output unless the deployment model is intentionally changed.
