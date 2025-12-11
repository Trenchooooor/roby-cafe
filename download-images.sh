#!/bin/bash

# Download free stock images for menu items
# Using Unsplash Source API (free to use, no attribution required for this service)

echo "🖼️  Downloading menu item images from Unsplash..."
echo ""

cd public/data/menu || exit

# Waffles
echo "📥 Downloading waffle images..."
curl -L "https://source.unsplash.com/800x600/?ferrero-rocher,waffle,chocolate,hazelnut" -o ferroro-rocher-waffle.jpg
curl -L "https://source.unsplash.com/800x600/?waffle,butter,syrup,classic" -o classic-waffle.jpg
curl -L "https://source.unsplash.com/800x600/?strawberry,waffle,cream,berries" -o strawberry-waffle.jpg
curl -L "https://source.unsplash.com/800x600/?chocolate,waffle,dessert,ice-cream" -o chocolate-waffle.jpg

# Croffles
echo "📥 Downloading croffle images..."
curl -L "https://source.unsplash.com/800x600/?croissant,waffle,nutella,strawberry" -o nutella-strawberry-croffle.jpg
curl -L "https://source.unsplash.com/800x600/?croissant,waffle,pastry" -o classic-croffle.jpg
curl -L "https://source.unsplash.com/800x600/?biscoff,cookie,waffle,dessert" -o biscoff-croffle.jpg
curl -L "https://source.unsplash.com/800x600/?matcha,green-tea,waffle,dessert" -o matcha-croffle.jpg

# Sundaes
echo "📥 Downloading sundae images..."
curl -L "https://source.unsplash.com/800x600/?chocolate,sundae,fudge,ice-cream" -o chocolate-fudge-sundae.jpg
curl -L "https://source.unsplash.com/800x600/?strawberry,sundae,berries,ice-cream" -o strawberry-sundae.jpg
curl -L "https://source.unsplash.com/800x600/?oreo,sundae,cookies,ice-cream" -o cookie-monster-sundae.jpg

# Pancakes
echo "📥 Downloading pancake images..."
curl -L "https://source.unsplash.com/800x600/?pancakes,stack,maple-syrup,butter" -o classic-pancakes.jpg
curl -L "https://source.unsplash.com/800x600/?berry,pancakes,blueberry,strawberry" -o berry-pancakes.jpg
curl -L "https://source.unsplash.com/800x600/?nutella,banana,pancakes,chocolate" -o nutella-banana-pancakes.jpg

# Breakfast
echo "📥 Downloading breakfast images..."
curl -L "https://source.unsplash.com/800x600/?savory,waffle,eggs,bacon" -o breakfast-waffle.jpg
curl -L "https://source.unsplash.com/800x600/?avocado,toast,poached-egg,feta" -o avocado-toast.jpg
curl -L "https://source.unsplash.com/800x600/?french-toast,brioche,berries,cream" -o french-toast.jpg

# Drinks
echo "📥 Downloading drink images..."
curl -L "https://source.unsplash.com/800x600/?flat-white,coffee,latte-art" -o flat-white.jpg
curl -L "https://source.unsplash.com/800x600/?biscoff,latte,cookie-butter,coffee" -o biscoff-latte.jpg
curl -L "https://source.unsplash.com/800x600/?matcha-latte,green-tea,milk" -o matcha-latte.jpg
curl -L "https://source.unsplash.com/800x600/?milkshake,whipped-cream,chocolate" -o milkshake.jpg

echo ""
echo "✅ Download complete! Images saved to public/data/menu/"
echo ""
echo "Next steps:"
echo "1. Review the images and replace any that don't match your vision"
echo "2. Run: npm run dev"
echo "3. The menu will automatically show the new images"
