# Gary's Roofing Website

A modern, professional website for Gary's Roofing - a roofing company based in Cambridge, Ontario, Canada.

## Features

- **Modern Design**: Clean, professional design with a blue and orange color scheme
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **8 Pages**:
  - Home - Hero section, services overview, why choose us
  - About - Company story, values, certifications
  - Services - Detailed service offerings
  - Gallery - Before/after project photos with lightbox
  - Service Areas - Interactive map with Leaflet
  - Contact - Contact form with validation
  - Get a Quote - Comprehensive quote request form
  - Privacy & Terms - Legal pages

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Maps**: Leaflet + React Leaflet
- **Gallery**: yet-another-react-lightbox
- **Fonts**: Google Fonts (Inter, Poppins)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd garys-roofing
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Create environment variables
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Edit `.env.local` with your configuration

5. Run the development server
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables in Vercel settings
4. Deploy!

The site will be available at a vercel.app subdomain, which you can later connect to your custom domain.

## Email Configuration

The contact and quote forms are configured to use Resend for sending emails. To enable email functionality:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to your environment variables
4. Uncomment the email sending code in:
   - `/app/api/contact/route.ts`
   - `/app/api/quote/route.ts`

## Environment Variables

Required:
- `NEXT_PUBLIC_SITE_URL` - Your website URL
- `CONTACT_EMAIL` - Email address to receive form submissions

Optional:
- `RESEND_API_KEY` - Resend API key for email functionality
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID

## Project Structure

\`\`\`
garys-roofing/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── quote/             # Quote request page
│   ├── service-areas/     # Service areas page
│   ├── services/          # Services page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/            # Header, Footer, Navigation
│   ├── home/              # Home page sections
│   ├── gallery/           # Gallery components
│   ├── map/               # Map components
│   ├── forms/             # Form components
│   └── ui/                # Reusable UI components
├── data/                  # Data files
│   ├── projects.ts        # Gallery projects
│   ├── services.ts        # Services data
│   └── serviceAreas.ts    # Geographic data
├── lib/                   # Utilities
│   └── validation/        # Zod schemas
└── public/                # Static files
    └── images/            # Images
\`\`\`

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

\`\`\`typescript
colors: {
  primary: { /* Deep blue */ },
  secondary: { /* Slate gray */ },
  accent: { /* Warm orange */ },
}
\`\`\`

### Content

- **Services**: Edit `/data/services.ts`
- **Gallery Projects**: Edit `/data/projects.ts`
- **Service Areas**: Edit `/data/serviceAreas.ts`
- **Company Info**: Edit components in `/components/home/`

### Contact Information

Update phone number and email in:
- `/components/layout/Header.tsx`
- `/components/layout/Footer.tsx`
- `/app/contact/page.tsx`
- `/app/quote/page.tsx`

## Performance

The site is optimized for performance:
- Image optimization with Next.js Image component
- Font optimization with Next.js Font loader
- Code splitting and lazy loading
- Tailwind CSS purging for minimal CSS bundle
- Target Lighthouse score: 90+

## License

Copyright © 2024 Gary's Roofing. All rights reserved.

## Support

For questions or issues, contact Gary's Roofing at info@garysroofing.ca
