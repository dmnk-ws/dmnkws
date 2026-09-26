# dmnkws.dev

Personal portfolio website of [me](https://www.dmnkws.dev), built with [Next.js](https://nextjs.org) (App Router), React 19 and Tailwind CSS 4.

The site is a single page with the sections **Home**, **About**, **Portfolio** and **Contact**, available in English, German and Spanish.

## Tech Stack

- [Next.js 16](https://nextjs.org) with React 19 and TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Resend](https://resend.com) and [React Email](https://react.email) for the contact form
- [Font Awesome](https://fontawesome.com) icons
- [Jest](https://jestjs.io) and [Testing Library](https://testing-library.com) for tests
- ESLint and Prettier

## Getting Started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

The contact form sends emails via Resend. Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=your-resend-api-key
RESEND_FROM=sender@your-verified-domain.com
RESEND_TO=recipient@example.com
```

Without these, the rest of the site works, but submitting the contact form fails.

## Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start the development server       |
| `npm run build`      | Create a production build          |
| `npm run start`      | Serve the production build         |
| `npm run lint`       | Run ESLint                         |
| `npm run format`     | Format the code with Prettier      |
| `npm test`           | Run the Jest test suite            |
| `npm run test:watch` | Run the tests in watch mode        |

## Project Structure

```
app/          Root layout, page and the contact form server action
components/   UI components, grouped by section (navigation, about, portfolio, form, ...)
constants/    Content such as experiences, education and portfolio projects
context/      Translation and active-section providers
lib/          Form validation and rate limiting
locales/      Translations (en, de, es)
public/       Static assets
```

## Contact Form

Submissions are handled by a server action (`app/actions/contact.ts`) that validates the input, filters bots with a honeypot field and limits each IP to three messages per hour before sending the email through Resend.

## CI

GitHub Actions (`.github/workflows/main.yml`) builds, lints and tests the project on every push.
