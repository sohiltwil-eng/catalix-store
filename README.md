# Catalix Store - Premium Clothing E-commerce

## 🎨 Overview

Catalix is a modern, premium e-commerce platform for selling clothing with stunning animations, smooth interactions, and a beautiful user experience.

## ✨ Features

- ✅ **Modern Tech Stack** - Next.js 14, React 18, TypeScript
- ✅ **Beautiful Animations** - Framer Motion for smooth interactions
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Backend Database** - Supabase with PostgreSQL
- ✅ **Payment Integration** - Stripe ready for production
- ✅ **Authentication** - User accounts and login system
- ✅ **Admin Panel** - Manage products and orders
- ✅ **Shopping Cart** - Full shopping experience
- ✅ **Product Search** - Find exactly what you need
- ✅ **3 Sample Products** - Ready to use and customize

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icons

### Backend & Services
- **Supabase** - PostgreSQL database + Authentication
- **Stripe** - Payment processing
- **Vercel** - Hosting & Deployment

## 📋 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account

### Installation

```bash
# Clone the repository
git clone https://github.com/sohiltwil-eng/catalix-store.git
cd catalix-store

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Add your credentials to .env.local
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your store!

## 🗄️ Database Setup

### Create Tables in Supabase

```sql
-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  category VARCHAR,
  sizes TEXT[] DEFAULT ARRAY[]::TEXT[],
  colors TEXT[] DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email VARCHAR NOT NULL UNIQUE,
  full_name VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  total DECIMAL(10, 2) NOT NULL,
  status VARCHAR DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📁 Project Structure

```
catalix-store/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── ProductCard.tsx     # Product card
│   └── HeroSection.tsx     # Hero section
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── types.ts            # TypeScript types
├── public/                 # Static assets
└── README.md              # This file
```

## 🎬 Animations

Catalix features smooth animations powered by Framer Motion:
- Hero section with animated gradients
- Product cards with hover effects
- Fade and slide-in animations
- Floating elements
- Smooth page transitions

## 📦 3 Sample Products

1. **Premium Cotton T-Shirt** - $49.99
   - Multiple colors and sizes
   - Comfortable and stylish

2. **Classic Denim Jeans** - $79.99
   - Timeless design
   - Various sizes

3. **Leather Jacket** - $199.99
   - Sophisticated style
   - Premium material

## 🔄 Next Steps

1. Set up Supabase and add your credentials
2. Configure Stripe for payments
3. Customize colors and branding
4. Add more products
5. Deploy to Vercel

## 📝 License

MIT License - feel free to use this project for your own store!

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ using Next.js and Framer Motion**
