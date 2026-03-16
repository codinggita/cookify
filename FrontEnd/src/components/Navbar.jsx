import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LogOut, Heart, Bookmark, PlusSquare, LayoutDashboard,
  ChefHat, Menu, X, ChevronRight, Sun, Moon
} from 'lucide-react';

import { useRecipeContext } from '../context/RecipeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');

  React.useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const {
    setHasSearched,
    setSelectedIngredients,
    setSelectedVegetables,
    setSelectedFlour,
    setDietFilter
  } = useRecipeContext();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    setHasSearched(false);
    setSelectedIngredients([]);
    setSelectedVegetables([]);
    setSelectedFlour([]);
    setDietFilter('All');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserId');
    navigate('/login');
    setIsMenuOpen(false);
  };

  const resetSearchState = () => {
    setHasSearched(false);
    setSelectedIngredients([]);
    setSelectedVegetables([]);
    setSelectedFlour([]);
    setDietFilter('All');
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: LayoutDashboard },
    { to: '/saved', label: 'Saved', icon: Bookmark },
    { to: '/my-recipes', label: 'My Recipes', icon: ChefHat },
    { to: '/favorites', label: 'Favorites', icon: Heart },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-bg-primary/80 backdrop-blur-xl border-b border-border-primary">
        <div className="max-w-[1300px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            onClick={() => {
              setIsMenuOpen(false);
              resetSearchState();
            }}
          >
            <img
              src="https://res.cloudinary.com/dw4j19xmz/image/upload/v1773396970/Remove_background_project_3_new_nyocqk.png"
              alt="Cookify Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 active:scale-95"
            />
          </Link>

          {/* Desktop Navigation */}
          {isAuthenticated && (
            <div className="hidden lg:flex items-center gap-1 bg-bg-secondary/50 p-1.5 rounded-2xl border border-border-primary shadow-inner backdrop-blur-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => {
                    if (link.to === '/') resetSearchState();
                  }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${location.pathname === link.to
                    ? 'bg-accent text-white shadow-[0_0_20px_rgba(37,116,120,0.4)]'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                    }`}
                >
                  <link.icon size={18} />
                  {link.label}
                </Link>
              ))}
              <div className="w-px h-6 bg-border-primary mx-2"></div>
              <button
                onClick={() => navigate('/add-recipe')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-accent hover:bg-accent hover:text-white transition-all border border-accent/20 hover:border-accent"
              >
                <PlusSquare size={18} />
                Add Recipe
              </button>
            </div>
          )}

          {/* Desktop Auth & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-bg-secondary border border-border-primary text-text-primary hover:text-accent transition-all active:scale-95 shadow-lg"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="hidden sm:flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 bg-bg-secondary border border-border-primary text-text-secondary hover:text-text-primary hover:border-accent/40 hover:bg-accent/10 shadow-lg"
              >
                <LogOut size={16} />
                Logout
              </button>
            )}

            {/* Mobile Menu Toggle */}
            {isAuthenticated && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-2xl bg-bg-secondary border border-border-primary text-text-primary hover:bg-accent hover:text-white transition-all active:scale-90 shadow-lg"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>

        <div className={`absolute top-0 right-0 h-screen w-[80%] max-w-sm bg-bg-primary border-l border-border-primary p-8 pt-28 shadow-2xl transition-transform duration-500 transform overflow-y-auto custom-scrollbar ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-4 pb-12">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => {
                  setIsMenuOpen(false);
                  if (link.to === '/') resetSearchState();
                }}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${location.pathname === link.to
                  ? 'bg-accent/10 border border-accent/20 text-accent'
                  : 'bg-bg-secondary border border-border-primary text-text-secondary hover:text-text-primary'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl ${location.pathname === link.to ? 'bg-accent text-white' : 'bg-bg-primary border border-border-primary'}`}>
                    <link.icon size={20} />
                  </div>
                  <span className="font-bold text-lg">{link.label}</span>
                </div>
                <ChevronRight size={18} className={location.pathname === link.to ? 'opacity-100' : 'opacity-20'} />
              </Link>
            ))}

            <div className="mt-auto pt-10 border-t border-border-primary">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 font-bold text-lg transition-all active:scale-95"
              >
                <LogOut size={20} />
                Logout Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
