# Quick Setup Guide for Shubbies Catering Website

## Step 1: Fix PowerShell Execution Policy (Windows)

Before you can run npm commands, you need to fix the PowerShell execution policy:

1. Open PowerShell as Administrator (Right-click → Run as Administrator)
2. Run this command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y` and press Enter to confirm

## Step 2: Install Dependencies

Now you can install the required packages:

```bash
npm install framer-motion react-icons @supabase/supabase-js
```

## Step 3: Add Your Images

The website needs images to display properly. Add your business photos to `public/images/`:

### Required Images:
- **slide1.jpg** - Main hero image (1920x1080px)
- **slide2.jpg** - Second slideshow image (1920x1080px)
- **slide3.jpg** - Third slideshow image (1920x1080px)
- **about.jpg** - About section image (800x600px)
- **portfolio1.jpg** to **portfolio6.jpg** - Portfolio gallery images (800x600px each)

### Where to Get Images:
If you don't have professional photos yet, you can use temporary placeholders from:
- https://unsplash.com (search: "elegant catering", "event decor", "wedding reception")
- https://pexels.com (search: "catering", "event setup", "party decor")

Download high-quality images and save them with the exact names above in the `public/images/` folder.

## Step 4: Update Contact Information

Edit these files to add your real contact details:

### `app/components/ContactSection.tsx`
Find and replace:
- `+27 XX XXX XXXX` with your phone number
- `info@shubbiescatering.co.za` with your email

### `app/components/Footer.tsx`
Update the WhatsApp link:
- Replace `27XXXXXXXXX` with your WhatsApp number (format: 27821234567)
- Update social media links (Facebook, Instagram)

## Step 5: Run the Development Server

```bash
npm run dev
```

Open your browser and go to: http://localhost:3000

## Step 6: Customize Colors (Optional)

To change the gold color scheme, edit `app/globals.css`:

```css
:root {
  --gold: #d4af37;        /* Change this to your preferred color */
  --gold-light: #f4e4b8;
  --gold-dark: #b8941f;
}
```

## Step 7: Set Up Supabase (For Database & Bookings)

1. Go to https://supabase.com and create a free account
2. Create a new project
3. Go to Project Settings → API
4. Copy your project URL and anon key
5. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```
6. In Supabase, go to SQL Editor and create these tables:

```sql
-- Contact Inquiries Table
CREATE TABLE contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_date DATE,
  event_type TEXT,
  guests INTEGER,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Bookings Table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  venue TEXT NOT NULL,
  number_of_guests INTEGER NOT NULL,
  catering_service BOOLEAN DEFAULT FALSE,
  decor_service BOOLEAN DEFAULT FALSE,
  full_planning_service BOOLEAN DEFAULT FALSE,
  dietary_requirements TEXT,
  special_requests TEXT,
  budget TEXT,
  estimated_total NUMERIC,
  payment_status TEXT DEFAULT 'pending',
  booking_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

7. Uncomment the Supabase code in `lib/supabase.ts`

## Step 8: Deploy to Vercel (Free Hosting)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Sign up with GitHub
4. Click "Import Project"
5. Select your repository
6. Add your environment variables (from `.env.local`)
7. Click "Deploy"

Your website will be live in minutes!

## Need Help?

- Check the main README.md for detailed documentation
- Review the code comments in each component
- Contact: info@shubbiescatering.co.za

## Next Steps

1. ✅ Install dependencies
2. ✅ Add your images
3. ✅ Update contact information
4. ✅ Test the website locally
5. ⏳ Set up Supabase for bookings
6. ⏳ Integrate payment gateway (PayFast recommended for South Africa)
7. ⏳ Deploy to Vercel
8. ⏳ Connect your custom domain

Good luck with your website! 🎉

