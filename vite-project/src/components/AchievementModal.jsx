import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const AchievementModal = ({ badge, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Slight delay to trigger CSS transition smoothly after mount
    requestAnimationFrame(() => {
      setShow(true);
    });
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // Wait for fade-out animation
  };

  if (!badge) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 p-4 ${show ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className={`bg-white rounded-[2rem] shadow-2xl w-full max-w-sm p-8 relative flex flex-col items-center text-center transform transition-all duration-500 overflow-hidden
        ${show ? 'scale-100 translate-y-0 opacity-100' : 'scale-75 translate-y-12 opacity-0'}
      `}>
        {/* Background visual flair */}
        <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-yellow-300/40 to-transparent"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10 bg-white/50 rounded-full p-2 hover:bg-white"
        >
          <X size={20} />
        </button>

        {/* Bouncing Icon */}
        <div className="text-[5rem] mb-6 relative z-10 filter drop-shadow-xl animate-[bounce_2s_infinite]">
          {badge.icon}
        </div>

        <h2 className="text-2xl font-extrabold text-gray-900 mb-2 relative z-10">
          Congratulations!
        </h2>
        
        <p className="text-gray-600 mb-4 relative z-10 font-medium">
          You unlocked the <span className="text-eco-600 font-bold">{badge.title}</span> badge!
        </p>

        <p className="text-gray-500 text-sm mb-8 relative z-10">
          {badge.description}
        </p>

        <button 
          onClick={handleClose}
          className="w-full bg-eco-600 hover:bg-eco-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md relative z-10 hover:shadow-lg active:scale-95"
        >
          Awesome!
        </button>
      </div>
    </div>
  );
};

export default AchievementModal;
