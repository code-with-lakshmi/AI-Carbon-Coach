import React from 'react';
import { Leaf } from 'lucide-react';
import Button from './ui/Button';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-eco-100 p-2 rounded-xl text-eco-600">
              <Leaf size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              AI Carbon Coach
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Features
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Mission
            </Button>
            <Button variant="outline" onClick={onLoginClick}>
              Login
            </Button>
            <Button variant="primary" onClick={onLoginClick} className="hidden sm:inline-flex">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
