export const businessInfo = {
  name: "Roby Café",
  address: "127 Rokeby Road, Subiaco, WA 6008",
  instagram: "@roby_cafe_subiaco_",
  instagramUrl: "https://instagram.com/roby_cafe_subiaco_",
  rating: 4.9,
  reviewCount: 102,
  hours: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 9:00 PM",
    wednesday: "8:00 AM - 9:00 PM",
    thursday: "8:00 AM - 9:00 PM",
    friday: "8:00 AM - 9:00 PM",
    saturday: "8:00 AM - 9:00 PM",
    sunday: "8:00 AM - 7:30 PM"
  }
}

export const testimonials = [
  {
    name: "Jeffrey Iwan",
    rating: 5,
    text: "I found this spot accidentally. One man show but good service. Choices are based on most favourite flavours in general so nothing is too hard to comprehend."
  },
  {
    name: "Daph",
    rating: 5,
    text: "I cannot fault this charming dessert parlour. The owner is lovely and makes everything in house. The waffle was amazing and ice cream was not overly sweet."
  },
  {
    name: "임현재",
    rating: 5,
    text: "Outstanding waffle taste. The owner should give him a bonus. He is the best staff I have ever met. Very quite place with a good vibe."
  },
  {
    name: "Jazmine Zabala",
    rating: 5,
    text: "The waffles are amazing!! So light and fluffy and matches with the egg and the strawberry!!! The man who owns it is also super nice."
  },
  {
    name: "Sara Almo",
    rating: 5,
    text: "This cafe is so cute and chill! We got chai lattes and a waffle, and the waffle is crispy and yammmmm. Highly recommend it."
  },
  {
    name: "Max Randall",
    rating: 5,
    text: "We just had some delicious ice cream, coffee and a very tasty waffle. Great, friendly service and generous portions. Thank you!"
  }
]

export const menuCategories = [
  {
    id: "waffles",
    name: "Waffles",
    description: "Our signature fluffy Belgian waffles",
    items: [
      {
        name: "Super Waffle",
        description: "Classic Belgian waffle with ice cream, fresh strawberries, and maple syrup",
        price: "$18",
        image: "/data/gmaps/unnamed-1.jpg",
        featured: true
      },
      {
        name: "Ferroro Rocher Waffle",
        description: "Decadent waffle topped with Nutella, Ferroro Rocher chocolates, and vanilla ice cream",
        price: "$19",
        image: "/data/menu/ferroro-rocher-waffle.jpg",
        featured: true
      },
      {
        name: "Classic Waffle",
        description: "Simple and delicious Belgian waffle with butter and maple syrup",
        price: "$9",
        image: "/data/menu/classic-waffle.jpg"
      },
      {
        name: "Strawberry Waffle",
        description: "Fresh strawberries, whipped cream, and strawberry sauce",
        price: "$16",
        image: "/data/menu/strawberry-waffle.jpg"
      },
      {
        name: "Chocolate Waffle",
        description: "Rich chocolate sauce, chocolate ice cream, and chocolate chips",
        price: "$17",
        image: "/data/menu/chocolate-waffle.webp"
      }
    ]
  },
  {
    id: "croffles",
    name: "Croffles",
    description: "Viral croissant-waffle hybrids",
    items: [
      {
        name: "Nutella Strawberry Croffle",
        description: "Our viral sensation - crispy croffle with Nutella and fresh strawberries",
        price: "$15",
        image: "/data/menu/nutella-strawberry-croffle.jpg",
        featured: true
      },
      {
        name: "Classic Croffle",
        description: "Buttery croffle with maple syrup",
        price: "$9",
        image: "/data/menu/classic-croffle.jpg"
      },
      {
        name: "Biscoff Croffle",
        description: "Lotus Biscoff spread, crumbled cookies, and vanilla ice cream",
        price: "$16",
        image: "/data/menu/biscoff-croffle.jpg"
      },
      {
        name: "Matcha Croffle",
        description: "Matcha glaze, red bean, and vanilla ice cream",
        price: "$16",
        image: "/data/menu/matcha-croffle.jpg"
      }
    ]
  },
  {
    id: "sundaes",
    name: "Sundaes",
    description: "Towering ice cream creations",
    items: [
      {
        name: "Lotus Biscoff Sundae",
        description: "Vanilla ice cream, Biscoff spread, crumbled cookies, and caramel sauce",
        price: "$12",
        image: "/data/gmaps/unnamed-6.jpg"
      },
      {
        name: "Chocolate Fudge Sundae",
        description: "Chocolate ice cream, hot fudge, brownie pieces, and whipped cream",
        price: "$12",
        image: "/data/menu/chocolate-fudge-sundae.jpg"
      },
      {
        name: "Strawberry Dream Sundae",
        description: "Strawberry ice cream, fresh berries, and strawberry sauce",
        price: "$11",
        image: "/data/menu/strawberry-dream-sundae.jpg"
      },
      {
        name: "Cookie Monster Sundae",
        description: "Vanilla ice cream, Oreos, cookie dough, and chocolate sauce",
        price: "$13",
        image: "/data/menu/cookie-monster-sundae.jpg"
      }
    ]
  },
  {
    id: "pancakes",
    name: "Pancakes",
    description: "Fluffy buttermilk pancakes",
    items: [
      {
        name: "Classic Stack",
        description: "Three fluffy pancakes with butter and maple syrup",
        price: "$12",
        image: "/data/menu/classic-stack.webp"
      },
      {
        name: "Berry Pancakes",
        description: "Mixed berries, whipped cream, and berry compote",
        price: "$15",
        image: "/data/menu/berry-pancakes.webp"
      },
      {
        name: "Nutella Banana Pancakes",
        description: "Nutella, sliced banana, and chopped hazelnuts",
        price: "$16",
        image: "/data/menu/nutella-banana-pancakes.jpg"
      }
    ]
  },
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your day sweet or savory",
    items: [
      {
        name: "Breakfast Waffle",
        description: "Savory waffle with scrambled eggs, bacon, and hollandaise",
        price: "$16",
        image: "/data/menu/breakfast-waffle.jpg"
      },
      {
        name: "Avocado Toast",
        description: "Smashed avocado, poached egg, feta, on sourdough",
        price: "$14",
        image: "/data/menu/avocado-toast.jpg"
      },
      {
        name: "French Toast",
        description: "Brioche French toast with berry compote and cream",
        price: "$15",
        image: "/data/menu/french-toast.jpg"
      }
    ]
  },
  {
    id: "drinks",
    name: "Coffee & Drinks",
    description: "Specialty coffee and beverages",
    items: [
      {
        name: "Flat White",
        description: "Our signature espresso with velvety microfoam",
        price: "$4.50",
        image: "/data/menu/flat-white.webp"
      },
      {
        name: "Cappuccino",
        description: "Classic espresso with steamed milk and foam",
        price: "$4.50",
        image: "/data/menu/cappuccino.jpg"
      },
      {
        name: "Latte",
        description: "Smooth espresso with steamed milk",
        price: "$4.50",
        image: "/data/menu/latte.jpg"
      },
      {
        name: "Biscoff Latte",
        description: "Espresso with Lotus Biscoff and steamed milk",
        price: "$6.50",
        image: "/data/menu/biscoff-latte.jpg"
      },
      {
        name: "Matcha Latte",
        description: "Premium matcha with steamed milk",
        price: "$6.00",
        image: "/data/menu/matcha-latte.jpg"
      },
      {
        name: "Hot Chocolate",
        description: "Rich chocolate with steamed milk and marshmallows",
        price: "$5.00",
        image: "/data/menu/hot-chocolate.jpg"
      },
      {
        name: "Chai Latte",
        description: "Spiced chai with steamed milk",
        price: "$5.00",
        image: "/data/menu/chai-latte.jpg"
      },
      {
        name: "Iced Coffee",
        description: "Cold brew over ice with milk",
        price: "$5.50",
        image: "/data/menu/iced-coffee.jpg"
      },
      {
        name: "Milkshakes",
        description: "Chocolate, Vanilla, Strawberry, or Caramel",
        price: "$8",
        image: "/data/menu/milkshakes.jpg"
      }
    ]
  }
]

