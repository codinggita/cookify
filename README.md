# 🥗 Cookify - Smart Pantry & Recipe Architect

> **"Stop shopping for recipes. Start cooking your kitchen."**

[![Live Preview](https://img.shields.io/badge/Live-Preview-brightgreen?style=for-the-badge)](https://cookifynow.vercel.app/)
[![Server URL](https://img.shields.io/badge/Server-API-blue?style=for-the-badge)](https://cookifyotpauthentication.onrender.com/)

---

## 🎯 Purpose & Vision
**Cookify** is a data-driven cooking assistant designed to eliminate "Decision Fatigue" and reduce household food waste. Instead of browsing recipes and then buying ingredients, Cookify reverses the flow: you tell the app what **ingredients you already have**, and it architecturally maps out exactly what you can cook.

### Key Solutions:
*   **Reduce Waste**: Roughly 30% of household food is wasted. Cookify helps you use what's already in your pantry.
*   **Smart Mapping**: Our engine calculates a **"Match Percentage"** for recipes based on your specific inventory.
*   **"The Missing Link"**: Identifies exactly which 1 or 2 items you need to "unlock" a high-quality dish, making grocery trips efficient and purposeful.

---

## 🚀 Live Preview
Visit the live application at: **[https://cookifynow.vercel.app/](https://cookifynow.vercel.app/)**

---

## 🛠️ Tech Stack
*   **Frontend**: React 19, Vite, Tailwind CSS, Lucide Icons.
*   **Backend**: Node.js, Express.js.
*   **Database**: MongoDB (Atlas).
*   **Deployment**: Vercel (Frontend), Render (Backend).

---

## 📥 Installation & Setup

Follow these steps to clone and run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/kuldeeppatel-cg/cookify.git
cd cookify
```

### 2. Backend Setup
```bash
cd "Backend/cookify server"
npm install
```
*Create a `.env` file in the backend directory:*
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
*Start the server:*
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../../FrontEnd
npm install
npm run dev
```
*The app will be available at `http://localhost:5173`.*

---

## 🛣️ API Endpoints Reference

Our backend provides a robust API for managing users and recipes.

### 🔐 User & Authentication (OTP-Free)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/users/register` | Create a new account (Auto-verified) |
| **POST** | `/api/users/login` | Instant login with email/username |
| **POST** | `/api/users/forgot-password` | Check account existence before reset |
| **POST** | `/api/users/reset-password` | Directly reset password |
| **GET** | `/api/users/:id` | Fetch user profile & collections |
| **PUT** | `/api/users/:id/save-recipe` | Toggle recipe in "Saved" collection |
| **PUT** | `/api/users/:id/favorite-recipe` | Toggle recipe in "Favorites" |
| **PUT** | `/api/users/:id/recent-recipes` | Update user's recently viewed list |

### 📦 Recipe Management
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/recipes` | Fetch all recipes from the database |
| **POST** | `/api/recipes/bulk` | Add new recipes (Single or Array) |
| **PATCH** | `/api/recipes/:id` | Update recipe details |
| **DELETE** | `/api/recipes/:id` | Remove a recipe from the database |

---

## 📝 Request Example

#### **Creating a Recipe (Bulk Upload)**
**Endpoint:** `POST /api/recipes/bulk`  
**Body:**
```json
{
  "title": "Paneer Butter Masala",
  "category": "Veg",
  "cuisine": "Indian",
  "prep_time": "15 mins",
  "cook_time": "20 mins",
  "ingredients": ["Paneer", "Butter", "Tomato Puree", "Cream"],
  "vegetables": ["Onion", "Ginger", "Garlic"],
  "flour": ["N/A"],
  "instructions": [
    "Sauté ginger-garlic paste in butter.",
    "Add tomato puree and cook until oil separates.",
    "Add paneer cubes and cream. Simmer for 5 mins."
  ]
}
```

---

## 👨‍💻 Project Information
*   **Developer**: Kuldeep Patel
*   **Mentor**: Samir Sir
*   **Goal**: To build a functional MVP that empowers users to cook smarter and waste less.