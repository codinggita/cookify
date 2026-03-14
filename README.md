# 🥗 Project name: Cookify
> *Stop shopping for recipes. Start cooking your kitchen.*

## 📌 Project Vision
The **Smart-Pantry & Recipe Architect** is a data-driven cooking assistant. It eliminates the "Decision Fatigue" of meal planning by reversing the traditional recipe search. Instead of searching for a dish and then buying ingredients, the user inputs their **current inventory**, and the system architectures a meal plan based on what is already available.

---

## 🎯 The "Problem vs. Solution"
* **The Problem:** Roughly 30% of household food is wasted because users don't know how to use "leftover" ingredients, or they lack 1-2 key items to complete a dish.
* **The Solution:** An engine that calculates a **"Cookability Score"** and identifies the specific **Missing Links** to unlock high-quality recipes.

---

## 🚀 Unique Feature: "The Missing Link" Logic
Unlike standard apps, this project features a **Delta ($\Delta$) Analysis** engine:
1.  **Direct Match:** 100% of ingredients owned $\rightarrow$ **"Cook Now."**
2.  **The Bridge:** 70-90% of ingredients owned $\rightarrow$ **"Add [Ingredient] to unlock this dish."**
3.  **The Swap:** Suggests logical substitutions to bridge the gap (e.g., "Use Greek Yogurt instead of Sour Cream").

---

## 🛠 Technical Architecture

### **1. Data Flow**
* **Input Layer:** User-managed "Digital Pantry" (CRUD operations for ingredients).
* **Processing Layer:** A filtering algorithm that intersects `User_Inventory` with a `Recipe_Database`.
* **Output Layer:** A ranked list of recipes sorted by the fewest items needed to buy.

### **2. The Matching Algorithm**
The system ranks suggestions using a simple but effective ratio:

$$Match \% = \left( \frac{\text{Ingredients Available}}{\text{Ingredients Required}} \right) \times 100$$

### **3. Proposed Tech Stack**
* **Frontend:** React.js / Next.js (Responsive Web)
* **Backend:** Node.js (Express) or Python (FastAPI)
* **Database:** MongoDB (Flexible schema for varying ingredient types)
* **API:** Edamam or Spoonacular (For a library of 365,000+ recipes)

---

## 📅 Roadmap for Development
* **Phase 1:** Build the Digital Pantry (Add/Remove items).
* **Phase 2:** Integrate Recipe API and basic "Exact Match" logic.
* **Phase 3:** Implement the **"Smart-Add"** suggestion engine (The 1-item-away logic).
* **Phase 4:** Add "Auto-Deduct" (When a user cooks a dish, items are removed from pantry).

---

## 💡 Why This Project?
1.  **Utility:** It solves a daily problem (hunger + budgeting).
2.  **Complexity:** It involves API integration, complex filtering logic, and state management.
3.  **Scalability:** Potential for AI-driven "Flavor Pairing" and grocery store API integration.

---

# 🚀 Server API Project

A clean and scalable back-end server architecture. This project handles [Project Purpose, e.g., User Authentication and Task Management] and is designed for easy integration with frontend frameworks.

---

## 🛠 Prerequisites

Before you begin, ensure you have the following installed on your local machine:
* **Node.js** (v18.x or higher)
* **npm** (comes with Node) or **yarn**
* **Git**

---

## 📥 Installation & Local Setup

Follow these steps to clone the repository and set up your local development environment:

### 1. Clone the Repository
Open your terminal and run the following command:

git clone https://github.com/kuldeeppatel-cg/cookify.git
server url https://cookify-server.onrender.com/

## 🛣 API Endpoints Reference

### 🔐 Authentication
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/recipes/bulk` | Register a new user account | No |
<!-- | **POST** | `/api/auth/login` | Authenticate user & return JWT | No | -->
| **GET** | `/api/recipes` | Get current user profile | **Yes** |

### 📦 Resources (e.g., Recipes/Items)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/recipes'` | Fetch all records | No |
| **POST** | `/api/recipes/bulk` | Create a new record in bulk | **Yes** |
| **PUT** | `/api/recipes/:id` | Update an existing record | **Yes** |
| **DELETE** | `/api/recipes/:id` | Remove a record from DB | **Yes** |



---

### 📝 Request Examples (Optional)

#### **Create Item**
**Endpoint:** `POST /api/items`  
**Headers:** `Content-Type: application/json`, `Authorization: Bearer <token>`  
**Body:**
```json
  {
        "_id": "69b3faccd7128ddad45d3303",
        "id": 1,
        "title": "Butter Chicken",
        "category": "Non-Veg",
        "cuisine": "Indian",
        "image_url": "https://images.unsplash.com/photo-1603894584115-f73f2ec0a4ad?auto=format&fit=crop&w=800&q=80",
        "prep_time": "20 mins",
        "cook_time": "30 mins",
        "ingredients": [
            "500g Chicken thighs",
            "1 cup Tomato puree",
            "100ml Heavy cream",
            "2 tbsp Butter",
            "1 tbsp Garam masala"
        ],
        "instructions": [
            "Marinate chicken in yogurt and spices for 2 hours.",
            "Sauté tomato puree with butter and ginger-garlic paste.",
            "Simmer cooked chicken in the tomato gravy and finish with cream.",
            "Garnish with kasuri methi and serve with Garlic Naan."
        ]
    }

 Mentor Approval Section
* **Student:** Kuldeep Patel
* **Mentor:** Samir Sir
* **Goal:** To build a functional MVP that reduces food waste through intelligent ingredient mapping.