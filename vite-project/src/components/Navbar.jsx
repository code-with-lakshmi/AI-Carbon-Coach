import React from 'react';
import { Leaf } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-eco-100 p-2 rounded-xl text-eco-600">
              <Leaf size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
              AI Carbon Coach
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Features
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Mission
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex text-eco-700" onClick={() => navigate('/profile')}>
              Profile
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex text-eco-700" onClick={() => navigate('/suggestions')}>
              Suggestions
            </Button>
            <Button variant="outline" onClick={() => navigate('/auth')}>
              Login
            </Button>
            <Button variant="primary" onClick={() => navigate('/auth')} className="hidden sm:inline-flex">
              Get Started
            </Button>
            <div className="ml-2 border-l border-gray-200 dark:border-gray-700 pl-4 h-8 flex items-center transition-colors">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
