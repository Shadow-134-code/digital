# HZ Digital Solutions

Next.js App Router, React and JavaScript/JSX. Open this folder in VS Code.

## Run locally

Install Node.js 22 or newer, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` then `npm start`.

## GitHub and your new Vercel account

1. Extract this folder and put its contents at the root of your GitHub repository. Include the public folder: its images, fonts and six videos are used by the website.
2. Sign into your intended Vercel account and import that repository as a NEW project.
3. Select the Next.js preset. Keep the default build command and output directory. No account IDs, deployment tokens or old Vercel project links are included.
4. Deploy from your new account when ready. This package has not been deployed by Codex.

## Editing

- app/: page routes, metadata and shared CSS.
- views/: page content and layouts.
- components/: navigation, footer, forms, FAQs, media and motion.
- data/site.js: services, website projects and FAQs.
- data/commercialFilms.js: commercial films and posters.
- data/thumbnailArtwork.js: the five selected thumbnail artworks.
- public/: only media and fonts referenced by the website.

## Enquiries

The form sends directly to FormSubmit for zain@hzdigitalsolutions.com. No private API key is needed for this integration. Activate the FormSubmit email in that inbox before expecting delivery. The last service test reported activation required; inbox delivery is NOT verified. After activation, submit a test from your new live domain and check the inbox and spam folder. Provider activation requirements may apply to the new domain.

The optional assets field accepts HTTP/HTTPS links. The form preserves your brief when a request fails and offers an email-app fallback; it never reports a provider failure as success. Endpoint and recipient are in components/ContactForm.jsx. This release is the public website, with no admin login or database.

## Motion and security

Native wheel/touch scrolling, short section reveals, continuous ribbons and gentle staggered floating on the three opening examples. Floating movement continues on mobile and is independent of hover. Reduced-motion preferences disable decorative movement. No scroll hijacking, parallax controller or pause button. Logos stay upright. The third service card remains red on both Home and Services.

Security headers and a fresh script nonce are configured in middleware.js and next.config.mjs. Styles allow inline attributes for animation; scripts do not allow unsafe-inline in production. Keep the normal Next.js server deployment: do not switch to static export without revisiting the nonce configuration. The PostCSS override patches the dependency inherited from Next.js 15. Keep dependencies updated and enable two-factor authentication for GitHub, Vercel and your email account. No website can be guaranteed immune to compromise.

The archive excludes dependencies, build output, credentials, previous releases and unused assets. Run npm ci to restore dependencies from the lockfile.