export const chatbotResponses = [
  {
    keywords: ["hours", "open", "opening", "time", "when"],
    response: "We're open Monday 8am-6pm, Tue-Sat 8am-9pm, Sunday 8am-7:30pm. Come visit us!"
  },
  {
    keywords: ["location", "address", "where", "find", "directions"],
    response: "Find us at 127 Rokeby Road, Subiaco, WA 6008. We're on Rokeby Road's sweetest block!"
  },
  {
    keywords: ["waffle", "waffles", "best"],
    response: "Our waffles are legendary! Try the Super Waffle with ice cream or the Ferroro Rocher. Everything's made fresh!"
  },
  {
    keywords: ["croffle", "croffles", "viral"],
    response: "Croffles are our viral specialty - croissant meets waffle! Try the Nutella Strawberry or Classic Croffle."
  },
  {
    keywords: ["menu", "price", "cost", "how much"],
    response: "Waffles from $9, Croffles from $9, Sundaes from $10, Coffee from $4.50. View our full menu!"
  },
  {
    keywords: ["coffee", "latte", "cappuccino", "espresso"],
    response: "We serve amazing coffee! Flat white, cappuccino, latte from $4.50. Plus specialty drinks like Biscoff Latte."
  },
  {
    keywords: ["vegan", "vegetarian", "dietary", "allergen"],
    response: "We offer vegan and vegetarian options. Ask in-store about current dairy-free ice cream flavors!"
  },
  {
    keywords: ["family", "kids", "child", "children"],
    response: "Absolutely family-friendly! We have high chairs, mini treats for little ones, and a welcoming atmosphere."
  },
  {
    keywords: ["book", "reservation", "reserve", "booking"],
    response: "No bookings needed - just walk in! We're first-come, first-served with plenty of seating."
  },
  {
    keywords: ["parking", "park"],
    response: "Street parking available on Rokeby Road and surrounding streets in Subiaco."
  },
  {
    keywords: ["instagram", "social", "photo"],
    response: "Follow @roby_cafe_subiaco_ on Instagram for daily dessert inspiration!"
  },
  {
    keywords: ["ice cream", "flavors", "gelato", "flavours"],
    response: "We have 16+ rotating ice cream flavors all made in-house. From classics to unique creations!"
  }
]
