"use client"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

const products = [
  { id: 1, name: "Crochet Flower Bouquet", price: 39.99 },
  { id: 2, name: "Dreamcatcher", price: 29.99 },
  { id: 3, name: "Baby Blanket", price: 49.99 },
  { id: 4, name: "Crochet Coasters Set", price: 19.99 },
  { id: 5, name: "Amigurumi Toy", price: 24.99 },
  { id: 6, name: "Crochet Wall Hanging", price: 34.99 },
]

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

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <motion.h1
        className="text-2xl md:text-4xl font-bold mb-4 md:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Shop Our Products
      </motion.h1>
      <motion.p
        className="mb-6 md:mb-8 text-base md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Browse our handmade crochet items below. To place an order, please contact us on Instagram.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={itemVariants}
          >
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">Beautiful handmade crochet item</p>
              <div className="flex justify-between items-center">
                <span className="text-rose-600 font-bold">${product.price.toFixed(2)}</span>
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
  )
}

