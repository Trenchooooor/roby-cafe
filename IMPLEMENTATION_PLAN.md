# Implementation Plan - Roby Café

## Business Analysis

- **Type:** Dessert café & coffee shop
- **Location:** 127 Rokeby Road, Subiaco, WA 6008 (Perth, Western Australia)
- **Target Audience:**
  - Families with children (family-friendly focus)
  - Young adults & couples (Instagram-worthy desserts)
  - Coffee lovers seeking a sweet treat
  - Local Subiaco community
- **Brand Personality:** Playful, warm, nostalgic, Instagram-worthy, homemade quality
- **Unique Selling Points:**
  - Everything made in-house by friendly owner
  - Viral croffles (croissant-waffles)
  - Dramatic, generous dessert presentations
  - Distinctive coral pink & mosaic tile aesthetic
  - 4.9★ rating (97% five-star reviews)
- **Competitors:** Other Subiaco cafés, but differentiated by dessert specialty focus

## Design Direction

### Aesthetic Concept

**Visual Metaphor:** "Retro Ice Cream Parlor meets Modern Instagram Dessert Bar"

**Mood:** Playful, warm, nostalgic yet contemporary. Think 1950s soda fountain reimagined for 2025 with coral pinks, golden lighting, and vibrant food photography. The space feels like a happy childhood memory brought to life.

**Layout Style:** Clean, bright, approachable. Magazine-style food cards with generous whitespace. Large hero imagery showcasing the dramatic dessert presentations. Asymmetric grid for visual interest while maintaining readability.

### Color System

**Gray Scale:** Sand
- **Why:** Warm, inviting - perfect for hospitality and cafés
- **Character:** Yellow-tinted neutrals that feel cozy and welcoming
- **Usage:** Backgrounds, text, borders, cards

**Primary Accent:** Tomato
- **Why:** Matches the signature coral/salmon pink walls visible in photos
- **Character:** Vibrant coral-red that's playful yet sophisticated
- **Usage:** CTAs, links, highlights, brand moments

**Secondary Accent:** Amber
- **Why:** Matches golden display case lighting & waffle cone colors
- **Character:** Warm golden yellow that evokes sweetness
- **Usage:** Secondary buttons, highlights, accents

**Rationale:** Sand provides warmth and approachability (essential for hospitality). Tomato captures their distinctive coral pink interior. Amber echoes the golden lighting and waffle aesthetics. Together they create a nostalgic, joyful, dessert parlor atmosphere.

**Technical Approach:** Use Radix Colors via npm package import, not hardcoded values

### Typography

**Display Font:** `font-family: 'Comfortaa', 'Fredoka', cursive`
- **Personality:** Rounded, playful, friendly, slightly retro
- **Use cases:** Hero headlines, section titles, "Roby Café" branding
- **Why:** Matches the playful dessert parlor vibe, feels handcrafted & warm

**Body Font:** `font-family: 'DM Sans', 'Inter', sans-serif`
- **Personality:** Clean, highly readable, modern but warm
- **Use cases:** Body text, menu items, pricing, navigation
- **Why:** Perfect readability for menu details while maintaining approachability

**Heading Sizes:**
- H1 (Hero): `text-7xl` (72px) - Bold, impactful
- H2 (Sections): `text-5xl` (48px) - Clear hierarchy
- H3 (Subsections): `text-3xl` (30px)
- Body: `text-lg` (18px) - Generous, easy to read

### Animation Strategy

**Motion Personality:** Smooth, delightful, bouncy - like the joy of dessert!

**Ease Curves:** Custom cubic-bezier for friendly bounce: `[0.34, 1.56, 0.64, 1]`

**Key Animations:**

1. **Scroll Reveals:**
   - Sections fade in and slide up as you scroll
   - Staggered reveals for menu items (cascade effect)

2. **Hover States:**
   - Menu cards gently lift with soft shadow
   - Images zoom slightly on hover (1.05 scale)
   - Buttons have playful bounce on hover

3. **Page Transitions:**
   - Smooth fade transitions between pages
   - Hero section animates in on load

