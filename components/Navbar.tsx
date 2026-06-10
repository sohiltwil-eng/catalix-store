'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">Catal</span>
          <span className="text-secondary">ix</span>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-secondary transition font-medium">Home</Link>
          <Link href="/shop" className="hover:text-secondary transition font-medium">Shop</Link>
          <Link href="/about" className="hover:text-secondary transition font-medium">About</Link>
          <Link href="/contact" className="hover:text-secondary transition font-medium">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-gray-100 rounded-lg transition relative"
          >
            <ShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-secondary transition font-medium">Home</Link>
            <Link href="/shop" className="hover:text-secondary transition font-medium">Shop</Link>
            <Link href="/about" className="hover:text-secondary transition font-medium">About</Link>
            <Link href="/contact" className="hover:text-secondary transition font-medium">Contact</Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
