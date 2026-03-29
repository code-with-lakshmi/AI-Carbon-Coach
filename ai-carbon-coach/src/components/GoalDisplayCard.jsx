import React, { useState, useEffect } from 'react';
import { Target } from 'lucide-react';

const GoalDisplayCard = ({ goalLevel }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger re-animation upon selecting new levels
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [goalLevel]);

  const limits = {
    Beginner: 10,
    Intermediate: 8,
    Advanced: 5
  };

  const limit = limits[goalLevel] || 8;

  return (
    <div 
      className={`bg-gradient-to-r from-eco-600 to-eco-500 rounded-2xl shadow-md p-6 text-white transition-all duration-500 transform overflow-hidden relative
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      {/* Background soft flair */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-2 relative z-10">
        <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]">
          <Target size={24} className="text-white" />
        </div>
        <h2 className="text-xl font-bold tracking-tight">Your Daily Goal 🎯</h2>
      </div>
      
      <div className="ml-[3.25rem] relative z-10">
        <p className="text-white/95 text-xl font-medium">
          Stay below <span className="font-extrabold text-white text-3xl">{limit} kg CO₂</span> per day
        </p>
        <p className="text-eco-100 text-sm mt-1.5 font-medium">
          {goalLevel} mode active. You're doing great!
        </p>
      </div>
    </div>
  );
};

export default GoalDisplayCard;