4. **Special Effects:**
   - Subtle grain texture overlay (retro feel)
   - Floating animation for hero dessert image
   - Pulsing "Order Now" button
   - Mosaic tile pattern background in hero/footer

## Content Structure

### Pages

#### 1. Home
**Hero Section:**
- Large dramatic waffle image (from gmaps/unnamed-1.jpg)
- Headline: "Perth's Sweetest Dessert Destination"
- Subheadline: "Viral croffles, fluffy waffles & handcrafted ice cream in the heart of Subiaco"
- CTA: "View Menu" + "Visit Us"
- Background: Subtle mosaic tile pattern overlay

**Key Sections:**
- Featured Desserts (3 signature items with images)
- About snippet (homemade, owner-operated, family-friendly)
- Latest from Instagram (4 recent posts)
- Customer testimonials carousel
- Hours & Location

#### 2. Menu
**Layout:** Category tabs with grid of items

**Categories:**
1. **Waffles** (signature - emphasized)
2. **Croffles** (viral items)
3. **Pancakes**
4. **Sundaes**
5. **Breakfast**
6. **Coffee & Drinks**

**Each Item Shows:**
- Name
- Description
- Price(s)
- Featured image where available

**Pricing from Menu Photos:**
- All pricing extracted from gmaps menu photos
- Size options (S/M/L or Single/Double)

#### 3. Gallery
**Organization:**
- Masonry grid layout
- Filter tabs: All, Waffles, Croffles, Sundaes, Drinks, Ambiance
- Lightbox on click

**Images:** 26 total
- 11 Instagram photos
- 4 professional photos
- 11 Google Maps customer photos

#### 4. About
**Content:**
- Story: Subiaco's newest dessert spot on Rokeby Road
- Philosophy: Everything made in-house with quality ingredients
- The Experience: Warm, family-friendly atmosphere
- Owner highlight (friendly, one-man show based on reviews)
- Values: Quality, homemade, Instagram-worthy presentations

**Image:** Interior shot with owner at counter

#### 5. Contact
**Form:** Simple mailto: link (no backend needed)
- Fields: Name, Email, Phone, Message
- Success state with auto-reset

**Info Box:**
- Address: 127 Rokeby Road, Subiaco, WA 6008
- Hours:
  - Monday: 8am - 6pm
  - Tuesday - Saturday: 8am - 9pm
  - Sunday: 8am - 7:30pm
- Instagram: @roby_cafe_subiaco_
- Map embed or link to Google Maps

#### 6. Visit Us (Single CTA page)
- Prominent hours
- Address with map
- Instagram link
- "Come check our perfect taste" tagline
- Gallery preview

### Features

#### AI Chatbot

**Keywords & Responses:**

1. **hours, open, opening, time**
   - "We're open Monday 8am-6pm, Tue-Sat 8am-9pm, Sunday 8am-7:30pm. Come visit us!"

2. **location, address, where, find**
   - "Find us at 127 Rokeby Road, Subiaco, WA 6008. We're on Rokeby Road's sweetest block!"

3. **waffle, waffles, best**
   - "Our waffles are legendary! Try the Super Waffle with ice cream or the Ferroro Rocher. Everything's made fresh!"

4. **croffle, croffles, viral**
   - "Croffles are our viral specialty - croissant meets waffle! Try the Nutella Strawberry or Classic Croffle."

5. **menu, price, cost, how much**
   - "Waffles from $9, Croffles from $9, Sundaes from $10, Coffee from $4.50. View our full menu!"

6. **coffee, latte, cappuccino**
   - "We serve amazing coffee! Flat white, cappuccino, latte from $4.50. Plus specialty drinks like Biscoff Latte."

7. **vegan, vegetarian, dietary**
   - "We offer vegan and vegetarian options. Ask in-store about current dairy-free ice cream flavors!"

8. **family, kids, child**
   - "Absolutely family-friendly! We have high chairs, mini treats for little ones, and a welcoming atmosphere."

