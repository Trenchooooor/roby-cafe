"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Users, Award, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every item is handcrafted by our dedicated owner who pours passion into each creation. From our waffles to ice cream, everything is made fresh in-house."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest ingredients to create desserts that taste as incredible as they look. No shortcuts, no compromises."
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "A warm, welcoming atmosphere where families, couples, and friends create sweet memories together. Everyone is family at Roby Café."
  },
  {
    icon: Sparkles,
    title: "Instagram-Worthy",
    description: "Dramatic presentations and generous portions that are perfect for sharing on social media. Our desserts are designed to delight both your taste buds and your feed."
  }
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-sand-2 mosaic-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-display font-bold text-sand-12 mb-4"
          >
            About <span className="text-tomato-9">Roby Café</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-sand-11 max-w-2xl mx-auto"
          >
            Subiaco's newest dessert destination, where passion meets perfection
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-sand-11">
                <p>
                  Welcome to Roby Café, Subiaco's sweetest destination on Rokeby Road. We're more than just a dessert café – we're a labor of love, a one-man show dedicated to bringing you the finest handcrafted treats in Perth.
                </p>
                <p>
                  Our journey began with a simple mission: to create desserts that make people smile. From our viral croffles that have taken Perth by storm to our fluffy Belgian waffles and artisan ice cream, every item is made fresh daily with premium ingredients and genuine care.
                </p>
                <p>
                  What sets us apart? Everything is made in-house. Our owner personally crafts each dessert, ensuring consistent quality and that homemade touch that you just can't replicate. Whether it's perfecting our croffle recipe or creating new ice cream flavors, the dedication shows in every bite.
                </p>
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
              <Image
                src="/data/other/Roby.jpg.webp"
                alt="Owner at work in Roby Café"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-sand-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-sand-11 max-w-2xl mx-auto">
              Our values guide everything we do, from ingredient selection to customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand-6 card-hover"
              >
                <div className="bg-tomato-3 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-tomato-9" />
                </div>
                <h3 className="text-2xl font-display font-bold text-sand-12 mb-3">
                  {value.title}
                </h3>
                <p className="text-sand-11">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
              <Image
                src="/data/other/Roby-1.jpg.webp"
                alt="Family enjoying desserts at Roby Café"
                fill
                className="object-cover"
              />
            </div>

            <div className="animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-6">
                The <span className="text-tomato-9">Experience</span>
              </h2>
              <div className="space-y-4 text-lg text-sand-11">
                <p>
                  Step into our cozy café and you'll immediately feel the warmth. The distinctive coral pink walls and mosaic tile tables create an atmosphere that's both nostalgic and contemporary – like stepping into a modern ice cream parlor from your childhood dreams.
                </p>
                <p>
                  Our space is designed to be Instagram-worthy yet comfortable, perfect for capturing that perfect dessert shot or simply enjoying a quiet moment with your coffee and waffle. We're family-friendly with high chairs available, but equally welcoming to couples on dates or friends catching up.
                </p>
                <p>
                  The atmosphere is relaxed and inviting, with our friendly owner often chatting with customers, taking pride in explaining how each dessert is made. It's this personal touch that keeps customers coming back and has earned us a 4.9-star rating.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-sand-6">
                  <div className="text-3xl font-display font-bold text-tomato-9">4.9★</div>
                  <div className="text-sm text-sand-11">Rating</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-sand-6">
                  <div className="text-3xl font-display font-bold text-amber-9">102</div>
                  <div className="text-sm text-sand-11">Reviews</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-sand-6">
                  <div className="text-3xl font-display font-bold text-tomato-9">97%</div>
                  <div className="text-sm text-sand-11">5-Star</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-sand-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-4">
              What Makes Us Special
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Family Friendly", emoji: "👨‍👩‍👧‍👦" },
              { label: "Vegan Options", emoji: "🌱" },
              { label: "Vegetarian Options", emoji: "🥗" },
              { label: "Outdoor Seating", emoji: "☀️" },
              { label: "Takeaway Available", emoji: "🥡" }
            ].map((feature, index) => (
              <div
                key={feature.label}
                style={{
                  animation: `fadeIn 0.4s ease-out ${index * 0.05}s both`
                }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-sand-6 card-hover"
              >
                <div className="text-4xl mb-3">{feature.emoji}</div>
                <div className="font-semibold text-sand-12">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-4">
              Come Visit Us!
            </h2>
            <p className="text-lg text-sand-11 mb-8 max-w-2xl mx-auto">
              Experience the warmth, taste the quality, and discover why we're Subiaco's favorite dessert destination
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/visit"
                className="inline-block px-8 py-4 bg-tomato-9 text-white rounded-full hover:bg-tomato-10 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Visit Us Today
              </Link>
              <Link
                href="/menu"
                className="inline-block px-8 py-4 bg-white border-2 border-sand-6 text-sand-12 rounded-full hover:bg-sand-2 transition-all duration-200 font-semibold text-lg shadow"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
