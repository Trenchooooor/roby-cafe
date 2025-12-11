import Link from "next/link"
import { Instagram, MapPin, Clock } from "lucide-react"
import { businessInfo } from "@/lib/data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sand-2 border-t border-sand-6 mosaic-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-tomato-9 mb-4">
              Roby Café
            </h3>
            <p className="text-sand-11 mb-4">
              Perth's sweetest dessert destination. Handcrafted waffles, viral croffles, and artisan ice cream.
            </p>
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-tomato-9 hover:text-tomato-10 transition-colors font-medium"
            >
              <Instagram className="h-5 w-5" />
              {businessInfo.instagram}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-sand-12 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-sand-11 hover:text-tomato-9 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sand-11 hover:text-tomato-9 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sand-11 hover:text-tomato-9 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sand-11 hover:text-tomato-9 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-sand-11 hover:text-tomato-9 transition-colors">
                  Visit Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-lg font-display font-bold text-sand-12 mb-4">
              Visit Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-tomato-9 flex-shrink-0 mt-0.5" />
                <p className="text-sand-11">{businessInfo.address}</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-tomato-9 flex-shrink-0 mt-0.5" />
                <div className="text-sand-11">
                  <p>Mon: {businessInfo.hours.monday}</p>
                  <p>Tue-Sat: {businessInfo.hours.tuesday}</p>
                  <p>Sun: {businessInfo.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sand-6 text-center text-sand-11 text-sm">
          <p>© {currentYear} Roby Café. All rights reserved.</p>
          <p className="mt-2">Everything made in-house with love ❤️</p>
        </div>
      </div>
    </footer>
  )
}
