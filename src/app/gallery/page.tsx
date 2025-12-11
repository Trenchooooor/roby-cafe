"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  // Google Maps Photos
  { src: "/data/gmaps/unnamed-1.jpg", category: "waffles", alt: "Delicious waffle with ice cream" },
  { src: "/data/gmaps/unnamed-2.jpg", category: "drinks", alt: "Specialty coffee" },
  { src: "/data/gmaps/unnamed-3.jpg", category: "sundaes", alt: "Ice cream flavors display" },
  { src: "/data/gmaps/unnamed-4.jpg", category: "ambiance", alt: "Cafe interior" },
  { src: "/data/gmaps/unnamed-5.jpg", category: "waffles", alt: "Waffle creation" },
  { src: "/data/gmaps/unnamed-6.jpg", category: "sundaes", alt: "Lotus Biscoff sundae" },
  { src: "/data/gmaps/unnamed-7.jpg", category: "croffles", alt: "Fresh croffle" },
  { src: "/data/gmaps/unnamed-8.jpg", category: "sundaes", alt: "Ice cream sundae" },
  { src: "/data/gmaps/unnamed-9.jpg", category: "waffles", alt: "Waffle plate" },
  { src: "/data/gmaps/unnamed-10.jpg", category: "drinks", alt: "Coffee and treats" },
  { src: "/data/gmaps/unnamed.jpg", category: "ambiance", alt: "Storefront exterior" },

  // Instagram Photos
  { src: "/data/instagram/roby_cafe_subiaco___2025-11-28T092203.000Z.jpg", category: "waffles", alt: "Instagram waffle post" },
  { src: "/data/instagram/roby_cafe_subiaco___2025-11-28T092241.000Z.jpg", category: "sundaes", alt: "Instagram sundae post" },
  { src: "/data/instagram/roby_cafe_subiaco___2025-12-10T115250.000Z.jpg", category: "croffles", alt: "Instagram croffle post" },
  { src: "/data/instagram/roby_cafe_subiaco___2025-09-26T212220.000Z.jpg", category: "croffles", alt: "Viral croffle" },
  { src: "/data/instagram/roby_cafe_subiaco___2025-08-13T045718.000Z.jpg", category: "waffles", alt: "Waffle special" },
  { src: "/data/instagram/roby_cafe_subiaco___2025-07-02T070132.000Z.jpg", category: "sundaes", alt: "Sundae creation" },
  { src: "/data/instagram/roby_cafe_subiaco___2025-06-07T035134.000Z.jpg", category: "drinks", alt: "Specialty drink" },
  { src: "/data/instagram/roby_cafe_subiaco___2025-05-01T093413.000Z.jpg", category: "waffles", alt: "Waffle masterpiece" },
  { src: "/data/instagram/roby_cafe_subiaco___2025-02-04T075533.000Z.jpg", category: "sundaes", alt: "Ice cream creation" },
  { src: "/data/instagram/roby_cafe_subiaco___2024-02-19T060005.000Z.jpg", category: "ambiance", alt: "Cafe atmosphere" },
  { src: "/data/instagram/roby_cafe_subiaco___2024-02-19T045300.000Z.jpg", category: "ambiance", alt: "Interior vibe" },

  // Professional Photos
  { src: "/data/other/Roby.jpg.webp", category: "ambiance", alt: "Owner at counter" },
  { src: "/data/other/Roby-1.jpg.webp", category: "ambiance", alt: "Family dining" },
  { src: "/data/other/Roby-2.jpg.webp", category: "ambiance", alt: "Cafe interior" },
  { src: "/data/other/Roby-3.jpg.webp", category: "ambiance", alt: "Cozy atmosphere" },
]

const categories = [
  { id: "all", label: "All" },
  { id: "waffles", label: "Waffles" },
  { id: "croffles", label: "Croffles" },
  { id: "sundaes", label: "Sundaes" },
  { id: "drinks", label: "Drinks" },
  { id: "ambiance", label: "Ambiance" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = activeCategory === "all"
    ? images
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-sand-2 mosaic-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-sand-12 mb-4 animate-fade-in">
            Photo <span className="text-tomato-9">Gallery</span>
          </h1>
          <p className="text-xl text-sand-11 max-w-2xl mx-auto animate-fade-in">
            A visual feast of our handcrafted desserts and cozy atmosphere
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-sand-1 sticky top-20 z-40 border-b border-sand-6 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-tomato-9 text-white shadow-lg scale-105"
                    : "bg-white text-sand-11 hover:bg-sand-2 border border-sand-6"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  className="break-inside-avoid mb-4"
                >
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain"
                sizes="90vw"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-sand-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-display font-bold text-sand-12 mb-4">
              Ready to Experience It Yourself?
            </h2>
            <p className="text-lg text-sand-11 mb-8 max-w-2xl mx-auto">
              Come visit us and create your own delicious memories!
            </p>
            <a
              href="/visit"
              className="inline-block px-8 py-4 bg-tomato-9 text-white rounded-full hover:bg-tomato-10 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
