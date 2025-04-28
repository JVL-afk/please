# AFFILIFY - AI-Powered Affiliate Marketing Platform

AFFILIFY is a comprehensive platform designed to help affiliate marketers create high-converting websites quickly and efficiently using the power of AI.

## Features

- **AI Website Analysis**: Analyze any website URL to identify products, assess affiliate potential, and understand audience targeting.
- **AI Website Generation**: Automatically create complete affiliate marketing websites based on analysis results or source URLs.
- **Dashboard**: Manage your created websites, track analytics (visits, conversions, revenue), and monitor analyses.
- **Customization**: Options to customize themes and layouts (future feature).
- **API Access**: Integrate AFFILIFY's capabilities into your own applications (future feature).

## Project Structure

This project is built with Next.js using the App Router.

- `/app`: Contains all application routes and pages.
  - `/(auth)`: Group for authentication-related pages (login, signup).
  - `/dashboard`: User dashboard sections (main, my-websites, analyze-website, create-website, my-analyses).
  - Other top-level pages (home, pricing, features, docs, terms, privacy, cookies).
- `/components`: Reusable React components.
  - `/dashboard`: Components specific to the dashboard layout.
  - `/layout`: Shared layout components (Header, Footer).
  - `/ui`: Basic UI elements (future use).
- `/lib`: Utility functions and helper code.
  - `/auth`: Authentication-related logic (future use).
  - `/api`: API interaction logic (future use).
  - `/utils`: General utility functions (future use).
- `/public`: Static assets (images, fonts, etc.).
- Configuration files (`next.config.js`, `tailwind.config.js`, `package.json`, etc.) at the root.

## Getting Started

1.  **Clone the repository** (or download the code).
2.  **Install dependencies**: `npm install`
3.  **Run the development server**: `npm run dev`
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is optimized for deployment on Vercel. See `VERCEL_DEPLOYMENT.md` for detailed instructions.

**Key Vercel Settings:**

- **Framework Preset**: Next.js
- **Root Directory**: (Leave blank if deploying from the root of the repository, or specify the subdirectory if applicable)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Contributing

(Add contribution guidelines if applicable)

## License

(Specify license, e.g., MIT)
