"use client"

import Link from "next/link"
import { Instagram, Youtube, Facebook, Linkedin, Twitter, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1f24] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1440] mx-auto">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-medium mb-6">Explore Shell.com</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Our strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Our values
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Our climate target
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Our stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  UK Modern Slavery Act
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Cautionary note
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-medium mb-6">Can we help?</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Job search
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Shell Global Helpline
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-medium mb-6">Connect with us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Youtube size={20} />
                  <span>YouTube</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Twitter size={20} />
                  <span>X</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section with legal links */}
      <div className="border-t border-gray-700 max-w-[1440] mx-auto">
        <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 md:gap-6 mb-4 md:mb-0">
            <Link href="#" className="text-gray-300 hover:text-red-600/90 text-sm transition-colors">
              Accessibility
            </Link>
            <Link href="#" className="text-gray-300 hover:text-red-600/90 text-sm transition-colors">
              Terms and conditions
            </Link>
            <Link href="#" className="text-gray-300 hover:text-red-600/90 text-sm transition-colors">
              Privacy notices
            </Link>
            <Link href="#" className="text-gray-300 hover:text-red-600/90 text-sm transition-colors">
              Cookie policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-red-600/90 text-sm transition-colors">
              Fraud and scam alert
            </Link>
            <Link href="#" className="text-gray-300 hover:text-red-600/90 text-sm transition-colors">
              Contact us
            </Link>
          </div>
          <div>
            <button className="text-gray-300 hover:text-white text-sm transition-colors">
              Modify cookie preferences
            </button>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="relative container mx-auto px-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-4 -top-10 bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  )
}
