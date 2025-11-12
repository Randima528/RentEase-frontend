import React from 'react'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-900/75 via-slate-900/55 to-transparent backdrop-blur-sm text-white px-[5%] py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div >
            <img
            src="/images/RentEase_Logo2.png"
            alt="RentEase Logo"
            className="w-60 h-14 filter brightness-50"
            />
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Making renting easy and smooth. Find verified rental listings, manage properties and
            connect with tenants across Sri Lanka.
          </p>
          <p className="text-xs text-gray-400">Mon – Fri: 9:00am – 6:00pm</p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <div className="flex items-center gap-3 text-gray-300">
            <MapPin className="w-5 h-5 text-gray-300" />
            <div>
              <div className="text-sm">Head Office</div>
              <div className="text-sm text-gray-400">123 Galle Road, Colombo 03, Sri Lanka</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <Phone className="w-5 h-5 text-gray-300" />
            <a className="text-sm text-gray-400 hover:text-white" href="tel:+94112345678">+94 11 234 5678</a>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <Mail className="w-5 h-5 text-gray-300" />
            <a className="text-sm text-gray-400 hover:text-white" href="mailto:info@rentease.lk">info@rentease.lk</a>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a className="hover:text-white" href="/browse">Browse Properties</a></li>
            <li><a className="hover:text-white" href="/register">Register</a></li>
            <li><a className="hover:text-white" href="/about">About Us</a></li>
            <li><a className="hover:text-white" href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <p className="text-sm text-gray-400">Stay connected - follow RentEase for updates and listings.</p>

          <div className="flex items-center gap-3 mt-3">
            <a aria-label="Facebook" href="https://www.facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© 2025 RentEase. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
