# Cible Retour à l'Emploi

Bilingual Angular website for Cible Retour à l'Emploi, an employment counselling centre in Montreal.

## Requirements

- Node.js 20 or newer
- npm

## Install

From the project root:

```bash
npm install
```

## Development

Start the Angular development server:

```bash
npm start
```

Open `http://localhost:4200/` in your browser.

You can also use the helper script on Windows:

```bat
rebuild-and-start.bat
```

The application supports French and English routes:

- `http://localhost:4200/fr`
- `http://localhost:4200/en`

## Production build

Build the static Angular application:

```bash
npm run build
```

Build output is written to `client/dist/client/browser/`. Deploy that directory to a static web host configured with an SPA fallback to `index.html`.

## GitHub Pages

See the [GitHub Pages deployment guide](docs/github-pages-deployment.md) for setup,
publishing steps, manual deployments, and troubleshooting.

The root `.github/workflows/deploy.yml` workflow builds and deploys `main` to
https://danieloseguin67.github.io/cibleemploi/ on each push, or manually from GitHub Actions.
In the repository's Settings > Pages, select **GitHub Actions** as the source.

Run `npm run build:prod` locally to verify the build with the `/cibleemploi/` base path.
After pushing changes, `npm run deploy` can trigger the workflow using an authenticated GitHub CLI.
The workflow publishes `index.html` as `404.html` so direct Angular route links load the app;
GitHub Pages still returns HTTP 404 for those direct links.

## Tests

Run the Angular unit tests with:

```bash
npm test --workspace client
```

## Content

Localized content is stored in:

```text
client/src/assets/content/fr/
client/src/assets/content/en/
```

The language switcher preserves the current page path when changing languages.

## Forms

The contact form validates the entered information and opens the user's email app
with a draft addressed to `info@cibleretour.com`. The subject, name, email address,
and message are included. The user must send the email from their email app;
the website cannot confirm whether the app opened or the email was sent. Form
values remain available to copy if no email handler is configured or the draft
is too long for the browser/email app's mailto support.

The career form still displays a local success message only. Neither form is
connected to an email service or backend.

## Project structure

```text
client/                 Angular application
client/src/app/         Components, routes, services, and models
client/src/assets/      Images and localized JSON content
rebuild-and-start.bat   Windows build and development helper
```
