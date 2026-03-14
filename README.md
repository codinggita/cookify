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

### **Mentor Approval Section**
* **Student:** Kuldeep Patel
* **Mentor:** Samir Sir
* **Goal:** To build a functional MVP that reduces food waste through intelligent ingredient mapping.