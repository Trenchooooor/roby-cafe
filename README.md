# Roby Café Website

A beautiful, modern website for Roby Café - Perth's sweetest dessert destination in Subiaco. Built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

✨ **Modern Stack**
- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS v4 with Radix Colors

🎨 **Design**
- Retro ice cream parlor aesthetic
- Playful, warm color palette (Sand, Tomato, Amber)
- Custom typography (Comfortaa display, DM Sans body)
- Smooth animations with Framer Motion
- Fully responsive mobile-first design

🧩 **Components**
- AI Chatbot with business-specific responses
- Testimonials carousel
- Interactive gallery with lightbox
- Contact form with mailto integration
- Sticky navigation
- SEO optimized

📄 **Pages**
- **Home**: Hero section, featured desserts, testimonials
- **Menu**: Categorized menu items with filtering
- **Gallery**: Masonry layout with category filters
- **About**: Story, values, and what makes Roby Café special
- **Contact**: Form and business information
- **Visit**: Prominent CTA with hours, location, and gallery preview

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── menu/           # Menu page
│   │   ├── gallery/        # Gallery page
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── visit/          # Visit Us page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── ai-chatbot.tsx  # AI chat widget
│   │   └── testimonials.tsx # Reviews carousel
│   └── lib/
│       ├── data.ts         # Business data, menu, testimonials
│       └── utils.ts        # Utility functions
├── public/
│   └── data/               # Images (gmaps, instagram, other)
└── package.json
```

## Design System

### Colors
- **Sand**: Warm neutrals for backgrounds and text
- **Tomato**: Coral-red accent for CTAs and highlights
- **Amber**: Golden yellow for secondary accents

### Typography
- **Display**: Comfortaa (playful, rounded)
- **Body**: DM Sans (clean, readable)

### Animations
- Smooth, bouncy transitions
- Scroll-triggered reveals
- Hover effects with subtle scale
- Custom easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`

## Key Features

### AI Chatbot
Keyword-based responses for common questions:
- Hours and location
- Menu items and pricing
- Dietary options
- Parking and reservations
- Instagram handle

### Testimonials
Auto-rotating carousel with real Google reviews from happy customers.

### Gallery
Masonry grid with category filtering and lightbox view. Features 26+ images from Google Maps, Instagram, and professional photos.

## SEO

- Optimized meta tags
- Open Graph images
- Structured data (LocalBusiness, Restaurant)
- Semantic HTML
- Mobile-friendly
- Fast loading times

## Performance

- Image optimization with Next.js Image
- Self-hosted Google Fonts
- Lazy loading for below-fold content
- Hardware-accelerated animations
- Reduced motion support

## Business Information

- **Name**: Roby Café
- **Location**: 127 Rokeby Road, Subiaco, WA 6008
- **Hours**: Mon 8am-6pm, Tue-Sat 8am-9pm, Sun 8am-7:30pm
- **Instagram**: @roby_cafe_subiaco_
- **Rating**: 4.9 ⭐ (102 reviews, 97% five-star)

## Development

Built with love by Claude Code using the frontend-design skill.

### Tech Choices

- **Next.js 16**: Latest App Router for modern React development
- **Tailwind CSS v4**: Utility-first CSS with custom design system
- **Radix Colors**: Beautiful, accessible color palettes
- **Framer Motion**: Smooth, performant animations
- **TypeScript**: Type safety and better DX

## License

Private - All rights reserved by Roby Café
