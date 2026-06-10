'use client'

import { motion } from 'framer-motion'
import { ProductCard } from '@/components/ProductCard'
import { HeroSection } from '@/components/HeroSection'
import { useEffect, useState } from 'react'
import { Product } from '@/lib/types'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(3)

      if (error) throw error
      setProducts(data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
      // Fallback to mock data
      setProducts(mockProducts)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <HeroSection />
      
      <section className="py-20 container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-gray-600 text-lg">Discover our latest premium clothing</p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}

// Mock data for development
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    description: 'Comfortable and stylish cotton t-shirt perfect for any occasion',
    price: 49.99,
    image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Red'],
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Classic Denim Jeans',
    description: 'Timeless denim jeans that never go out of style',
    price: 79.99,
    image_url: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop',
    category: 'Bottoms',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Leather Jacket',
    description: 'Sophisticated leather jacket for a bold statement',
    price: 199.99,
    image_url: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop',
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Tan'],
    created_at: new Date().toISOString(),
  },
]
