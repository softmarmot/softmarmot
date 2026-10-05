# SoftMarmot

The website of **Soft Marmot LLC**, a small web studio that designs and builds fast, modern websites
and custom web applications for small businesses.

It is a single-page, fully static site built with SvelteKit and Tailwind CSS, styled around a
neon-tube look, and deployed to GitHub Pages.

## Tech stack

- [SvelteKit 2](https://svelte.dev/docs/kit) with [Svelte 5](https://svelte.dev) (runes mode is forced for project files)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static): every page is prerendered, with `404.html` as the fallback
- TypeScript, Vite
- [Kode Mono](https://fonts.google.com/specimen/Kode+Mono) as the site font

## Getting started

Requires Node.js 20 or newer (the deploy workflow uses Node 20). `engine-strict` is on in `.npmrc`.

```sh
npm install
npm run dev            # dev server at http://localhost:5173
npm run dev -- --open  # same, and open it in the browser
```

| Script                | What it does                                    |
| --------------------- | ----------------------------------------------- |
| `npm run dev`         | Start the Vite dev server                       |
| `npm run build`       | Build the static site into `build/`             |
| `npm run preview`     | Serve the production build locally              |
| `npm run check`       | Type-check the project with `svelte-check`      |
| `npm run check:watch` | Same, in watch mode                             |

## Page sections

The site is one page; the header links jump to each section by its id.

- **Home**: the hero headline, a "Start a project" button and the mascot.
- **Services** (`Services.svelte`): four panels (Websites, Web Apps, Redesigns, Speed & Care). Edit the `services` array to change them.
- **Work** (`Work.svelte`): client sites shown as cards with a homepage screenshot. Edit the `projects` array to change them.
- **About** (`About.svelte`): a short description of the studio.
- **Contact** (`Contact.svelte`): the studio email address (`hello@softmarmot.com`) and a mail button.

### Adding a portfolio project

1. Save a homepage screenshot as a 1200×750 WebP in `src/lib/assets/work/`.
2. Import it in `src/routes/Work.svelte` and add an entry to `projects` with `name`, `kind`, `url`, `image` and `description`.

### Adding a service

1. Draw the icon as an SVG in the same style as the others in `src/lib/assets/services/` (white strokes, 2.4 wide).
2. Import it with `?raw` in `src/routes/Services.svelte` and add an entry to `services` with `label`, `icon`, `title` and `description`.

## Design conventions

- **Neon look.** Shapes are white strokes about 2.4 wide with an indigo-400 glow, as in the mascot SVG. Accents are `text-indigo-400` on a `bg-slate-800` page.
- **One source for the neon effect.** The animatable `--glow` property and the `neon-ignite` (start-up flicker) and `neon-hum` (steady glow) keyframes live in `src/lib/neon.css`, imported once from `layout.css`. Reuse them rather than writing new keyframes. They power the service panels and the mobile menu.
- **Icons are inlined**, not loaded with `<img>`, so CSS can switch each tube on and off (the stroke mixes from slate-600 to white as `--glow` goes from 0 to 1).
- **Buttons don't flicker.** `NeonButton` matches the nav links: bright text with a faint border at rest, dimmer text with an indigo border on hover or focus. Arrows in buttons are plain text.
- **Hover is for mouse users only.** Hover effects are scoped with Tailwind's `pointer-fine:` variant; on touch screens panels light up on tap instead (`aria-expanded`).
- **Sticky header.** Anchors stay clear of it through `scroll-padding-top` in `layout.css`. The mobile menu closes on a tap outside it or on Escape.
- **Reduced motion.** Smooth scrolling and menu transitions turn off when the visitor prefers reduced motion.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which installs dependencies, runs
`npm run build` and publishes `build/` to GitHub Pages. There is no CI on pull requests, so run
`npm run check` and `npm run build` locally before merging.

The base path comes from the `BASE_PATH` environment variable at build time (see `vite.config.ts`).
It is empty by default, which suits a custom domain or a `<user>.github.io` site; set it to
`/<repo-name>` to serve from a project-pages subpath.

## License

© 2026 Soft Marmot LLC. All rights reserved.
