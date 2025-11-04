# ⚡ Quick Start Guide

## View the Church Homepage

### 🖥️ Option 1: Open Directly
Navigate to `/public/index.html` and open in your browser.

### 🌐 Option 2: Local Server (Recommended)

**Using Python:**
```bash
cd public
python3 -m http.server 8000
```
Then visit: http://localhost:8000

**Using Node.js:**
```bash
npx http-server public -p 8000
```
Then visit: http://localhost:8000

### 📱 Option 3: Preview Page
Open `/public/demo.html` for an interactive preview with feature highlights.

---

## Customize in 3 Steps

### Step 1: Edit Content (5 minutes)
Open `public/app.js` and find the `SITE_CONTENT` object (starts at line 5).

Change your church info:
```javascript
brand: {
  name: "Your Church Name",
  locale: "Your City, State",
  logo_light: "/assets/your-logo.svg",
}
```

### Step 2: Replace Images (10 minutes)
Replace Pexels URLs with your own photos:
- Hero: 1600x900px
- Welcome: 1200x900px
- Event cards: 800x600px

### Step 3: Update Colors (optional)
Open `public/styles.css` and edit the color variables at the top:
```css
:root {
  --accent:#b48a2c;  /* Change gold to your color */
}
```

---

## Deploy (3 minutes)

### Netlify (Easiest)
1. Go to netlify.com
2. Drag the `/public` folder onto their deploy zone
3. Done! ✅

### Other Options
- **Vercel**: Connect GitHub, set build dir to `/public`
- **GitHub Pages**: `git subtree push --prefix public origin gh-pages`
- **Traditional Host**: FTP upload all files from `/public`

---

## 📚 Full Documentation

- **DELIVERY_SUMMARY.md** - Complete project overview
- **CHURCH_HOMEPAGE.md** - Integration guide
- **public/README.md** - Technical documentation

---

## ✅ What You Get

✨ **12 Sections**: Header, Hero, Welcome, Services, Events, Message, Newsletter, Footer, Live Countdown
📱 **Fully Responsive**: Mobile, tablet, desktop optimized
♿ **WCAG 2.1 AA**: Accessible to all users
⚡ **Fast Loading**: Optimized performance
🎨 **Easy Customization**: Single content source
🔥 **Production Ready**: Deploy today!

---

**Need Help?** Check the documentation files or review the inline code comments.
