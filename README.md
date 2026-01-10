# Shubbies Catering and Decor Website

An elegant and classy website for Shubbies Catering and Decor, a premium South African catering and event decoration business. This website serves as a portfolio showcase and includes a comprehensive booking system with payment integration.

## Features

- 🎨 **Elegant Design**: Sophisticated, classy design with gold accents and smooth animations
- 📸 **Hero Slideshow**: Full-screen slideshow on the landing page showcasing your best work
- 📖 **About & Services**: Detailed information about the business and services offered
- 🖼️ **Portfolio Gallery**: Filterable gallery to showcase your events by category
- 📝 **Contact Form**: Easy-to-use contact form for inquiries
- 🎫 **Booking System**: Multi-step booking form with service selection
- 💳 **Payment Integration**: Ready for payment gateway integration (PayFast, Paystack, etc.)
- 📱 **Fully Responsive**: Works beautifully on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Playfair Display (headings) & Montserrat (body)
- **Database**: Supabase (ready to integrate)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shubbies-catering-website.git
   cd shubbies-catering-website
   ```

2. **Fix PowerShell Execution Policy (Windows users)**

   If you encounter script execution errors, run PowerShell as Administrator and execute:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Add your images**

   Place your business images in the `public/images/` directory. See `public/images/README.md` for required image names and specifications.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials:
   - Supabase URL and API key
   - Payment gateway credentials
   - Email service API key

### Adding Images

Replace placeholder images in `public/images/`:
- `slide1.jpg`, `slide2.jpg`, `slide3.jpg` - Hero slideshow
- `about.jpg` - About section
- `portfolio1.jpg` through `portfolio6.jpg` - Portfolio gallery

### Customization

#### Colors
Edit `app/globals.css` to change the color scheme:
```css
:root {
  --gold: #d4af37;        /* Primary accent color */
  --gold-light: #f4e4b8;  /* Light accent */
  --gold-dark: #b8941f;   /* Dark accent */
}
```

#### Contact Information
Update contact details in:
- `app/components/ContactSection.tsx`
- `app/components/Footer.tsx`

## Setting Up Supabase (Optional)

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Create the database tables** using the schema in `lib/supabase.ts`

3. **Add environment variables** to `.env.local`

4. **Uncomment Supabase code** in `lib/supabase.ts`

5. **Install Supabase client**:
   ```bash
   npm install @supabase/supabase-js
   ```

## Payment Integration

The booking system is ready for payment gateway integration. Popular South African options:

- **PayFast**: https://www.payfast.co.za
- **Paystack**: https://paystack.com
- **Stripe**: https://stripe.com

Add your payment gateway integration in `app/booking/page.tsx` in the `handleSubmit` function.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Project Structure

```
shubbies-catering-website/
├── app/
│   ├── components/         # React components
│   │   ├── HeroSlideshow.tsx
│   │   ├── AboutSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── booking/           # Booking page
│   │   └── page.tsx
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── public/
│   └── images/            # Image assets
├── lib/
│   └── supabase.ts        # Database configuration
└── README.md
```

## Support

For questions or support, contact:
- Email: info@shubbiescatering.co.za
- Phone: +27 XX XXX XXXX

## License

© 2026 Shubbies Catering and Decor. All rights reserved.
