import React from 'react';

const ProgressBar = ({ 
  progress, 
  label, 
  message, 
  colorClass = 'bg-eco-500', 
  heightClass = 'h-4',
  trackClass = 'bg-gray-100',
  showLabelInline = false
}) => {
  const percentage = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full text-left">
      {!showLabelInline && (label || message) && (
        <div className="flex justify-between items-end mb-2">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {message && <span className="text-sm font-semibold text-gray-900">{message}</span>}
        </div>
      )}
      
      <div className="flex items-center gap-3 w-full">
        {showLabelInline && label && (
          <span className="text-sm font-medium text-gray-700 w-24 shrink-0">{label}</span>
        )}
        <div className={`flex-1 ${heightClass} w-full ${trackClass} rounded-full overflow-hidden flex`}>
          <div
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            className={`h-full transition-all duration-700 ease-out rounded-full ${colorClass}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        {showLabelInline && message && (
          <span className="text-sm font-semibold text-gray-900 shrink-0 min-w-[3rem] text-right">{message}</span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
