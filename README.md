# SHOP.CO — Next.js Ecommerce Application

This e-commerce web application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**, using [Fake Store API](https://fakestoreapi.com). Built as a frontend practical assignment.

---


## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/Surajj-00/web-engg-assignment.git
cd nextjs-ecommerce
```

### 2. Install dependencies

```bash
npm install
```


### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

---

## Environment Variables

This project uses no environment variables — it fetches directly from the public Fake Store API. No `.env` file is needed.

---


## Tech Stack

| Tech | Version | Purpose |
|---|---|---|
| Next.js | 15 | App Router, SSR, image optimization |
| TypeScript | 5 | Type safety |
| Tailwind CSS | v4 | Styling |
| React Context + useReducer | — | Cart state management |
| Lucide React | latest | Icons |
| Fake Store API | — | Product data |
| Bebas Neue + DM Sans | — | Google Fonts |

---

## Features

- **Homepage** — Hero section, New Arrivals, Top Selling product sections, brand strip
- **Product detail page** — Image, rating stars, description, Add to Cart
- **Cart page** — Quantity controls, order summary, free shipping threshold, promo code UI
- **Category filter** — Filter products by category via URL query params
- **Search** — Live search by product title via URL query params
- **Responsive** — Mobile and desktop layouts
- **Loading skeletons** — Suspense fallbacks on every page
- **Error boundaries** — Graceful error handling per route

---

## Project Structure

```
ecommerce-app/
├── app/
│   ├── layout.tsx               # Root layout — CartProvider + Navbar + Footer
│   ├── page.tsx                 # Homepage — Hero + product sections
│   ├── globals.css              # Tailwind v4 + @theme font variables
│   ├── loading.tsx              # Skeleton loader
│   ├── error.tsx                # Error boundary
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx         # Product detail page
│   └── cart/
│       └── page.tsx             # Cart page
├── components/
│   ├── product/
│   │   ├── ProductCard.tsx      # Single product card
│   │   ├── ProductGrid.tsx      # Product grid layout
│   │   ├── ProductSection.tsx   # Section with title + View All
│   │   ├── ProductDetail.tsx    # Full product detail view
│   │   └── CategoryFilter.tsx   # Category pill filters
│   ├── cart/
│   │   ├── CartView.tsx         # Cart page layout
│   │   ├── CartItem.tsx         # Single cart item row
│   │   └── CartSummary.tsx      # Order summary + promo code
│   └── ui/
│       ├── Navbar.tsx           # Sticky navbar + search + cart badge
│       ├── Hero.tsx             # Homepage hero section
│       ├── Footer.tsx           # Footer with links
│       └── Newsletter.tsx       # Newsletter signup banner
├── context/
│   └── CartContext.tsx          # useReducer cart state + useCart hook
├── lib/
│   └── api.ts                   # Fake Store API fetch functions
├── types/
│   └── index.ts                 # Product, CartItem, Category interfaces
└── public/
    ├── fonts/                   # Self-hosted fonts (if any)
    └── images/
        └── hero-model.png       # Hero section model image
```


## API Reference

All data is fetched from [https://fakestoreapi.com](https://fakestoreapi.com).

| Function | Endpoint | Used in |
|---|---|---|
| `getProducts()` | `GET /products` | Homepage |
| `getProductById(id)` | `GET /products/:id` | Product detail |
| `getCategories()` | `GET /products/categories` | Homepage filter |
| `getProductsByCategory(cat)` | `GET /products/category/:cat` | Category filter |

All fetches are cached for 1 hour via `next: { revalidate: 3600 }`.

---

## Cart State

Cart is managed globally with React Context + `useReducer`. No external library.

```
Dispatch action → cartReducer → new state → all useCart() consumers re-render
```

| Action | Effect |
|---|---|
| `ADD_ITEM` | Adds product or increments quantity if already in cart |
| `REMOVE_ITEM` | Removes item by product id |
| `UPDATE_QUANTITY` | Updates quantity — removes item if quantity ≤ 0 |
| `CLEAR_CART` | Empties the cart |

---
