import React from 'react';

const StreakIndicator = ({ streak, onIncrease }) => {
  return (
    <button 
      onClick={onIncrease}
      className="flex items-center gap-2.5 bg-gradient-to-r from-eco-500 to-eco-600 px-5 py-2.5 rounded-full text-white font-bold shadow-[0_4px_15px_rgba(22,163,74,0.35)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.5)] hover:scale-105 transition-all duration-300 border border-eco-400/30"
      title="Click to log an activity and increase your streak!"
    >
      <span className="text-xl animate-pulse filter drop-shadow-md">🔥</span>
      <span>{streak} Day Streak</span>
    </button>
  );
};

export default StreakIndicator;
