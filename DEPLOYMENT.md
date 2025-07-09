# Deployment Guide

This document provides step-by-step instructions for deploying the Manav Kumar Jha portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Free tier available
- Perfect for Node.js + React apps

**Steps:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. Add environment variables (if needed)
8. Deploy!

### 2. Netlify

**Steps:**
1. Build the project locally:
   ```bash
   npm run build
   ```
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. For continuous deployment:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### 3. Railway

**Steps:**
1. Visit [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway will auto-detect the Node.js app
7. Add environment variables
8. Deploy!

### 4. Heroku

**Steps:**
1. Install Heroku CLI
2. Login to Heroku:
   ```bash
   heroku login
   ```
3. Create a new app:
   ```bash
   heroku create your-app-name
   ```
4. Add buildpack:
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```
5. Deploy:
   ```bash
   git push heroku main
   ```

## 📋 Pre-Deployment Checklist

### Essential Files
- [ ] `package.json` - Dependencies and scripts
- [ ] `README.md` - Project documentation
- [ ] `.gitignore` - Git ignore rules
- [ ] `LICENSE` - License information
- [ ] `.env.example` - Environment variables template

### Configuration
- [ ] Update personal information in components
- [ ] Add your resume to `client/public/resume.pdf`
- [ ] Configure contact form endpoint
- [ ] Set up environment variables
- [ ] Test build process locally

### SEO & Performance
- [ ] Add proper meta tags
- [ ] Optimize images
- [ ] Test responsive design
- [ ] Check loading speeds
- [ ] Validate HTML/CSS

## 🔧 Build Configuration

### Production Build
```bash
npm run build
```

This command will:
1. Build the React frontend with Vite
2. Bundle the Express backend with esbuild
3. Create optimized static files in `dist/`

### Environment Variables

Create a `.env` file with:
```env
NODE_ENV=production
PORT=5000
DATABASE_URL=your_database_url_here
```

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to "Site settings" → "Domain management"
2. Add custom domain
3. Configure DNS records

## 📧 Contact Form Configuration

### Option 1: Email Service (Recommended)
Add email configuration to your environment:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Option 2: Form Submission Services
- **Formspree**: Simple form handling
- **Netlify Forms**: Built-in form processing
- **EmailJS**: Client-side email sending

## 🔍 SEO Optimization

### Meta Tags
Already configured in `client/index.html`:
```html
<title>Manav Kumar Jha - Data Analyst & ML Engineer</title>
<meta name="description" content="Professional portfolio of Manav Kumar Jha...">
```

### Google Analytics (Optional)
Add to `client/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails with module not found**
   - Check `package.json` dependencies
   - Run `npm install`

2. **Contact form not working**
   - Verify API endpoint
   - Check CORS configuration
   - Ensure proper environment variables

3. **Images not loading**
   - Verify file paths
   - Check build output
   - Ensure proper public folder setup

4. **Routing issues (404 on refresh)**
   - Configure server for SPA routing
   - Add `_redirects` file for Netlify:
     ```
     /*    /index.html   200
     ```

### Debug Commands:
```bash
# Check build output
npm run build
ls -la dist/

# Test production build locally
npm start

# Check for TypeScript errors
npm run check
```

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files
   - Use platform-specific environment configuration
   - Validate all inputs

2. **CORS Configuration**
   - Configure proper origins
   - Limit API access

3. **Contact Form Security**
   - Implement rate limiting
   - Add CAPTCHA if needed
   - Validate all inputs

## 📊 Performance Optimization

### Vite Optimizations (Already configured)
- Tree shaking
- Code splitting
- Asset optimization
- Modern browser targets

### Additional Optimizations
- Compress images
- Enable gzip compression
- Use CDN for static assets
- Implement caching headers

## 🌟 Post-Deployment

### Monitoring
- Set up error tracking (Sentry)
- Monitor performance (Google PageSpeed)
- Track analytics (Google Analytics)

### Maintenance
- Regular dependency updates
- Security patches
- Content updates
- Performance monitoring

## 📞 Support

If you encounter issues during deployment:

1. Check the hosting platform's documentation
2. Review the troubleshooting section above
3. Check GitHub issues for similar problems
4. Contact support through the platform's help center

---

**Happy Deploying! 🚀**