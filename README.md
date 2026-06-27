# Dublin Bitcoin

Static HTML and CSS site for Dublin Bitcoin community pages and presentation
links.

## Development

Open `index.html` directly in a browser, or serve the repository root with any
static file server:

```bash
python3 -m http.server 4321
```

With Nix:

```bash
nix --extra-experimental-features nix-command --extra-experimental-features flakes develop
python3 -m http.server 4321
```

## Presentations

Presentation cards are plain HTML in `index.html`.

Standalone presentation decks live in:

- `dublin_bitcoin_pres/`
- `presentations/`

## GitHub Pages

There is no build step. Publish the repository root as the GitHub Pages source.
