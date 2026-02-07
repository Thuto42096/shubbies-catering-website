# Shubbies Catering Website - Launch Checklist

Use this checklist to get your website up and running!

## 🚀 Phase 1: Initial Setup (Required)

### Step 1: Fix PowerShell (Windows Only)
- [ ] Open PowerShell as Administrator
- [ ] Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
- [ ] Confirm with 'Y'

### Step 2: Install Dependencies
- [ ] Open terminal in project folder
- [ ] Run: `npm install framer-motion react-icons @supabase/supabase-js`
- [ ] Wait for installation to complete (may take a few minutes)

### Step 3: Add Images
- [ ] Download or prepare 10 images for your website
- [ ] Rename them according to requirements:
  - [ ] slide1.jpg (hero slideshow)
  - [ ] slide2.jpg (hero slideshow)
  - [ ] slide3.jpg (hero slideshow)
  - [ ] about.jpg (about section)
  - [ ] portfolio1.jpg (portfolio gallery)
  - [ ] portfolio2.jpg (portfolio gallery)
  - [ ] portfolio3.jpg (portfolio gallery)
  - [ ] portfolio4.jpg (portfolio gallery)
  - [ ] portfolio5.jpg (portfolio gallery)
  - [ ] portfolio6.jpg (portfolio gallery)
- [ ] Place all images in `public/images/` folder

**Need images?** Use Unsplash.com or Pexels.com for temporary placeholders

### Step 4: Update Contact Information
- [x] Open `app/components/ContactSection.tsx`
  - [x] Phone: 074 208 6850
  - [x] Email: info@shubbiescatering.co.za
  - [x] Name: Mkhululi Shezi
- [x] Open `app/components/Footer.tsx`
  - [x] WhatsApp number updated: 27742086850
  - [ ] Update Facebook link (line 52) - Add your Facebook page URL
  - [ ] Update Instagram link (line 63) - Add your Instagram profile URL

### Step 5: Test Locally
- [ ] Run: `npm run dev`
- [ ] Open browser to http://localhost:3000
- [ ] Check that all sections load correctly:
  - [ ] Hero slideshow displays
  - [ ] About section shows
  - [ ] Portfolio gallery works
  - [ ] Contact form displays
  - [ ] Navigation works
  - [ ] Footer shows
- [ ] Click "Book Now" button
- [ ] Test booking form (all 4 steps)
- [ ] Test on mobile view (resize browser or use phone)

## 📊 Phase 2: Database Setup (For Bookings)

### Step 6: Create Supabase Account
- [ ] Go to https://supabase.com
- [ ] Sign up for free account
- [ ] Create new project
- [ ] Wait for project to be ready (2-3 minutes)

### Step 7: Set Up Database
- [ ] In Supabase, go to SQL Editor
- [ ] Copy SQL from `SETUP_GUIDE.md` (Step 7)
- [ ] Run the SQL to create tables
- [ ] Verify tables were created (check Table Editor)

### Step 8: Configure Environment Variables
- [ ] In Supabase, go to Project Settings → API
- [ ] Copy Project URL
- [ ] Copy anon/public key
- [ ] Create `.env.local` file in project root
- [ ] Add your Supabase credentials:
  ```
  NEXT_PUBLIC_SUPABASE_URL=your_url_here
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
  ```
- [ ] Open `lib/supabase.ts`
- [ ] Uncomment the Supabase client code (lines 5-10)
- [ ] Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

### Step 9: Test Database Connection
- [ ] Submit a test booking through the website
- [ ] Check Supabase Table Editor to see if booking was saved
- [ ] Submit a contact form inquiry
- [ ] Verify it appears in the database

## 💳 Phase 3: Payment Integration (Optional but Recommended)

### Step 10: Choose Payment Gateway
- [ ] Research options:
  - [ ] PayFast (recommended for South Africa)
  - [ ] Paystack
  - [ ] Stripe
- [ ] Sign up for chosen gateway
- [ ] Get API keys

### Step 11: Integrate Payment
- [ ] Add payment gateway credentials to `.env.local`
- [ ] Follow payment gateway documentation
- [ ] Update `app/booking/page.tsx` handleSubmit function
- [ ] Test with sandbox/test mode
- [ ] Verify payments are processed correctly

## 🌐 Phase 4: Deployment (Go Live!)

### Step 12: Prepare for Deployment
- [ ] Test everything works locally
- [ ] Commit all changes to Git
- [ ] Push to GitHub:
  ```bash
  git add .
  git commit -m "Initial website setup"
  git push origin main
  ```

### Step 13: Deploy to Vercel
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub
- [ ] Click "Import Project"
- [ ] Select your repository
- [ ] Add environment variables (from `.env.local`)
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 minutes)
- [ ] Visit your live website!

### Step 14: Custom Domain (Optional)
- [ ] Purchase domain (e.g., shubbiescatering.co.za)
- [ ] In Vercel, go to Project Settings → Domains
- [ ] Add your custom domain
- [ ] Update DNS records (Vercel provides instructions)
- [ ] Wait for DNS propagation (up to 24 hours)

## ✨ Phase 5: Final Touches

### Step 15: Content Review
- [ ] Review all text on the website
- [ ] Check for typos and grammar
- [ ] Ensure all information is accurate
- [ ] Update service descriptions if needed
- [ ] Verify pricing is correct

### Step 16: SEO Optimization
- [ ] Update page title in `app/layout.tsx`
- [ ] Update meta description
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

### Step 17: Social Media
- [ ] Share website on Facebook
- [ ] Share website on Instagram
- [ ] Update Instagram bio with website link
- [ ] Create Facebook page with website link
- [ ] Add website to Google My Business

### Step 18: Testing
- [ ] Test on different devices:
  - [ ] Desktop computer
  - [ ] Laptop
  - [ ] Tablet
  - [ ] Mobile phone
- [ ] Test on different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Ask friends/family to test
- [ ] Fix any issues found

## 📈 Phase 6: Ongoing Maintenance

### Regular Tasks
- [ ] Check for new bookings daily
- [ ] Respond to contact form inquiries within 24 hours
- [ ] Update portfolio images monthly
- [ ] Review and update pricing quarterly
- [ ] Keep software dependencies updated
- [ ] Monitor website performance
- [ ] Backup database regularly

### Marketing
- [ ] Collect customer testimonials
- [ ] Add testimonials section (future enhancement)
- [ ] Share portfolio images on social media
- [ ] Run promotions and update website accordingly
- [ ] Track website analytics
- [ ] Optimize based on user behavior

## 🎉 Launch Day Checklist

When you're ready to announce your website:
- [ ] All images are professional quality
- [ ] All contact information is correct
- [ ] Booking system is tested and working
- [ ] Payment processing is set up (if using)
- [ ] Website is live and accessible
- [ ] Mobile version works perfectly
- [ ] Social media links are correct
- [ ] You can receive booking notifications

Then:
- [ ] Announce on social media
- [ ] Email existing clients
- [ ] Update business cards with website
- [ ] Add website to all marketing materials
- [ ] Celebrate! 🎊

## Need Help?

- 📖 Read `SETUP_GUIDE.md` for detailed instructions
- 🔧 Check `TROUBLESHOOTING.md` if you encounter issues
- 📋 Review `PROJECT_SUMMARY.md` for overview
- 📚 See `README.md` for full documentation

## Progress Tracking

**Current Phase**: _________

**Completion**: _____ / 18 steps completed

**Target Launch Date**: _________

**Notes**:
_________________________________
_________________________________
_________________________________

---

Good luck with your website launch! 🚀✨

