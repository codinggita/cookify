import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, BookOpen, Heart, Clock } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('currentUser') || 'Chef';

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="pt-24 min-h-screen flex flex-col max-w-[1200px] mx-auto px-6">
      <div className="mb-12 py-12 px-8 bg-gradient-to-r from-[#171717]/80 to-[#0a0a0a]/0 border-b border-white/5 rounded-3xl backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-2">Welcome to Cookify, {username}!</h1>
        <p className="text-text-secondary text-lg">Discover, save, and share your favorite recipes all in one place.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="p-6 flex items-center gap-6 bg-[#171717]/60 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:border-white/15">
          <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
            <BookOpen size={28} />
          </div>
          <div>
            <h3 className="text-sm text-text-secondary mb-1">Saved Recipes</h3>
            <p className="text-2xl font-bold">124</p>
          </div>
        </div>

        <div className="p-6 flex items-center gap-6 bg-[#171717]/60 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:border-white/15">
          <div className="w-14 h-14 rounded-xl bg-[#ef4444]/10 text-accent flex items-center justify-center">
            <Heart size={28} color="#ef4444" />
          </div>
          <div>
            <h3 className="text-sm text-text-secondary mb-1">Favorites</h3>
            <p className="text-2xl font-bold">42</p>
          </div>
        </div>

        <div className="p-6 flex items-center gap-6 bg-[#171717]/60 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:border-white/15">
          <div className="w-14 h-14 rounded-xl bg-[#10b981]/10 text-accent flex items-center justify-center">
            <ChefHat size={28} color="#10b981" />
          </div>
          <div>
            <h3 className="text-sm text-text-secondary mb-1">My Creations</h3>
            <p className="text-2xl font-bold">18</p>
          </div>
        </div>

        <div className="p-6 flex items-center gap-6 bg-[#171717]/60 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:border-white/15">
          <div className="w-14 h-14 rounded-xl bg-[#3b82f6]/10 text-accent flex items-center justify-center">
            <Clock size={28} color="#3b82f6" />
          </div>
          <div>
            <h3 className="text-sm text-text-secondary mb-1">Cooking Time</h3>
            <p className="text-2xl font-bold">56h</p>
          </div>
        </div>
      </div>
      
      <div className="py-12 px-8 text-center bg-[#171717]/60 backdrop-blur-md border border-white/10 rounded-3xl mb-8">
        <h2 className="mb-4 text-3xl font-semibold">Ready to get cooking?</h2>
        <p className="text-text-secondary mb-8 text-lg">
          Your dashboard is currently empty. Start exploring recipes to fill it up!
        </p>
        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(37,116,120,0.3)]">
          Explore Recipes
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
