import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const Hero = ({ onGetStartedClick }) => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-eco-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-12 -right-24 w-96 h-96 bg-eco-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-green-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-100 text-eco-700 font-medium text-sm mb-8">
          <Sparkles size={16} />
          <span>The #1 Smart Carbon Footprint Tracker for Students</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Track Your Carbon. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-500 to-eco-700">
            Change Your Future.
          </span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of students making a real impact. Use AI-driven insights to seamlessly track, reduce, and balance your daily carbon footprint.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto" onClick={onGetStartedClick}>
            Get Started <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button variant="secondary" className="text-lg px-8 py-4 w-full sm:w-auto">
            View Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
