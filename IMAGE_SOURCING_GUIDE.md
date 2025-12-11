# Image Sourcing Guide for Roby Café

## Missing Menu Item Images

The following menu items need images. You can source these from free stock photo sites or use your own photos.

### Waffles Category

1. **Ferroro Rocher Waffle**
   - Search terms: "ferrero rocher waffle", "chocolate hazelnut waffle", "nutella waffle with ferrero"
   - Suggested filename: `ferroro-rocher-waffle.jpg`
   - Location: `public/data/menu/`

2. **Classic Waffle**
   - Search terms: "belgian waffle butter syrup", "classic waffle", "simple waffle"
   - Suggested filename: `classic-waffle.jpg`
   - Location: `public/data/menu/`

3. **Strawberry Waffle**
   - Search terms: "strawberry waffle cream", "waffle with fresh strawberries"
   - Suggested filename: `strawberry-waffle.jpg`
   - Location: `public/data/menu/`

4. **Chocolate Waffle**
   - Search terms: "chocolate waffle ice cream", "triple chocolate waffle"
   - Suggested filename: `chocolate-waffle.jpg`
   - Location: `public/data/menu/`

### Croffles Category

5. **Nutella Strawberry Croffle** (Featured item!)
   - Search terms: "croffle nutella strawberry", "croissant waffle nutella", "korean croffle"
   - Suggested filename: `nutella-strawberry-croffle.jpg`
   - Location: `public/data/menu/`
   - Priority: HIGH (featured item)

6. **Classic Croffle**
   - Search terms: "croffle butter syrup", "plain croffle", "croissant waffle"
   - Suggested filename: `classic-croffle.jpg`
   - Location: `public/data/menu/`

7. **Biscoff Croffle**
   - Search terms: "biscoff croffle", "lotus biscoff waffle", "speculoos croffle"
   - Suggested filename: `biscoff-croffle.jpg`
   - Location: `public/data/menu/`

8. **Matcha Croffle**
   - Search terms: "matcha croffle", "green tea waffle", "matcha dessert"
   - Suggested filename: `matcha-croffle.jpg`
   - Location: `public/data/menu/`

### Sundaes Category

9. **Chocolate Fudge Sundae**
   - Search terms: "chocolate fudge sundae", "triple chocolate ice cream"
   - Suggested filename: `chocolate-fudge-sundae.jpg`
   - Location: `public/data/menu/`

10. **Strawberry Dream Sundae**
    - Search terms: "strawberry ice cream sundae", "berry sundae"
    - Suggested filename: `strawberry-sundae.jpg`
    - Location: `public/data/menu/`

11. **Cookie Monster Sundae**
    - Search terms: "oreo ice cream sundae", "cookies and cream sundae"
    - Suggested filename: `cookie-monster-sundae.jpg`
    - Location: `public/data/menu/`

### Pancakes Category

12. **Classic Stack**
    - Search terms: "pancake stack maple syrup", "fluffy pancakes butter"
    - Suggested filename: `classic-pancakes.jpg`
    - Location: `public/data/menu/`

13. **Berry Pancakes**
    - Search terms: "berry pancakes whipped cream", "mixed berry pancakes"
    - Suggested filename: `berry-pancakes.jpg`
    - Location: `public/data/menu/`

14. **Nutella Banana Pancakes**
    - Search terms: "nutella banana pancakes", "chocolate banana pancakes"
    - Suggested filename: `nutella-banana-pancakes.jpg`
    - Location: `public/data/menu/`

### Breakfast Category

15. **Breakfast Waffle**
    - Search terms: "savory waffle eggs bacon", "breakfast waffle hollandaise"
    - Suggested filename: `breakfast-waffle.jpg`
    - Location: `public/data/menu/`

16. **Avocado Toast**
    - Search terms: "avocado toast poached egg", "smashed avocado sourdough"
    - Suggested filename: `avocado-toast.jpg`
    - Location: `public/data/menu/`

17. **French Toast**
    - Search terms: "brioche french toast berries", "french toast whipped cream"
    - Suggested filename: `french-toast.jpg`
    - Location: `public/data/menu/`

### Drinks Category

18. **Flat White**
    - Search terms: "flat white coffee latte art", "australian coffee"
    - Suggested filename: `flat-white.jpg`
    - Location: `public/data/menu/`

19. **Biscoff Latte**
    - Search terms: "biscoff latte", "lotus biscoff coffee"
    - Suggested filename: `biscoff-latte.jpg`
    - Location: `public/data/menu/`

20. **Matcha Latte**
    - Search terms: "matcha latte", "green tea latte"
    - Suggested filename: `matcha-latte.jpg`
    - Location: `public/data/menu/`

21. **Milkshakes**
    - Search terms: "milkshake whipped cream", "thick milkshake"
    - Suggested filename: `milkshake.jpg`
    - Location: `public/data/menu/`

## Free Stock Photo Resources

### Recommended Sites (Free & Commercial Use)

1. **Unsplash** - https://unsplash.com/
   - High quality, completely free
   - Best for: General food photography
   - License: Free to use

2. **Pexels** - https://www.pexels.com/
   - Great food photography selection
   - Best for: Desserts, coffee, breakfast
   - License: Free to use

3. **Pixabay** - https://pixabay.com/
   - Large selection
   - Best for: Variety of angles
   - License: Free to use

4. **Foodiesfeed** - https://www.foodiesfeed.com/
   - Specialized in food photography
   - Best for: Professional food shots
   - License: Free for commercial use

### Search Tips

- Use specific terms: "belgian waffle ice cream" vs just "waffle"
- Look for overhead shots (matches your existing style)
- Prefer images with warm lighting (matches your aesthetic)
- Choose images with generous portions (aligns with reviews)
- Select photos with coral/pink tones when possible (matches brand)

## Quick Setup Instructions

1. **Create menu directory:**
   ```bash
   mkdir -p public/data/menu
   ```

2. **Download images** from free stock photo sites

3. **Rename files** according to the suggested filenames above

4. **Place in** `public/data/menu/` folder

5. **Update data.ts** with image paths (I'll help you with this after you download)

## Alternative: Use Existing Images

You could also:
- Take your own photos of the actual menu items (most authentic!)
- Use the existing generic category images for now
- Contact Roby Café to see if they have photos you can use

## Priority Order

1. **HIGH**: Nutella Strawberry Croffle (featured item on home page)
2. **MEDIUM**: Ferroro Rocher Waffle (featured item)
3. **LOW**: All other items (nice to have but not critical)

Would you like me to help you update the data.ts file once you have the images, or would you prefer to use placeholder images temporarily?
