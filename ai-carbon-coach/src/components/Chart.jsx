import React from 'react';

const Chart = ({ data }) => {
  // Simple CSS-based bar chart using the provided data points
  // Expects data = [{ label: 'Mon', value: 12 }, { label: 'Tue', value: 8 }, ...]
  
  const maxValue = Math.max(...data.map((d) => d.value), 10); // Ensure a minimum scale height
  
  return (
    <div className="w-full h-48 flex items-end justify-between gap-1 sm:gap-3 lg:gap-6 pt-4">
      {data.map((item, index) => {
        const heightPercentage = (item.value / maxValue) * 100;
        const isToday = index === data.length - 1; // Highlight the last day
        
        return (
          <div key={index} className="flex flex-col items-center flex-1 h-full justify-end group">
            <div 
              className={`w-full max-w-[40px] rounded-t-lg relative transition-all duration-300 ${isToday ? 'bg-eco-500' : 'bg-eco-100 group-hover:bg-eco-300'}`}
              style={{ height: `${heightPercentage}%`, minHeight: '4px' }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs py-1 px-2 rounded-lg font-medium shadow-md whitespace-nowrap z-10 pointer-events-none">
                {item.value} kg
              </div>
            </div>
            <span className={`text-xs mt-3 font-medium ${isToday ? 'text-eco-600 font-bold' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
