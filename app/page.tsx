"use client"
import Image from "next/image"
import { Star, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=700&width=1200"
          alt="Crochet flower bouquets and custom items"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">Welcome to Crochet Nepal</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Handmade crochet gifts and décor with love</p>
          <motion.a
            href="https://www.instagram.com/crochet_nepal11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full text-base md:text-lg transition duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={20} className="mr-2" />
            Order on Instagram
          </motion.a>
        </motion.div>
      </section>

      {/* Instagram Ordering Notice */}
      <motion.section
        className="bg-rose-100 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">How to Order</h2>
          <p className="text-base md:text-lg mb-4">
            All orders are handled through our Instagram account. Follow these steps:
          </p>
          <motion.ol
            className="list-decimal list-inside text-left max-w-md mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li className="mb-2" variants={itemVariants}>
              Browse our products on this website
            </motion.li>
            <motion.li className="mb-2" variants={itemVariants}>
              Visit our Instagram @crochet_nepal11
            </motion.li>
            <motion.li className="mb-2" variants={itemVariants}>
              DM us with the product name and any customization requests
            </motion.li>
            <motion.li variants={itemVariants}>We&apos;ll guide you through the ordering process</motion.li>
          </motion.ol>
        </div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Featured Products</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[1, 2, 3].map((product) => (
              <motion.div
                key={product}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt={`Featured product ${product}`}
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Crochet Product {product}</h3>
                  <p className="text-gray-600 mb-4">Beautiful handmade crochet item</p>
                  <div className="flex justify-between items-center">
                    <span className="text-rose-600 font-bold">$29.99</span>
                    <motion.a
                      href="https://www.instagram.com/crochet_nepal11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-3 md:px-4 rounded text-sm md:text-base transition duration-300 inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram size={16} className="mr-1 md:mr-2" />
                      Order on Instagram
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[1, 2, 3].map((testimonial) => (
              <motion.div key={testimonial} className="bg-rose-50 rounded-lg p-4 md:p-6" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                </p>
                <p className="font-semibold text-sm md:text-base">- Happy Customer {testimonial}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