9. **book, reservation, reserve**
   - "No bookings needed - just walk in! We're first-come, first-served with plenty of seating."

10. **parking, park**
    - "Street parking available on Rokeby Road and surrounding streets in Subiaco."

11. **instagram, social, photo**
    - "Follow @roby_cafe_subiaco_ on Instagram for daily dessert inspiration!"

12. **ice cream, flavors, gelato**
    - "We have 16+ rotating ice cream flavors all made in-house. From classics to unique creations!"

**Personality:** Warm, enthusiastic, helpful - like chatting with a friendly staff member

#### Contact Form
- **Method:** `mailto:` (update with actual email if available)
- **Fields:** Name, Email, Phone (optional), Message
- **Success:** "Thanks! We'll get back to you soon 🧇"

#### Testimonials (Real Google Reviews)
**Selected Highlights:**

1. **Jeffrey Iwan** (5★)
   > "I found this spot accidentally. One man show but good service. Choices are based on most favourite flavours in general so nothing is too hard to comprehend."

2. **Daph** (5★)
   > "I cannot fault this charming dessert parlour. The owner is lovely and makes everything in house. The waffle was amazing and ice cream was not overly sweet."

3. **임현재** (5★)
   > "Outstanding waffle taste. The owner should give him a bonus. He is the best staff I have ever met. Very quite place with a good vibe."

4. **Jazmine Zabala** (5★)
   > "The waffles are amazing!! So light and fluffy and matches with the egg and the strawberry!!! The man who owns it is also super nice."

5. **Sara Almo** (5★)
   > "This cafe is so cute and chill! We got chai lattes and a waffle, and the waffle is crispy and yammmmm. Highly recommend it."

6. **Max Randall** (5★)
   > "We just had some delicious ice cream, coffee and a very tasty waffle. Great, friendly service and generous portions. Thank you!"

**Display:** Carousel with 3 visible at once, auto-rotating

## Technical Specifications

### Stack
- **Next.js** 16.0.8 (App Router)
- **React** 19.2.1
- **Tailwind CSS** v4 (with @theme directive)
- **shadcn/ui** + Radix UI primitives
- **Framer Motion** 12.23.25
- **TypeScript** strict mode

### Project Structure
```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Design system
│   ├── menu/page.tsx         # Menu
│   ├── gallery/page.tsx      # Gallery
│   ├── about/page.tsx        # About
│   ├── contact/page.tsx      # Contact
│   └── visit/page.tsx        # Visit Us CTA
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── ui/                   # shadcn components
│   ├── ai-chatbot.tsx
│   ├── contact-form.tsx
│   ├── testimonials.tsx
│   ├── menu-grid.tsx
│   └── gallery-masonry.tsx
└── lib/
    └── utils.ts
```

### SEO Strategy

**Title:** "Roby Café | Viral Croffles, Waffles & Desserts in Subiaco, Perth"

**Description:** "Perth's sweetest dessert destination. Handcrafted waffles, viral croffles, artisan ice cream & specialty coffee in Subiaco. Everything made in-house. Open 7 days."

**Keywords:**
- croffles perth
- best waffles subiaco
- dessert cafe perth
- ice cream subiaco
- family friendly cafe
- instagram desserts perth
- rokeby road cafes
- subiaco breakfast

**Open Graph:**
- og:image: Hero waffle shot
- og:type: restaurant
- og:locale: en_AU

**Structured Data:**
- LocalBusiness schema
- Restaurant schema
- Review aggregation

### Image Assets

**Organized by Purpose:**

**Hero/Featured:**
- `data/gmaps/unnamed-1.jpg` - MASSIVE waffle (hero image)
- `data/other/Roby.jpg.webp` - Interior counter shot
- `data/gmaps/unnamed-6.jpg` - Sundae tower with Lotus

**Menu Category Images:**
- Waffles: `unnamed-1.jpg`, instagram/2025-11-28
- Croffles: `instagram/2025-09-26`
- Sundaes: `gmaps/unnamed-6.jpg`
- Ice Cream: `gmaps/unnamed-3.jpg` (flavor display)
- Coffee: `gmaps/unnamed-2.jpg`

