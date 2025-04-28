# Vercel Deployment Guide for AFFILIFY

This guide will walk you through the process of deploying your updated AFFILIFY website to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)
3. The updated AFFILIFY codebase (provided in the zip file)

## Step 1: Upload the Code to GitHub

1. Go to your existing GitHub repository: https://github.com/JVL-afk/hopeless
2. You can either:
   - Replace the files in the existing Afilify directory with the updated files
   - Or create a new repository for the updated version

To update your existing repository:

1. Clone your repository locally:
   ```bash
   git clone https://github.com/JVL-afk/hopeless.git
   ```
2. Replace the files in the Afilify directory with the updated files
3. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Update AFFILIFY website with new features and fixes"
   git push
   ```

## Step 2: Deploy to Vercel

1. Log in to your Vercel account at [vercel.com](https://vercel.com)
2. Click on "Add New..." → "Project"
3. Select your GitHub repository (hopeless)
4. Configure the project with the following settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: Afilify (this is critical - make sure to set this correctly)
   - **Build Command**: npm run build
   - **Output Directory**: .next
   - **Install Command**: npm install
5. Click "Deploy"

## Step 3: Verify Your Deployment

1. Once the deployment is complete, Vercel will provide you with a URL (e.g., hopeless-omega.vercel.app)
2. Visit this URL to verify that your website is working correctly
3. Test all the key functionality:
   - Navigation between pages
   - Authentication (sign-up, sign-in)
   - Dashboard access
   - Pricing page toggle
   - Features page
   - Cookie policy page

## Step 4: Connect Your Custom Domain (Affilify.eu)

1. In your Vercel dashboard, go to your project settings
2. Click on "Domains"
3. Enter your domain: affilify.eu
4. Follow Vercel's instructions to update your DNS settings at GoDaddy:
   - Add a CNAME record pointing to cname.vercel-dns.com
   - Or use Vercel's nameservers as instructed

## Step 5: SSL Configuration

Vercel automatically provisions SSL certificates for your domain. Once your DNS changes have propagated, your site will be accessible via HTTPS.

## Troubleshooting

If you encounter any issues during deployment:

1. **Build Errors**: Check the build logs in Vercel for specific error messages
2. **404 Errors**: Ensure your Root Directory is set to "Afilify"
3. **Styling Issues**: Verify that all CSS files are properly imported
4. **API Errors**: Check that your API routes are correctly configured

## Maintenance and Updates

To update your site in the future:

1. Make changes to your local repository
2. Commit and push to GitHub
3. Vercel will automatically rebuild and deploy your site

## Support

If you need assistance with your deployment, you can:

1. Contact Vercel support through their dashboard
2. Refer to Vercel's documentation at [vercel.com/docs](https://vercel.com/docs)
3. Contact us at support@affilify.eu
