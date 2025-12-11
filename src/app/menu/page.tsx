"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { menuCategories } from "@/lib/data"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory)

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
            Our <span className="text-tomato-9">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-sand-11 max-w-2xl mx-auto"
          >
            Every item handcrafted with love, using premium ingredients
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-sand-1 sticky top-20 z-40 border-b border-sand-6 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-tomato-9 text-white shadow-lg scale-105"
                    : "bg-white text-sand-11 hover:bg-sand-2 border border-sand-6"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {currentCategory && (
            <div
              key={currentCategory.id}
              className="animate-fade-in"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold text-sand-12 mb-2">
                  {currentCategory.name}
                </h2>
                <p className="text-lg text-sand-11">
                  {currentCategory.description}
                </p>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory.items.map((item, index) => (
                  <div
                    key={item.name}
                    style={{
                      animation: `slideUp 0.4s ease-out ${index * 0.05}s both`
                    }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand-6 card-hover"
                  >
                    {/* Image */}
                    {item.image && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-display font-bold text-sand-12 flex-1">
                          {item.name}
                        </h3>
                        <span className="text-2xl font-display font-bold text-tomato-9 ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sand-11">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sand-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-sand-12 mb-4">
              Ready to Try Our Delicious Treats?
            </h2>
            <p className="text-lg text-sand-11 mb-8 max-w-2xl mx-auto">
              Visit us in Subiaco and experience the magic for yourself!
            </p>
            <a
              href="/visit"
              className="inline-block px-8 py-4 bg-tomato-9 text-white rounded-full hover:bg-tomato-10 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Visit Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
