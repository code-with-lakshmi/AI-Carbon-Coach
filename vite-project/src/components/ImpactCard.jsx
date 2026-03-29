import React, { useState, useEffect } from 'react';

const ImpactCard = ({ carbonSaved = 8.5 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(0);

  let targetNumber = 0;
  let message = "";
  let icon = "";
  let subMessage = "";

  if (carbonSaved >= 10) {
    targetNumber = Math.floor(carbonSaved / 10);
    icon = "🌳";
    message = `You saved {num} tree${targetNumber > 1 ? 's' : ''} this week!`;
    subMessage = "Your carbon reduction is equal to planting trees. Keep breathing life into our planet!";
  } else if (carbonSaved >= 2) {
    targetNumber = Math.floor(carbonSaved / 0.2);
    icon = "🚗";
    message = `You prevented {num} km of car emissions!`;
    subMessage = "Choosing eco-friendly transport makes a huge difference.";
  } else if (carbonSaved > 0) {
    targetNumber = Math.floor(carbonSaved / 0.5);
    icon = "⚡";
    message = `You saved enough energy to power a room for {num} hours!`;
    subMessage = "Small steps lead to big energy savings over time.";
  } else {
    targetNumber = 0;
    icon = "🌱";
    message = "Every small choice counts.";
    subMessage = "Start logging your eco-activities to see your impact grow!";
  }

  // Effect for animation
  useEffect(() => {
    // Slight delay to allow DOM mapping before sliding in
    requestAnimationFrame(() => setIsVisible(true));
    
    // Number counter hook animation logic
    if (targetNumber > 0) {
      let current = 0;
      const step = Math.max(1, Math.floor(targetNumber / 20)); // Adjust speed based on sizing
      const timer = setInterval(() => {
        current += step;
        if (current >= targetNumber) {
          current = targetNumber;
          clearInterval(timer);
        }
        setDisplayNumber(current);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [targetNumber]);

  return (
    <div 
      className={`bg-gradient-to-br from-eco-50 to-eco-100/50 rounded-2xl shadow-sm border border-eco-200 p-6 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-md flex-1 relative overflow-hidden
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <div className="absolute top-0 w-full h-full bg-white opacity-20 pointer-events-none rounded-2xl mix-blend-overlay"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Your Impact 🌍</h2>
        <div className="bg-white/80 px-3 py-1.5 rounded-full backdrop-blur-md text-eco-700 font-bold border border-eco-200 shadow-sm text-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-eco-500 animate-pulse"></span>
          {carbonSaved} kg CO₂ saved
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center text-center py-8 bg-white/60 rounded-xl backdrop-blur-md border border-white/60 shadow-[inset_0_2px_15px_rgba(255,255,255,0.7)] relative z-10 transition-colors hover:bg-white/70">
        <div className="text-6xl mb-5 filter drop-shadow-md transition-transform duration-500 hover:scale-110 cursor-default">
          {icon}
        </div>
        
        <h3 className="text-2xl font-extrabold text-gray-900 leading-tight max-w-[280px] mx-auto text-balance">
          {message.replace('{num}', displayNumber)}
        </h3>
        
        <p className="text-eco-800 font-medium mt-4 text-sm px-6 max-w-sm">
          {subMessage}
        </p>
      </div>
    </div>
  );
};

export default ImpactCard;
