# Survey-Docs

Documentation for the **Survey Platform**: a full-stack application for creating, publishing, and analyzing multi-language surveys with audience targeting, scoring, advice, and email notifications.

Built with [Zudoku](https://zudoku.dev/docs).

## Contents

- **Getting Started** – Installation and configuration
- **Architecture** – High-level overview
- **Features** – Surveys, audiences, responses, email, translations, analytics
- **API** – Authentication, public and protected endpoints (with OpenAPI reference)

## Local development

**Requirements:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edits to `.mdx` files under `pages/` update automatically.

## Build

To produce a static site in the `dist/` folder:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

This repo is set up to deploy the built docs to **GitHub Pages** via GitHub Actions.

### One-time setup

1. In your GitHub repo: **Settings → Pages**.
2. Under **Build and deployment**:
   - **Source:** GitHub Actions (not “Deploy from a branch”).

No other configuration is required. The workflow runs on every push to `main` and on manual trigger from the Actions tab. If your default branch is different, edit `branches` in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

### How it works

- **Workflow:** [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
- On push to the default branch (or on manual run), the workflow:
  1. Installs dependencies with `npm ci`
  2. Builds the site with `npm run build` (output in `dist/`)
  3. Uploads the `dist/` folder as the Pages artifact
  4. Deploys it to GitHub Pages

Your docs will be available at:

- **Project site:** `https://<username>.github.io/<repo>/`
- **User/org site:** `https://<username>.github.io/` (if this repo is named `<username>.github.io`)

### Base URL on project sites

If the site is served under a subpath (e.g. `https://user.github.io/survey-docs/`), you may need to set a base URL in Zudoku so assets and links work. See [Zudoku configuration](https://zudoku.dev/docs/configuration/overview) and your hosting setup.

## Project structure

| Path        | Description                    |
|------------|--------------------------------|
| `pages/`   | Documentation content (MDX)   |
| `apis/`    | OpenAPI spec for API reference |
| `public/`  | Static assets                  |
| `zudoku.config.tsx` | Site and navigation config |

## Links

- [Zudoku documentation](https://zudoku.dev/docs)
- [Zudoku deployment guide](https://zudoku.dev/docs/deployment)
