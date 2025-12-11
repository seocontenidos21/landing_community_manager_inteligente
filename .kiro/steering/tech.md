# Technology Stack & Build System

## Frontend Technologies
- **HTML5**: Semantic markup with Spanish language support (`lang="es"`)
- **CSS Framework**: Tailwind CSS (via CDN)
- **Typography**: Inter font family from Google Fonts
- **Icons**: Font Awesome 6.4.0 (via CDN)
- **JavaScript**: Minimal vanilla JS for interactive elements

## External Dependencies
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Google Fonts**: Inter font weights (300, 400, 600, 800)
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js`

## Design System
- **Color Palette**: 
  - Primary: Blue variants (`blue-400` to `blue-900`)
  - Secondary: Slate variants for text and backgrounds
  - Accent: Violet for gradients, Green for success states
- **Typography**: Inter font family with multiple weights
- **Layout**: Mobile-first responsive design using Tailwind's grid system
- **Components**: Custom CSS classes for gradients and animations

## Build Process
This is a static HTML project with no build system required.

### Development Commands
```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

### Deployment
- Static hosting compatible (Netlify, Vercel, GitHub Pages)
- No compilation or build step needed
- Single HTML file deployment

## Browser Support
- Modern browsers supporting CSS Grid and Flexbox
- Tailwind CSS browser compatibility
- Font Awesome icon support

## Performance Considerations
- All dependencies loaded via CDN
- Single HTML file reduces HTTP requests
- Optimized for fast loading on mobile devices