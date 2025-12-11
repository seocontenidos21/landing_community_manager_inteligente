# Project Structure & Organization

## Directory Layout
```
/
├── .kiro/                    # Kiro IDE configuration
│   └── steering/            # AI assistant guidance files
├── assets/                  # Static assets
│   └── img/                # Image files (currently empty)
└── communitymanager.html   # Main landing page
```

## File Organization Principles

### Main Entry Point
- **`communitymanager.html`**: Single-page application containing the complete course landing page
- Self-contained with inline CSS and minimal JavaScript
- All content in Spanish for target market

### Asset Management
- **`assets/img/`**: Reserved for future image assets
- Currently uses external CDN resources and CSS gradients instead of local images
- Background patterns loaded from external services (transparenttextures.com)

### Configuration
- **`.kiro/steering/`**: Contains AI assistant guidance documents
  - `product.md`: Product and business context
  - `tech.md`: Technical stack and development info
  - `structure.md`: This file - project organization

## HTML Structure Conventions

### Page Sections (in order)
1. **Navigation**: Sticky header with brand and CTA
2. **Hero**: Main value proposition with pricing
3. **Pain Points**: Problem identification (4-column grid)
4. **Transformation**: Before/after comparison
5. **Authority**: Company credibility and experience
6. **Benefits**: What students will learn (6-item grid)
7. **Modules**: Course content (accordion-style)
8. **Testimonials**: Social proof (3-column grid)
9. **Target Audience**: Who the course is for
10. **Offer Stack**: Detailed pricing and value
11. **FAQ**: Common questions
12. **Footer**: Company info and social links

### CSS Organization
- Tailwind utility classes for styling
- Custom CSS in `<style>` tag for:
  - Gradient backgrounds
  - Text glow effects
  - Clip-path shapes
  - Details/summary styling

### Naming Conventions
- **IDs**: Used for anchor navigation (`#oferta`)
- **Classes**: Tailwind utilities with semantic grouping
- **Sections**: Semantic HTML5 elements with descriptive comments

## Content Guidelines
- **Language**: All content in Spanish (Venezuelan/Latin American market)
- **Currency**: USD pricing for international accessibility
- **Responsive**: Mobile-first design approach
- **Accessibility**: Semantic HTML structure with proper heading hierarchy