'use client'

import { motion } from 'framer-motion'
import { Product } from '@/lib/types'
import Link from 'next/link'
import { ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 bg-gray-200 overflow-hidden group cursor-pointer">
          <motion.img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <p className="text-white font-bold text-lg">View Details</p>
          </motion.div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {/* Colors preview */}
        <div className="flex gap-2 mb-4">
          {product.colors.slice(0, 3).map((color) => (
            <motion.div
              key={color}
              whileHover={{ scale: 1.2 }}
              className="w-4 h-4 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: color.toLowerCase().replace(/\s+/g, '') === 'black' ? '#000' : color.toLowerCase().replace(/\s+/g, '') === 'white' ? '#fff' : color.toLowerCase().replace(/\s+/g, '') === 'red' ? '#ff6b6b' : color.toLowerCase().replace(/\s+/g, '') === 'navy' ? '#0047ab' : color.toLowerCase().replace(/\s+/g, '') === 'lightblue' ? '#add8e6' : color.toLowerCase().replace(/\s+/g, '') === 'darkblue' ? '#00008b' : color.toLowerCase().replace(/\s+/g, '') === 'brown' ? '#8b4513' : color.toLowerCase().replace(/\s+/g, '') === 'tan' ? '#d2b48c' : '#ccc' }}
              title={color}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-secondary">${product.price.toFixed(2)}</span>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Heart size={20} fill={isFavorite ? '#ff6b6b' : 'none'} color={isFavorite ? '#ff6b6b' : '#666'} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-secondary text-white rounded-lg hover:bg-red-700 transition"
            >
              <ShoppingCart size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
