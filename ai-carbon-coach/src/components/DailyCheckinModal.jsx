import React from 'react';
import { X } from 'lucide-react';

const DailyCheckinModal = ({ onClose }) => {
  const options = [
    { id: 1, icon: '🚶', text: 'Walked more' },
    { id: 2, icon: '🚌', text: 'Used public transport' },
    { id: 3, icon: '⚡', text: 'Used electricity heavily' },
    { id: 4, icon: '🧴', text: 'Used plastic' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center mt-2">
          How was your day today?
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={onClose}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-green-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full text-left"
            >
              <span className="text-2xl">{option.icon}</span>
              <span className="font-medium text-gray-800">{option.text}</span>
            </button>
          ))}
        </div>

        {/* Skip Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 font-medium transition-colors text-sm hover:underline underline-offset-2 p-2"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyCheckinModal;
