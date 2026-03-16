import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Heart, Bookmark, PlusSquare, LayoutDashboard, ChefHat } from 'lucide-react';

import { useRecipeContext } from '../context/RecipeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { 
    setHasSearched, 
    setSelectedIngredients, 
    setSelectedVegetables, 
    setSelectedFlour, 
    setDietFilter 
  } = useRecipeContext();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    // Clear Context State
    setHasSearched(false);
    setSelectedIngredients([]);
    setSelectedVegetables([]);
    setSelectedFlour([]);
    setDietFilter('All');
    
    // Clear Local Storage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-bold text-2xl text-white tracking-tight py-1">
          <img 
            src="https://res.cloudinary.com/dw4j19xmz/image/upload/v1773396970/Remove_background_project_3_new_nyocqk.png" 
            alt="Cookify Logo" 
            className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {isAuthenticated && (
          <div className="flex items-center gap-8 ml-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-text-secondary hover:text-white transition-all border border-transparent hover:bg-white/5"
            >
              <LayoutDashboard size={18} />
              Home
            </Link>
          </div>
        )}

        {isAuthenticated && (
          <div className="flex items-center gap-6 ml-auto">
            <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/5 shadow-inner">
              <Link 
                to="/saved" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-text-secondary hover:text-white hover:bg-white/5 transition-all"
              >
                <Bookmark size={16} />
                Saved
              </Link>
              <Link 
                to="/my-recipes" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-text-secondary hover:text-accent hover:bg-white/5 transition-all"
              >
                <ChefHat size={16} />
                My Recipes
              </Link>
              <Link 
                to="/favorites" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-text-secondary hover:text-red-500 hover:bg-red-500/5 transition-all"
              >
                <Heart size={16} />
                Favorites
              </Link>
              <button 
                onClick={() => navigate('/add-recipe')} 
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-accent hover:bg-accent/10 transition-all border border-transparent hover:border-accent/20"
              >
                <PlusSquare size={16} />
                Add Recipe
              </button>
            </div>

            <button 
              onClick={handleLogout} 
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 w-auto bg-[#171717] border border-white/5 text-text-secondary hover:text-white hover:border-white/10"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
