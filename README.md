# 🛍️ ShopSmart — E-Commerce Website (React + Tailwind + LocalStorage)

A modern and responsive **E-Commerce web application** built using **React.js** and **Tailwind CSS**, with **LocalStorage** integration for persistent cart management.  
Designed for speed, simplicity, and scalability — this frontend prototype can be extended into a full MERN stack application.

---

## 🚀 Features

- 🧩 **Modern Responsive UI** with Tailwind CSS  
- 🛍️ Product listing with descriptions and pricing  
- 🛒 Add to Cart / Remove from Cart functionality  
- 💾 **Persistent Cart using LocalStorage**  
- ⚡ Lightweight and fast — no backend required  
- 🔄 Easily extensible to connect with Express + MongoDB  

---

## 🧠 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js (Hooks + Context API) |
| **Styling** | Tailwind CSS |
| **State Management** | Context API + LocalStorage |
| **Routing** | React Router DOM |

---

## 📁 Project Structure

```bash
frontend/
 ├── public/
 │    └── index.html
 └── src/
      ├── App.js
      ├── index.js
      ├── data.js
      ├── components/
      │     ├── Navbar.js
      │     └── ProductCard.js
      ├── pages/
      │     ├── Home.js
      │     └── Cart.js
      ├── context/
      │     └── CartContext.js
      └── styles.css

----

## ⚙️ Installation & Setup

Follow these steps to set up and run the project locally 👇

### 1️⃣ Clone the Repository
```bash
## Frontend
git clone https://github.com/your-username/shopsmart.git
cd shopsmart/frontend
npm install
npm start
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

---

## Backend
cd shopsmart/backend
npm install
node server.js

