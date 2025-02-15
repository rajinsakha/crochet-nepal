import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Crochet Nepal</h3>
            <p className="text-gray-600">Handmade crochet gifts and décor from Nepal.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-rose-600">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-rose-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-rose-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <a
              href="https://www.instagram.com/crochet_nepal11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-rose-600"
            >
              <Instagram size={20} className="mr-2" />
              @crochet_nepal11
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; 2023 Crochet Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

