"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Clock, Instagram, ArrowRight, Star } from "lucide-react"
import { businessInfo } from "@/lib/data"

export default function VisitPage() {
  const galleryPreview = [
    "/data/gmaps/unnamed-1.jpg",
    "/data/gmaps/unnamed-6.jpg",
    "/data/gmaps/unnamed-3.jpg",
    "/data/other/Roby.jpg.webp",
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center mosaic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand-1/50 to-sand-1" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-amber-3 border border-amber-6 rounded-full text-amber-11 font-semibold mb-8"
            >
              ⭐ 4.9 Rating • 97% Five-Star Reviews
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-sand-12 mb-6 leading-tight">
              Come Check Our{" "}
              <span className="text-tomato-9">Perfect Taste</span>
            </h1>

            <p className="text-xl sm:text-2xl text-sand-11 mb-12">
              Experience Subiaco's sweetest dessert destination where every creation is handcrafted with love
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://maps.google.com/?q=127+Rokeby+Road+Subiaco+WA+6008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-tomato-9 text-white rounded-full hover:bg-tomato-10 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-gentle"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-sand-6 text-sand-12 rounded-full hover:bg-sand-2 transition-all duration-200 font-semibold text-lg shadow hover:shadow-lg"
              >
                View Menu
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours - Prominent */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Location Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sand-6 card-hover animate-fade-in">
              <div className="bg-tomato-3 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-tomato-9" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-sand-12 mb-4">
                Find Us
              </h2>
              <p className="text-xl text-sand-11 mb-6">
                {businessInfo.address}
              </p>
              <p className="text-sand-11 mb-6">
                Located on Rokeby Road in the heart of Subiaco. Street parking available nearby.
              </p>
              <a
                href="https://maps.google.com/?q=127+Rokeby+Road+Subiaco+WA+6008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-tomato-9 text-white rounded-full hover:bg-tomato-10 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                Open in Maps
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sand-6 card-hover animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-amber-3 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-amber-9" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-sand-12 mb-4">
                Opening Hours
              </h2>
              <div className="space-y-3 text-lg mb-6">
                <div className="flex justify-between items-center py-3 border-b border-sand-4">
                  <span className="font-semibold text-sand-12">Monday</span>
                  <span className="text-sand-11">{businessInfo.hours.monday}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sand-4">
                  <span className="font-semibold text-sand-12">Tuesday - Saturday</span>
                  <span className="text-sand-11">{businessInfo.hours.tuesday}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-sand-12">Sunday</span>
                  <span className="text-sand-11">{businessInfo.hours.sunday}</span>
                </div>
              </div>
              <p className="text-sand-11 text-sm">
                No bookings needed - just walk in! First-come, first-served.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-sand-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-sand-11 max-w-2xl mx-auto">
              A warm, family-friendly atmosphere with Instagram-worthy desserts
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🧇",
                title: "Fresh Daily",
                description: "Everything made in-house by our dedicated owner"
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Friendly",
                description: "High chairs available, welcoming to all ages"
              },
              {
                icon: "📸",
                title: "Instagram-Worthy",
                description: "Dramatic presentations perfect for sharing"
              },
              {
                icon: "☕",
                title: "Specialty Coffee",
                description: "Premium coffee to complement your dessert"
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-sand-6 card-hover"
                style={{ animation: `fadeIn 0.4s ease-out ${index * 0.1}s both` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-bold text-sand-12 mb-2">
                  {item.title}
                </h3>
                <p className="text-sand-11">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-4">
              See Our Creations
            </h2>
            <p className="text-lg text-sand-11 max-w-2xl mx-auto">
              A glimpse of what awaits you at Roby Café
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {galleryPreview.map((image, index) => (
              <div
                key={image}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
                style={{ animation: `fadeIn 0.4s ease-out ${index * 0.1}s both` }}
              >
                <Image
                  src={image}
                  alt="Roby Café creation"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-tomato-9 hover:text-tomato-10 font-semibold text-lg"
            >
              View Full Gallery
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-sand-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sand-6 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-amber-9 fill-amber-9" />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl sm:text-5xl font-display font-bold text-tomato-9 mb-2">
                    4.9
                  </div>
                  <div className="text-sand-11">Average Rating</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-display font-bold text-amber-9 mb-2">
                    102
                  </div>
                  <div className="text-sand-11">Reviews</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-display font-bold text-tomato-9 mb-2">
                    97%
                  </div>
                  <div className="text-sand-11">5-Star</div>
                </div>
              </div>

              <p className="text-lg text-sand-11 mb-8">
                Join over 100 happy customers who've given us 5-star reviews. Come discover why we're Subiaco's favorite dessert destination!
              </p>

              <div className="space-y-4">
                <a
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-all duration-200 font-semibold"
                >
                  <Instagram className="h-5 w-5" />
                  Follow {businessInfo.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-sand-12 mb-6">
              We Can't Wait to Serve You!
            </h2>
            <p className="text-xl text-sand-11 mb-8">
              127 Rokeby Road, Subiaco, WA 6008
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://maps.google.com/?q=127+Rokeby+Road+Subiaco+WA+6008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-tomato-9 text-white rounded-full hover:bg-tomato-10 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-sand-6 text-sand-12 rounded-full hover:bg-sand-2 transition-all duration-200 font-semibold text-lg shadow"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
