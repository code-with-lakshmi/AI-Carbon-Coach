import React from 'react';

const BadgeCard = ({ badge, onClick }) => {
  const { icon, title, description, unlocked } = badge;
  
  return (
    <div 
      onClick={onClick}
      className={`relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl cursor-pointer border hover:-translate-y-1
        ${unlocked 
          ? 'bg-white border-eco-200 shadow-md ring-1 ring-eco-50' 
          : 'bg-gray-50 border-gray-200 opacity-80 grayscale-[0.5] shadow-sm'
        }`}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className={`text-6xl transition-transform duration-300 ${unlocked ? 'drop-shadow-sm group-hover:scale-110' : ''}`}>
          {icon}
        </div>
        <div>
          <h3 className={`font-bold text-lg mt-2 ${unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {description}
          </p>
        </div>
        
        {/* Status Indicator */}
        {unlocked ? (
          <div className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Unlocked
          </div>
        ) : (
          <div className="absolute top-3 right-3 bg-gray-200 text-gray-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="text-[10px]">🔒</span> Locked
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeCard;
