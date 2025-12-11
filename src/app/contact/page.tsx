"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, Instagram, Mail, Send } from "lucide-react"
import { businessInfo } from "@/lib/data"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )

    // Open mail client
    window.location.href = `mailto:info@robycafe.com?subject=${subject}&body=${body}`

    // Show success message
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            Get in <span className="text-tomato-9">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-sand-11 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Send us a message or visit us in Subiaco
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-sand-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-sand-6 animate-fade-in">
              <h2 className="text-3xl font-display font-bold text-sand-12 mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-tomato-3 border border-tomato-6 rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl mb-4">🧇</div>
                  <h3 className="text-2xl font-display font-bold text-tomato-11 mb-2">
                    Thanks!
                  </h3>
                  <p className="text-tomato-11">
                    Your message has been sent. We'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-sand-12 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-sand-6 bg-sand-1 text-sand-12 focus:outline-none focus:ring-2 focus:ring-tomato-8 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-sand-12 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-sand-6 bg-sand-1 text-sand-12 focus:outline-none focus:ring-2 focus:ring-tomato-8 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-sand-12 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sand-6 bg-sand-1 text-sand-12 focus:outline-none focus:ring-2 focus:ring-tomato-8 transition-all"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-sand-12 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-sand-6 bg-sand-1 text-sand-12 focus:outline-none focus:ring-2 focus:ring-tomato-8 transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-tomato-9 text-white rounded-full hover:bg-tomato-10 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              {/* Location */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-sand-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-tomato-3 p-4 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-tomato-9" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-sand-12 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-sand-11 mb-4">
                      {businessInfo.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=127+Rokeby+Road+Subiaco+WA+6008"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-tomato-9 hover:text-tomato-10 font-semibold"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-sand-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-3 p-4 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-amber-9" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-sand-12 mb-4">
                      Opening Hours
                    </h3>
                    <div className="space-y-2 text-sand-11">
                      <div className="flex justify-between">
                        <span className="font-semibold">Monday</span>
                        <span>{businessInfo.hours.monday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Tue - Sat</span>
                        <span>{businessInfo.hours.tuesday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Sunday</span>
                        <span>{businessInfo.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-sand-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-4 rounded-full flex-shrink-0">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-sand-12 mb-2">
                      Follow Us
                    </h3>
                    <p className="text-sand-11 mb-4">
                      Stay updated with our latest creations and special offers
                    </p>
                    <a
                      href={businessInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-tomato-9 hover:text-tomato-10 font-semibold"
                    >
                      {businessInfo.instagram} →
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Note */}
              <div className="bg-amber-3 rounded-3xl p-6 border border-amber-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amber-11 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-11">
                    For quick questions, feel free to DM us on Instagram or visit us in person. We love chatting with our customers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-sand-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-display font-bold text-sand-12 mb-8 text-center">
              Find Us on the Map
            </h2>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-sand-6 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.5!2d115.82!3d-31.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a4f3!3d-31.95!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Roby Café Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
