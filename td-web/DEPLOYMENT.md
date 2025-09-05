# Thabo Digital Website - Deployment Guide

## 🚀 Quick Start

The website is now ready for deployment! The development server is running and you can view it at `http://localhost:3000`.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

## 🔧 Environment Setup

1. **Create environment variables file** `.env.local`:
```env
# Email Configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@thabodigital.co.za

# Optional: Analytics and other services
GOOGLE_ANALYTICS_ID=your-ga-id
FACEBOOK_PIXEL_ID=your-fb-pixel-id
```

2. **Update contact information** in `src/lib/utils.ts`:
- Phone number: `+27 71 234 5678`
- Email: `info@thabodigital.co.za`
- Address: Update Tzaneen location details

3. **Update social links** in `src/components/layout/Footer.tsx`:
- Facebook, LinkedIn, Twitter URLs
- WhatsApp number: `27712345678`

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Follow prompts to:
# - Link to GitHub repository
# - Set environment variables
# - Configure custom domain
```

### Option 2: Netlify
```bash
# Build the project
npm run build

# Install Netlify CLI
npm i -g netlify-cli

# Deploy to Netlify
netlify deploy --prod

# Set environment variables in Netlify dashboard
```

### Option 3: Traditional Hosting
```bash
# Build the project
npm run build

# Upload the `out` or `.next` folder to your web server
# Configure your web server to handle Next.js routing
```

## 📱 Testing Checklist

Before going live, test:

- [ ] Contact form submission and email delivery
- [ ] WhatsApp button functionality
- [ ] Mobile responsiveness on different devices
- [ ] Page loading speeds
- [ ] SEO meta tags and structured data
- [ ] Accessibility features
- [ ] Cookie banner functionality
- [ ] All internal and external links

## 🔍 SEO Optimization

1. **Update meta tags** in each page's `metadata` export
2. **Customize JSON-LD schema** in `src/lib/utils.ts`
3. **Add Google Analytics** tracking code
4. **Submit sitemap** to Google Search Console
5. **Verify business** on Google My Business

## 🎨 Customization Guide

### Colors
Update brand colors in `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#08408B', // Deep blue
    600: '#063a7d',
  },
  accent: {
    500: '#FF914D', // Vibrant orange
  }
}
```

### Content
- Update testimonials in `src/lib/data.ts`
- Add real blog posts in `src/lib/data.ts`
- Update portfolio items with real projects
- Customize service descriptions

### Images
- Replace placeholder images with actual project photos
- Optimize images for web (max 200KB, WebP format preferred)
- Add proper alt text for accessibility

## 📞 Support

For technical support or customization requests:
- Email: info@thabodigital.co.za
- WhatsApp: +27 71 234 5678
- Business Hours: Mon-Fri 8:00 AM - 5:00 PM (SAST)

## 📄 License

This website template is built for Thabo Digital. All rights reserved.
