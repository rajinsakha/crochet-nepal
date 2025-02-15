"use client"
import { Phone, Mail, Instagram } from "lucide-react"
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

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 className="text-2xl font-semibold mb-4" variants={itemVariants}>
            Get in Touch
          </motion.h2>
          <motion.p className="mb-4" variants={itemVariants}>
            We&apos;d love to hear from you! For orders and inquiries, please contact us on Instagram.
          </motion.p>
          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <Instagram size={20} className="mr-2" />
            <a
              href="https://www.instagram.com/crochet_nepal11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:underline"
            >
              @crochet_nepal11
            </a>
          </motion.div>
          <motion.div className="flex items-center mb-2" variants={itemVariants}>
            <Phone size={20} className="mr-2" />
            <span>+977 123-456-7890</span>
          </motion.div>
          <motion.div className="flex items-center" variants={itemVariants}>
            <Mail size={20} className="mr-2" />
            <span>info@crochetnepal.com</span>
          </motion.div>
        </motion.div>
        <motion.form className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

