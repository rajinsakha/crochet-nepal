"use client"

import Link from "next/link"
import { Instagram, Search, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-rose-600">
          Crochet Nepal
        </Link>
        <nav className="hidden md:block">
        <ul className="flex space-x-6 justify-center py-2">
          <li>
            <Link href="/" className="text-gray-600 hover:text-rose-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-gray-600 hover:text-rose-600">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-rose-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-rose-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-gray-600 hover:text-rose-600">
            <Search size={20} />
          </button>
          <a
            href="https://www.instagram.com/crochet_nepal11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-rose-600 flex items-center"
          >
            <Instagram size={20} className="mr-1" />
            <span className="hidden md:inline">Order on Instagram</span>
          </a>
          <button
            className="md:hidden text-gray-600 hover:text-rose-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      <nav className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link href="/" className="text-gray-600 hover:text-rose-600 block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-gray-600 hover:text-rose-600 block">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-rose-600 block">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-rose-600 block">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    
    </header>
  )
}

