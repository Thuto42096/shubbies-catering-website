# Shubbies Catering and Decor Website

An elegant and classy website for Shubbies Catering and Decor, a premium South African catering and event decoration business. This website serves as a portfolio showcase and includes a comprehensive booking system with payment integration.

## Features

- 🎨 **Elegant Design**: Sophisticated, classy design with gold accents and smooth animations
- 📸 **Hero Slideshow**: Full-screen slideshow on the landing page showcasing your best work
- 📖 **About & Services**: Detailed information about the business and services offered
- 🖼️ **Portfolio Gallery**: Filterable gallery to showcase your events by category
- 📝 **Contact Form**: Easy-to-use contact form for inquiries
- 🎫 **Booking System**: Multi-step booking form with service selection and cost estimation
- 📱 **Fully Responsive**: Works beautifully on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Playfair Display (headings) & Montserrat (body)
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
   npm install framer-motion react-icons
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

## How Bookings Work

Currently, the booking system:
1. Collects customer information through a 4-step form
2. Calculates estimated costs based on services selected
3. Logs the booking data to the browser console
4. Shows a confirmation message to the customer

**To receive booking notifications**, you can:
- Integrate an email service (EmailJS, SendGrid, Resend)
- Use Google Forms integration
- Add a WhatsApp direct booking option
- Set up a backend service to store bookings

See `SETUP_GUIDE.md` for detailed options.

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
- Phone: 074 208 6850
- Contact: Mkhululi Shezi

## License

© 2026 Shubbies Catering and Decor. All rights reserved.