**Gallery:**
- All 26 images organized by category tags

**About:**
- `data/other/Roby.jpg.webp` - Owner at work
- `data/other/Roby-1.jpg.webp` - Family dining

**Exterior:**
- `gmaps/unnamed.jpg` - Storefront with signage

### Performance Optimization

**Images:**
- Convert all to Next.js Image component
- Priority load: Hero image
- Lazy load: Below-fold gallery images
- Sizes: Generate 640w, 750w, 828w, 1080w, 1200w
- Format: AVIF with WebP fallback

**Fonts:**
- Self-host via `next/font/google`
- Display: swap
- Preload critical fonts

**Animations:**
- Respect `prefers-reduced-motion`
- Use CSS transforms for hardware acceleration
- Debounce scroll events

## Business Data Integration

### Operating Hours
```typescript
const hours = {
  monday: "8:00 AM - 6:00 PM",
  tuesday: "8:00 AM - 9:00 PM",
  wednesday: "8:00 AM - 9:00 PM",
  thursday: "8:00 AM - 9:00 PM",
  friday: "8:00 AM - 9:00 PM",
  saturday: "8:00 AM - 9:00 PM",
  sunday: "8:00 AM - 7:30 PM"
}
```

### Contact Information
- **Address:** 127 Rokeby Road, Subiaco, WA 6008
- **Instagram:** [@roby_cafe_subiaco_](https://instagram.com/roby_cafe_subiaco_)
- **Email:** (Contact via Instagram DMs or in-person)
- **Phone:** (Visit us in-person)

### Complete Menu Data

*[All pricing and items extracted from menu photos - see above sections]*

### Statistics
- **Rating:** 4.9 out of 5 stars
- **Review Count:** 102 Google reviews
- **5-Star Reviews:** 97% (99 out of 102)

### Key Features
✅ Family Friendly
✅ Vegan Options Available
✅ Vegetarian Options Available
✅ Outdoor Seating
✅ Takeaway Available

## Implementation Notes

### Critical Design Elements

1. **Mosaic Tile Pattern:** The colorful tile pattern on tables is SIGNATURE - use as subtle background pattern in hero/footer
2. **Color Temperature:** Warm, inviting - avoid cool blues
3. **Food Photography:** Overhead shots with dramatic lighting showcase the generous portions
4. **Typography Hierarchy:** Prices must be clear and easy to scan
5. **Mobile-First:** Most customers will view on phone before visiting

### Content Authenticity

- Use REAL customer quotes (not generic testimonials)
- Use ACTUAL photos (not stock imagery)
- Maintain the warm, personal tone from reviews
- Highlight the owner's dedication to quality

### Conversion Strategy

**Primary CTA:** "Visit Us" (no online ordering)
- Button prominence on every page
- Hours displayed prominently
- Instagram link for visual social proof
- Map/directions easily accessible

**Secondary CTA:** "View Menu"
- Drives users to see pricing/offerings
- Gallery preview creates desire

### Accessibility

- Color contrast: All text passes WCAG AA
- Alt text: Descriptive for all images
- Keyboard navigation: Full support
- Screen readers: Semantic HTML
- Focus indicators: Visible outlines

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 15+
- Mobile Safari/Chrome

---

## Ready to Build

Once approved, the frontend-design skill will create:

✅ Complete Next.js 16 project with App Router
✅ Tailwind CSS v4 with Radix color system
✅ shadcn/ui components initialized
✅ All 6 pages with real content
✅ AI chatbot with business-specific responses
✅ Contact form with mailto integration
✅ Testimonials carousel with real reviews
✅ Gallery with all 26 images organized
✅ SEO optimization with metadata
✅ Responsive design (mobile-first)
✅ Framer Motion animations
✅ No custom CSS beyond globals.css utilities

**Design Philosophy:** This isn't a template - it's a custom-designed website that captures Roby Café's unique personality: playful, warm, quality-focused, and irresistibly Instagram-worthy.
