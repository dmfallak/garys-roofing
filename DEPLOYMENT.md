# Deployment Guide for Gary's Roofing Website

## Quick Start - Deploy to Vercel

The easiest way to deploy your Next.js website is with Vercel:

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Gary's Roofing website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/garys-roofing.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import your `garys-roofing` repository
5. Vercel will auto-detect it's a Next.js project
6. Click "Deploy"

Your site will be live at `https://garys-roofing.vercel.app` in about 2 minutes!

### Step 3: Configure Environment Variables (Optional)

To enable email functionality:

1. In your Vercel project dashboard, go to "Settings" → "Environment Variables"
2. Add these variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://garys-roofing.vercel.app` (or your custom domain)
   - `CONTACT_EMAIL` = `gary@garysroofing.ca` (your email)
   - `RESEND_API_KEY` = Get from [resend.com](https://resend.com) after signing up

3. Redeploy your site for changes to take effect

### Step 4: Add Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your domain (e.g., `garysroofing.ca`)
3. Follow the instructions to update your DNS settings
4. Vercel will automatically provision SSL certificate

## Email Setup (To Enable Forms)

The contact and quote forms are ready but need email service configuration:

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use their test domain
3. Get your API key from the dashboard
4. Add `RESEND_API_KEY` to Vercel environment variables
5. Uncomment the email code in:
   - `/app/api/contact/route.ts`
   - `/app/api/quote/route.ts`
6. Install Resend:
   ```bash
   npm install resend
   ```
7. Deploy changes

### Option 2: Other Email Services

You can also use:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer with Gmail

Update the API routes accordingly.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Building for Production

```bash
# Test production build locally
npm run build
npm start
```

## Customization After Deployment

### Update Contact Information

Find and replace these placeholders:
- Phone: `(519) 555-1234` → Your real phone number
- Email: `info@garysroofing.ca` → Your real email

Files to update:
- `/components/layout/Header.tsx`
- `/components/layout/Footer.tsx`
- `/app/contact/page.tsx`
- `/app/quote/page.tsx`
- `/components/home/Hero.tsx`

### Add Real Project Photos

Replace stock photos in `/data/projects.ts` with your own:
1. Add photos to `/public/images/projects/`
2. Update the `beforeImage` and `afterImage` URLs in `/data/projects.ts`

### Update Services

Edit `/data/services.ts` to modify your service offerings.

### Update Service Areas

Edit `/data/serviceAreas.ts` to change the cities you serve.

## Performance Optimization

Your site is already optimized with:
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Font optimization
- ✅ Tailwind CSS purging
- ✅ Static page generation where possible

Target metrics (check with Lighthouse):
- Performance: 90+
- SEO: 95+
- Accessibility: 90+
- Best Practices: 90+

## SEO Setup

After deployment:

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property
   - Submit sitemap: `https://your-domain.com/sitemap.xml`

2. **Google Business Profile**
   - Create/claim your business listing
   - Add photos, hours, location
   - Link to your new website

3. **Analytics** (Optional)
   - Set up Google Analytics 4
   - Add `NEXT_PUBLIC_GA_ID` environment variable
   - Uncomment analytics code in `/app/layout.tsx`

## Monitoring

Vercel provides:
- Automatic deployments on git push
- Preview deployments for pull requests
- Analytics dashboard
- Error monitoring
- Performance metrics

## Cost Summary

**Free tier includes:**
- Hosting: Free (Vercel)
- SSL Certificate: Free (automatic)
- Email: Free tier (Resend - 100 emails/day)
- Maps: Free (OpenStreetMap)

**Optional costs:**
- Domain name: ~$15-30/year
- Professional email: $6/month (Google Workspace)
- Premium analytics: $0-9/month

## Support

Need help? Check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Forms Not Working
- Check environment variables in Vercel
- Verify Resend API key is correct
- Check API route logs in Vercel dashboard

### Map Not Loading
- Check browser console for errors
- Ensure JavaScript is enabled
- Try clearing browser cache

## Next Steps

1. ✅ Deploy to Vercel
2. ⬜ Configure email service
3. ⬜ Add custom domain
4. ⬜ Replace placeholder content
5. ⬜ Update contact information
6. ⬜ Submit sitemap to Google
7. ⬜ Set up Google Business Profile
8. ⬜ Start getting customers!

Good luck with Gary's Roofing! 🏠
