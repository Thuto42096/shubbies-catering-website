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
npm install framer-motion react-icons
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

✅ **Contact details have been updated:**

### `app/components/ContactSection.tsx`
- Phone: 074 208 6850
- Email: info@shubbiescatering.co.za
- Name: Mkhululi Shezi

### `app/components/Footer.tsx`
- WhatsApp: 27742086850 (already updated)
- **Still need to update:**
  - Facebook page URL (currently placeholder)
  - Instagram profile URL (currently placeholder)

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

## Step 7: How Bookings Work

The booking system currently works as follows:

1. **Customer fills out the booking form** (4 steps)
2. **Form data is logged to browser console** (you can see it in browser dev tools)
3. **Customer receives confirmation message**
4. **You contact them within 24 hours** to confirm details and arrange payment

### To Receive Booking Notifications:

For now, you'll need to check the browser console logs or implement one of these solutions:

**Option A: Email Integration (Recommended)**
- Use a service like EmailJS, SendGrid, or Resend
- Forms will email you directly when submitted
- No database needed

**Option B: Google Forms Integration**
- Create a Google Form with the same fields
- Link to it from your booking page
- Responses go to Google Sheets

**Option C: WhatsApp Direct Link**
- Add a "Book via WhatsApp" button
- Pre-fills message with booking details
- Direct communication with customers

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

