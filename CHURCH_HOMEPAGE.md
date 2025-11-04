# Church on Fire International - Standalone Homepage

## Overview

This project contains a **production-ready church homepage** built with pure HTML, CSS, and vanilla JavaScript. The design is inspired by modern megachurch websites (like Lakewood Church) but branded for Church on Fire International in Cicero, Chicago.

## Location

All files are located in the `/public` directory:

```
public/
├── index.html          # Complete HTML structure
├── styles.css          # Full responsive styling
├── app.js             # JavaScript + SITE_CONTENT configuration
├── README.md          # Detailed documentation
└── assets/            # Images directory
```

## How to View

### Option 1: Direct Browser (Simple)
1. Navigate to: `/public/`
2. Open `index.html` in your web browser
3. **Note**: Some features (like fonts) may require a web server

### Option 2: Local Web Server (Recommended)

```bash
# Using Python 3
cd public
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server public -p 8000

# Using PHP
cd public
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `public/index.html`
3. Select "Open with Live Server"

## Features

### 🎨 Design
- Dark theme with elegant gold accents
- Professional megachurch aesthetic
- Responsive mobile-first design
- Beautiful typography (Montserrat + Inter)

### ♿ Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML5 landmarks
- ARIA labels and live regions
- Keyboard navigation support
- Focus indicators
- Reduced motion support

### ⚡ Performance
- Lazy-loaded images
- Optimized critical CSS
- Deferred JavaScript
- Fast loading times

### 📱 Sections (In Order)

1. **Utility Header** - Sticky navigation with search, account, language, alerts
2. **Hero Banner** - Full-width campaign/welcome section
3. **Welcome Card** - Pastoral greeting with photo
4. **Featured Leader Strip** - Black accent band highlighting leadership
5. **Service Times Panel** - Blue card with upcoming services
6. **What's Happening** - Event cards (mobile carousel)
7. **Featured Message** - Latest sermon highlight
8. **Campaign Card** - Full-width call-to-action
9. **Newsletter Form** - Email subscription with validation
10. **App Promo Band** - Blue section with store download buttons
11. **Footer** - Accordion navigation (7 groups)
12. **Live Ticker** - Bottom countdown to next service

### 🔧 Key Functionality

- **Live Countdown**: Automatic calculation of next service time with timezone support
- **Form Validation**: Newsletter signup with email validation
- **Responsive Accordions**: Footer navigation collapses on mobile
- **Mobile Carousel**: Touch-friendly horizontal scroll for event cards
- **Smooth Animations**: Hover effects and transitions (respects prefers-reduced-motion)

## Customization

### Step 1: Update Content
Edit `app.js` and modify the `SITE_CONTENT` object (lines 5-200):

```javascript
const SITE_CONTENT = {
  brand: {
    name: "Your Church Name",
    locale: "Your City",
    logo_light: "/assets/logo.svg",
    // ... etc
  },
  // ... all other sections
}
```

### Step 2: Replace Images
Replace the Pexels URLs with your own images:

**Recommended Dimensions:**
- Hero: 1600x900px
- Welcome: 1200x900px
- Event cards: 800x600px
- Message: 1200x800px

### Step 3: Customize Colors
Edit CSS variables in `styles.css`:

```css
:root {
  --bg:#0a0a0a;              /* Dark background */
  --surface:#111318;         /* Card backgrounds */
  --surface-alt:#0b3a6f;     /* Blue accent */
  --accent:#b48a2c;          /* Gold highlights */
  --text:#ffffff;            /* Primary text */
  --muted:#cfd8e3;           /* Secondary text */
}
```

### Step 4: Update Service Times
Configure your schedule in `app.js`:

```javascript
liveTicker: {
  timezone: "America/Chicago",
  weeklyTimes: [
    { day:"Sunday", time:"09:00" },
    { day:"Sunday", time:"11:00" },
    { day:"Wednesday", time:"19:00" }
  ]
}
```

## Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, responsive design
- **JavaScript (ES6+)**: No frameworks, vanilla JS only
- **Fonts**: Google Fonts (Montserrat, Inter)
- **Icons**: Unicode symbols (can be replaced with icon font/SVG)

## Browser Support

✅ Chrome/Edge (last 2 versions)
✅ Firefox (last 2 versions)
✅ Safari (last 2 versions)
✅ iOS Safari 12+
✅ Chrome Android (latest)

## Deployment

### Static Hosting (Recommended)
Upload the `/public` directory to any static host:

- **Netlify**: Drag & drop the `/public` folder
- **Vercel**: Connect repo and set build directory to `/public`
- **GitHub Pages**: Push `/public` to `gh-pages` branch
- **AWS S3**: Upload as static website
- **Traditional Hosting**: FTP upload all files

### Custom Domain
1. Deploy to your hosting provider
2. Point your DNS A record to the hosting IP
3. Configure SSL certificate (most hosts provide free Let's Encrypt)

## Integration with React App

If you want to integrate this into the existing Vite/React app:

1. Convert sections to React components
2. Import `SITE_CONTENT` as a JSON file
3. Use React Router for navigation
4. Implement state management for dynamic content

However, the standalone version in `/public` is **production-ready as-is** and requires no build step.

## Support & Documentation

- Full documentation: See `/public/README.md`
- Content reference: All configurable via `SITE_CONTENT` in `app.js`
- Style reference: CSS custom properties in `styles.css`

## Notes

- Currently uses **Pexels stock photos** - replace with your church photos for production
- Icons use Unicode symbols - consider replacing with Font Awesome or custom SVG icons
- Newsletter form submits locally (add backend integration for real email capture)
- Live countdown auto-adjusts to Chicago timezone

---

**Built for Church on Fire International, Cicero, Chicago**
Ready for production deployment. Just update content and images!
