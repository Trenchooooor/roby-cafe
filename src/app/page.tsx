"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Clock, Star, Instagram } from "lucide-react"
import Testimonials from "@/components/testimonials"
import { businessInfo, menuCategories } from "@/lib/data"

export default function Home() {
  const featuredItems = menuCategories
    .flatMap(category => category.items)
    .filter(item => item.featured)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center mosaic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand-1/50 to-sand-1" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-amber-3 border border-amber-6 rounded-full text-amber-11 font-semibold mb-6"
              >
                ⭐ 4.9 Rating • 102 Reviews
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-sand-12 mb-6 leading-tight"
              >
                Perth's Sweetest{" "}
                <span className="text-tomato-9">Dessert Destination</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-sand-11 mb-8"
              >
                Viral croffles, fluffy waffles & handcrafted ice cream in the heart of Subiaco
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-tomato-9 text-white rounded-full hover:bg-tomato-10 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-gentle"
                >
                  View Menu
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/visit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-sand-6 text-sand-12 rounded-full hover:bg-sand-2 transition-all duration-200 font-semibold text-lg shadow hover:shadow-lg"
                >
                  <MapPin className="h-5 w-5" />
                  Visit Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-tomato-9/20 to-amber-9/20 z-10" />
                <Image
                  src="/data/gmaps/unnamed-1.jpg"
                  alt="Delicious waffle with ice cream and strawberries"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-amber-9 text-white rounded-full p-6 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold">16+</div>
                  <div className="text-sm">Ice Cream<br/>Flavors</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Desserts */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-4">
              Signature Creations
            </h2>
            <p className="text-lg text-sand-11 max-w-2xl mx-auto">
              Our most loved desserts, handcrafted fresh daily with premium ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div
                key={item.name}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand-6 card-hover"
              >
                {item.image && (
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 right-4 bg-tomato-9 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                      {item.price}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-sand-12 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sand-11 mb-4">{item.description}</p>
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-tomato-9 hover:text-tomato-10 font-semibold"
                  >
                    View Full Menu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-sand-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
              <Image
                src="/data/other/Roby.jpg.webp"
                alt="Roby Café interior"
                fill
                className="object-cover"
              />
            </div>

            <div className="animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-6">
                Everything Made <span className="text-tomato-9">In-House</span>
              </h2>
              <p className="text-lg text-sand-11 mb-6">
                Welcome to Subiaco's newest dessert destination! Every waffle, croffle, and scoop of ice cream is handcrafted by our friendly owner who pours passion into every creation.
              </p>
              <p className="text-lg text-sand-11 mb-8">
                From our viral croffles to our towering sundaes, we focus on quality ingredients, generous portions, and Instagram-worthy presentations that taste as good as they look.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-xl border border-sand-6">
                  <div className="text-3xl font-display font-bold text-tomato-9">4.9★</div>
                  <div className="text-sm text-sand-11">Average Rating</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-sand-6">
                  <div className="text-3xl font-display font-bold text-amber-9">102</div>
                  <div className="text-sm text-sand-11">Happy Reviews</div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-tomato-9 hover:text-tomato-10 font-semibold text-lg"
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Location & Hours */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sand-6">
              <h2 className="text-4xl font-display font-bold text-sand-12 mb-8 text-center">
                Come Check Our Perfect Taste
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Location */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-tomato-3 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-tomato-9" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-sand-12">
                      Location
                    </h3>
                  </div>
                  <p className="text-sand-11 mb-4">{businessInfo.address}</p>
                  <a
                    href="https://maps.google.com/?q=127+Rokeby+Road+Subiaco+WA+6008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-tomato-9 hover:text-tomato-10 font-semibold"
                  >
                    Get Directions
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-3 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-amber-9" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-sand-12">
                      Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-sand-11">
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span className="font-semibold">{businessInfo.hours.monday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tue - Sat</span>
                      <span className="font-semibold">{businessInfo.hours.tuesday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">{businessInfo.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram CTA */}
              <div className="text-center pt-8 border-t border-sand-6">
                <p className="text-sand-11 mb-4">Follow us for daily dessert inspiration</p>
                <a
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-all duration-200 font-semibold"
                >
                  <Instagram className="h-5 w-5" />
                  {businessInfo.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
