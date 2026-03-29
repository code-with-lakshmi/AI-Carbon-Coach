import React from 'react';

const GoalSelector = ({ goalLevel, setGoalLevel }) => {
  const levels = [
    { id: 'Beginner', icon: '🌱', limit: 10,  label: 'Beginner' },
    { id: 'Intermediate', icon: '🌿', limit: 8, label: 'Intermediate' },
    { id: 'Advanced', icon: '🌳', limit: 5, label: 'Advanced' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-5 tracking-tight">Choose Your Eco Level 🌱</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {levels.map((level) => {
          const isSelected = goalLevel === level.id;
          return (
            <button
              key={level.id}
              onClick={() => setGoalLevel(level.id)}
              className={`flex flex-col items-center justify-center py-5 px-3 rounded-2xl transition-all duration-300 border-2 outline-none focus:ring-4 focus:ring-eco-100
                ${isSelected 
                  ? 'bg-eco-50 border-eco-500 shadow-sm transform scale-[1.02]' 
                  : 'bg-white border-gray-100 hover:border-eco-300 hover:bg-gray-50 hover:shadow-sm hover:-translate-y-1'
                }
              `}
            >
              <span className={`text-4xl mb-3 filter drop-shadow-sm transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
                {level.icon}
              </span>
              <span className={`font-bold text-lg ${isSelected ? 'text-eco-800' : 'text-gray-700'}`}>
                {level.label}
              </span>
              <span className={`text-sm mt-1 font-semibold ${isSelected ? 'text-eco-600' : 'text-gray-400'}`}>
                &lt; {level.limit} kg / day
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GoalSelector;
