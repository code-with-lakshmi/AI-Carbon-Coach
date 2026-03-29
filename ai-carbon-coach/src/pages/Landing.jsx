import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AuthCard from '../components/AuthCard';

const Landing = () => {
  const authRef = useRef(null);

  const scrollToAuth = () => {
    authRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-eco-200 selection:text-eco-900">
      <Navbar onLoginClick={scrollToAuth} />
      
      <main className="flex-grow">
        <Hero onGetStartedClick={scrollToAuth} />
        
        <Features />
        
        {/* Auth Section */}
        <section 
          ref={authRef} 
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 flex flex-col items-center justify-center border-t border-gray-100"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to reduce your footprint?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Join the movement today and start tracking your carbon emissions completely free.
            </p>
          </div>
          
          <AuthCard />
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-900 font-semibold">
            <span className="text-eco-600 text-xl">🌱</span> AI Carbon Coach
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Carbon Coach. Built for students targeting a sustainable future.
          </p>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-eco-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-eco-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-eco-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
