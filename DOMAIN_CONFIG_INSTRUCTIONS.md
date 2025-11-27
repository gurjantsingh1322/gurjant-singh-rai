# ⚠️ IMPORTANT: Domain Configuration Instructions

## Before Your Website Goes Live

You have temporary placeholder "https://yourwebsite.com" throughout your SEO-optimized files. Follow these steps to replace with your actual domain:

---

## 🔄 Files to Update with Your Actual Domain

### 1. **index.html** - 12 Instances to Replace

**Line Locations:**
- Meta description (line ~20)
- Open Graph URL (line ~54)
- Canonical URL (line ~61)
- JSON-LD schema - Person section (line ~83)
- JSON-LD schema - WebSite section (line ~115)
- JSON-LD schema - LocalBusiness section (line ~125)
- Open Graph image URL (appears 3 times)

**Find & Replace:**
```
Find:  https://yourwebsite.com
Replace with: https://youractualdomain.com
```

### 2. **robots.txt** - 1 Instance

**Line 9:**
```xml
Find:    Sitemap: https://yourwebsite.com/sitemap.xml
Replace: Sitemap: https://youractualdomain.com/sitemap.xml
```

### 3. **sitemap.xml** - 7 Instances

**Lines 4, 11, 16, 21, 26, 31, 36:**
```xml
Find:    https://yourwebsite.com
Replace: https://youractualdomain.com
```

---

## 🛠️ Step-by-Step Replacement Guide

### Option A: Using VS Code Find & Replace

1. **Open your workspace folder in VS Code**
   - File → Open Folder → Select your domain folder

2. **Open Find & Replace panel**
   - Press: `Ctrl+H` (Windows) or `Cmd+Shift+H` (Mac)

3. **Find:**
   ```
   https://yourwebsite.com
   ```

4. **Replace with:**
   ```
   https://youractualdomain.com
   ```

5. **Click "Replace All"** button
   - It will replace across all files automatically

6. **Verify replacements** by checking:
   - robots.txt
   - sitemap.xml
   - index.html (check various sections)

---

### Option B: Manual Replacement

1. Open `index.html` in your editor
2. Use Find & Replace (`Ctrl+H`)
3. Replace 12 instances in index.html
4. Open `robots.txt` and replace 1 instance
5. Open `sitemap.xml` and replace 7 instances

---

## ✅ Verification Checklist

After replacement, verify the following:

- [ ] All URLs in robots.txt point to your domain
- [ ] All URLs in sitemap.xml point to your domain
- [ ] All URLs in JSON-LD schema point to your domain
- [ ] Open Graph tags use correct domain
- [ ] Canonical URL is correct
- [ ] Images paths include correct domain (if hosted on CDN)
- [ ] Links to social media are active
- [ ] Phone number is correct (+918302929894)
- [ ] Email address is added (if applicable)

---

## 📋 Domain Configuration Examples

### Example 1: Personal Domain
```
Find:    https://yourwebsite.com
Replace: https://gurjantsingh.com
```

### Example 2: Subdomain
```
Find:    https://yourwebsite.com
Replace: https://portfolio.gurjantsingh.com
```

### Example 3: Custom Domain with Localhost
```
Find:    https://yourwebsite.com
Replace: http://localhost:3000
```
(For local development only)

---

## 🔗 Social Media Links to Verify

These are already configured with your actual links:

✅ **Facebook:** https://www.facebook.com/share/18KR16r4Ca/
✅ **Instagram:** https://www.instagram.com/singh__boy1322
✅ **WhatsApp:** https://wa.me/918302929894

**Add missing links:**
- [ ] LinkedIn profile URL
- [ ] GitHub profile URL
- [ ] Email address for contact form

---

## 🚀 After Replacing Domain

### Next: Submit to Google

1. **Google Search Console Setup**
   - Go to: https://search.google.com/search-console
   - Add property with your domain
   - Verify ownership
   - Submit sitemap.xml

2. **Bing Webmaster Tools Setup**
   - Go to: https://www.bing.com/webmasters
   - Add property with your domain
   - Verify ownership
   - Submit sitemap.xml

3. **Test Your URLs**
   - Visit: https://yourdomain.com
   - Check: https://yourdomain.com/robots.txt
   - Check: https://yourdomain.com/sitemap.xml

---

## ⚡ Testing Tools to Use

After deploying:

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Paste your URL to verify schema markup

2. **Pagespeed Insights**
   - https://pagespeed.web.dev/
   - Check Core Web Vitals

3. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Verify mobile optimization

4. **XML Sitemap Validator**
   - https://www.xml-sitemaps.com/validate-xml-sitemap.html
   - Verify sitemap structure

---

## 📞 Support & Questions

If you encounter issues:

1. **Check robots.txt accessibility**
   - Visit: https://yourdomain.com/robots.txt
   - Should display as plain text

2. **Check sitemap.xml accessibility**
   - Visit: https://yourdomain.com/sitemap.xml
   - Should display as XML

3. **Verify SSL/HTTPS**
   - All URLs must use https:// (not http://)

4. **Check .htaccess compatibility**
   - Only works on Apache servers
   - May need to disable if errors occur

---

## 🎯 Final Checklist

**Before going live with SEO:**

- [ ] Domain name replaced everywhere
- [ ] All files deployed to server
- [ ] robots.txt is accessible
- [ ] sitemap.xml is accessible
- [ ] .htaccess is accessible
- [ ] HTTPS/SSL certificate installed
- [ ] Analytics code verified
- [ ] Google verification code verified
- [ ] Bing verification code verified
- [ ] All links tested (internal & external)
- [ ] Mobile responsiveness checked
- [ ] Page speed tested (< 3 seconds)
- [ ] Schema markup validated
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap submitted to Bing Webmaster Tools

---

## 📝 Important Notes

1. **HTTPS is Required**
   - All modern SEO requires HTTPS
   - Ensure your domain has SSL certificate

2. **.htaccess Requires Apache**
   - Won't work on Nginx servers
   - Contact hosting support if unsure

3. **Propagation Time**
   - DNS changes take 24-48 hours
   - Search engine indexing takes 1-4 weeks

4. **Continuous Updates**
   - Keep sitemap.xml updated with new content
   - Update lastmod dates when you make changes
   - Regular monitoring in Search Console

---

## 🎉 You're Almost Ready!

Once you complete these steps, your website will be fully SEO-optimized for "Gurjant Singh" searches.

**Good luck! 🚀**

For detailed information, see: `SEO_IMPLEMENTATION_REPORT.md`
