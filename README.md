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

Build output is written to `client/dist/client/`. Deploy that directory to a static web host configured with an SPA fallback to `index.html`.

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

The contact and career forms currently perform client-side validation and display a local success message. They are not connected to an email service or backend.

## Project structure

```text
client/                 Angular application
client/src/app/         Components, routes, services, and models
client/src/assets/      Images and localized JSON content
rebuild-and-start.bat   Windows build and development helper
```
