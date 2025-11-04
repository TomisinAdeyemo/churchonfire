# Church on Fire International - Homepage

A production-ready church homepage inspired by modern megachurch design, built with clean HTML5, CSS3, and vanilla JavaScript.

## Features

- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **WCAG 2.1 AA Accessible**: Semantic HTML, ARIA labels, keyboard navigation, focus states
- **Performance Optimized**: Lazy loading images, minimal critical CSS, deferred JavaScript
- **Content-Driven**: Single `SITE_CONTENT` object in `app.js` controls all text and images
- **Live Countdown**: Real-time countdown to next service with timezone support
- **Mobile Carousel**: Touch-friendly horizontal scroll for "What's Happening" cards
- **Smooth Animations**: Respects `prefers-reduced-motion` for accessibility

## File Structure

```
public/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling (mobile-first responsive)
├── app.js             # JavaScript functionality + SITE_CONTENT data
└── assets/            # Images directory (use Pexels or your own)
    ├── hero/
    ├── welcome/
    ├── happening/
    ├── message/
    └── app/
```

## Quick Start

1. **Update Content**: Edit the `SITE_CONTENT` object in `app.js` (lines 5-200)
2. **Replace Images**: Update image URLs in `SITE_CONTENT` to point to your assets
3. **Customize Colors**: Modify CSS custom properties in `styles.css` (lines 6-20)
4. **Deploy**: Upload all files to your web server

## Customization Guide

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --bg:#0a0a0a;              /* Page background */
  --surface:#111318;         /* Card backgrounds */
  --surface-alt:#0b3a6f;     /* Blue accent panels */
  --text:#ffffff;            /* Primary text */
  --muted:#cfd8e3;           /* Secondary text */
  --accent:#b48a2c;          /* Gold accent (buttons, highlights) */
}
```

### Content
All content lives in `app.js` in the `SITE_CONTENT` object:

- **brand**: Logo, name, favicon
- **hero**: Main banner content
- **welcomePastors**: Leadership welcome section
- **serviceTimesPanel**: Service schedule
- **whatsHappening**: Event cards
- **featuredMessage**: Latest sermon
- **newsletter**: Email signup form
- **footer**: Footer links and navigation
- **liveTicker**: Countdown settings

### Service Times Countdown
The countdown automatically calculates the next upcoming service based on:
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

## Section Order (Matches Lakewood UX)

1. Sticky utility header with icons
2. Hero/Campaign banner
3. Welcome card (image + text)
4. Featured leader black strip
5. Blue service times panel
6. "What's Happening" cards
7. Featured message block
8. Campaign card (full-width)
9. Newsletter signup form
10. App download blue band
11. Footer with accordion navigation
12. Live ticker (sticky bottom countdown)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari 12+
- Chrome Android (latest)

## Accessibility Features

- Semantic HTML5 landmarks
- ARIA labels and expanded states
- Focus-visible indicators (gold outline)
- Screen reader friendly
- Keyboard navigation
- High contrast ratios
- Reduced motion support

## Performance

- Critical CSS inlined in `<head>`
- JavaScript deferred
- Images lazy-loaded (except hero)
- Google Fonts preconnected
- Mobile-first responsive images

## Image Guidelines

For best results, use these dimensions:

- **Hero**: 1600x900px
- **Welcome Photo**: 1200x900px
- **Event Cards**: 800x600px
- **Featured Message**: 1200x800px
- **Logos**: SVG or PNG (transparent background)

Current images use Pexels stock photos. Replace with your own church photos for production use.

## License

Created for Church on Fire International, Cicero, Chicago.
Feel free to customize and deploy for your organization.
