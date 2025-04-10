# 🛒 E-commerce Product Gallery [Frontend Assessment]

This is a responsive e-commerce product gallery application built with **Next.js** and **TypeScript**, featuring filtering, sorting, and shopping cart functionality. Developed as part of a frontend developer assessment.
## 🚀 Github Link 
> [🔗 View Github URL  ](https://github.com/kayes360/E-commerce-Product-Gallery)

## 🚀 Live Demo 
> [🔗 View Deployed App ](https://e-commerce-product-gallery.netlify.app/)

---

## 📦 Features Implemented

### ✅ Product Listing
- Fetching product data from `GET /api/products`
- Responsive grid layout
- Filtering by:
  - Category
  - Price range
  - Availability
- Sorting:
  - Price (ascending/descending)
  - Alphabetically (A–Z, Z–A)
- Search  
- Loading skeletons & error fallback UI

### ✅ Shopping Cart
- Add/remove products
- Quantity adjustments
- Cart preview offcanvas/sheet
- Total & subtotal calculations
- In-stock validation
- Cart persistence with `localStorage`

### ✅ Responsive Design
- Fully mobile-first layout
- Optimized for tablet and desktop
- Clean and minimal UI

---

## 🧠 Technical Decisions

| Area              | Choice                     | Reason                                                                 |
|-------------------|----------------------------|------------------------------------------------------------------------|
| Framework         | Next.js (App Router)       | Full-stack capabilities & file-based routing                          |
| Language          | TypeScript                 | Type safety and scalability                                           |
| State Management  | React Context  | Lightweight and scoped state handling for this use case              |
| Styling           | Tailwind CSS | ShadCN            | Utility-first, fast to build responsive and clean UIs                 |
| API               | Local `/api/products` route| Simulates real-world API fetching                                     |
| Persistence       | `localStorage`             | Retains cart state across sessions                                    |

---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/kayes360/E-commerce-Product-Gallery
   cd product-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm run dev
   ```

4. **View**
   Open your browser at `http://localhost:3000`

 

---

○ Deployed application (Vercel, Netlify, etc.)
○ Unit tests
○ Advanced features (search functionality, product detail pages)
○ Animations and transitions
○ Important: Make sure that the first 3 products’ description include the word
‘HuluLulu’
## 🧪 Bonus Features
- ✅ Deployed application
- ❌ Unit tests
- ✅ Advanced features (search functionality, product detail pages)
- ✅ Animations and transitions
- ✅ Important: Make sure that the first 3 products’ description include the word
‘HuluLulu’

---

## 📌 Assumptions 
- Used coupon code `COUPON2025` to calculate 5% discount 
- Discounts are not dynamic (basic total logic only)

---

## 🧹 Future Improvements
- Add unit & integration tests
- Implement authentication
- Enable product reviews
- Add pagination for large product datasets---

## 🧾 Sample Product JSON Format
```json
{
  "id": "1",
  "name": "Smartphone Pro",
  "description": "HuluLulu edition of our premium smartphone.",
  "price": 499.99,
  "category": "electronics",
  "image": "/images/product-1.jpg",
  "inStock": true
}
```

---

## 👨‍💻 Author

**Imrul Kayes**  
📧 imrulkayes560@gmail.com  
🌐 [Portfolio](https://kayes360.github.io/portfolio)