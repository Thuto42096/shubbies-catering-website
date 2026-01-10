# Troubleshooting Guide

## Common Issues and Solutions

### 1. PowerShell Script Execution Error

**Error**: `cannot be loaded because running scripts is disabled on this system`

**Solution**:
```powershell
# Run PowerShell as Administrator, then:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. Images Not Showing

**Problem**: You see broken image icons or missing images

**Solutions**:
- Make sure you have added images to `public/images/` directory
- Check that image file names match exactly (case-sensitive):
  - slide1.jpg, slide2.jpg, slide3.jpg
  - about.jpg
  - portfolio1.jpg through portfolio6.jpg
- Verify images are in JPG or PNG format
- Try using placeholder images from Unsplash.com first

**Quick Test**: Create a simple test image:
1. Download any image from Unsplash.com
2. Rename it to `slide1.jpg`
3. Copy it to `public/images/slide1.jpg`
4. Refresh your browser

### 3. npm install Fails

**Error**: Various npm installation errors

**Solutions**:
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Make sure you have Node.js 18+ installed: `node --version`
- Try using `npm install --legacy-peer-deps`

### 4. Port 3000 Already in Use

**Error**: `Port 3000 is already in use`

**Solutions**:
- Kill the process using port 3000:
  ```powershell
  # Windows PowerShell
  Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
  ```
- Or use a different port:
  ```bash
  npm run dev -- -p 3001
  ```

### 5. Styling Not Applied

**Problem**: Website looks unstyled or broken

**Solutions**:
- Make sure Tailwind CSS is installed: `npm install tailwindcss`
- Clear Next.js cache: Delete `.next` folder
- Restart the development server: `npm run dev`
- Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### 6. TypeScript Errors

**Error**: Red squiggly lines or type errors

**Solutions**:
- Run `npm install` to ensure all dependencies are installed
- Restart VS Code
- Check that `typescript` is installed: `npm install typescript`
- Run type check: `npm run build`

### 7. Contact Form Not Submitting

**Problem**: Form doesn't do anything when submitted

**Expected Behavior**: 
- Currently, the form shows a success message but doesn't save data
- This is normal - you need to set up Supabase first
- See `SETUP_GUIDE.md` for Supabase setup instructions

### 8. Booking System Not Calculating Prices

**Problem**: Estimated total shows R0

**Solution**:
- Make sure you've entered a number in "Number of Guests"
- Select at least one service (Catering, Decor, or Planning)
- The calculation happens automatically when you reach Step 4

### 9. Mobile Menu Not Working

**Problem**: Hamburger menu doesn't open on mobile

**Solutions**:
- Make sure JavaScript is enabled in your browser
- Clear browser cache
- Try a different browser
- Check browser console for errors (F12 → Console tab)

### 10. Smooth Scrolling Not Working

**Problem**: Clicking navigation links doesn't scroll smoothly

**Solutions**:
- This is a browser-specific feature
- Works best in modern browsers (Chrome, Firefox, Edge, Safari)
- Some older browsers may jump instead of smooth scroll
- This is normal and doesn't affect functionality

## Development Issues

### Hot Reload Not Working

**Problem**: Changes don't appear without manual refresh

**Solutions**:
- Save the file properly (Ctrl+S)
- Check that the dev server is still running
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again
- Check for syntax errors in your code

### Build Errors

**Error**: `npm run build` fails

**Solutions**:
- Check for TypeScript errors: Look at the error message
- Make sure all imports are correct
- Verify all required files exist
- Run `npm install` to ensure dependencies are installed

## Browser Issues

### Website Looks Different in Different Browsers

**Solution**: This is normal, but the website should work in:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ⚠️ Internet Explorer (not supported)

### Images Load Slowly

**Solutions**:
- Optimize images using TinyPNG.com
- Reduce image file sizes (aim for under 500KB each)
- Use JPG format for photos (smaller than PNG)
- Consider using WebP format for better compression

## Deployment Issues

### Vercel Deployment Fails

**Solutions**:
- Check build logs for specific errors
- Make sure all environment variables are set in Vercel
- Verify `package.json` has correct scripts
- Try deploying from a clean branch

### Environment Variables Not Working

**Problem**: Supabase or other services not connecting

**Solutions**:
- In development: Use `.env.local` file
- In production (Vercel): Add variables in Project Settings → Environment Variables
- Make sure variable names start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after adding new variables

## Getting More Help

### Check These Resources:
1. **Next.js Documentation**: https://nextjs.org/docs
2. **Tailwind CSS Docs**: https://tailwindcss.com/docs
3. **Supabase Docs**: https://supabase.com/docs
4. **Vercel Support**: https://vercel.com/support

### Still Stuck?

1. Check the browser console for errors (F12 → Console)
2. Look at the terminal where `npm run dev` is running
3. Search for the error message on Google or Stack Overflow
4. Review the code comments in the component files

### Common Error Messages Explained

- **"Module not found"**: Run `npm install`
- **"Cannot find module"**: Check import paths
- **"Unexpected token"**: Syntax error in your code
- **"Port already in use"**: Close other dev servers or use different port
- **"ENOENT: no such file"**: File path is wrong or file doesn't exist

## Prevention Tips

✅ **Best Practices**:
- Always run `npm install` after pulling new code
- Commit your changes regularly
- Test in multiple browsers
- Keep dependencies updated
- Use `.env.local` for sensitive data (never commit it!)
- Optimize images before adding them
- Clear cache when things look broken

Remember: Most issues can be solved by:
1. Restarting the dev server
2. Clearing the cache
3. Running `npm install` again
4. Checking for typos in file names and paths

