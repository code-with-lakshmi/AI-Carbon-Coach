import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const StreakPopup = ({ streak, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Start animation natively after DOM mapping
    requestAnimationFrame(() => setShow(true));

    // Auto close after 3.5 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // Wait for transition fade-out mapping
  };

  return (
    <div className={`fixed inset-0 z-[80] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 p-4 ${show ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className={`bg-gradient-to-br from-white to-orange-50 rounded-[2rem] shadow-2xl w-full max-w-sm p-8 relative flex flex-col items-center text-center transform transition-all duration-500 overflow-hidden border border-orange-100/50
        ${show ? 'scale-100 translate-y-0 opacity-100' : 'scale-50 translate-y-12 opacity-0'}
      `}>
        {/* Ambient background glow */}
        <div className="absolute top-12 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition-colors z-10 bg-white/60 rounded-full p-1.5 hover:bg-white"
        >
          <X size={22} />
        </button>

        {/* Bouncing Fire Emoji */}
        <div className="text-[5.5rem] mb-3 relative z-10 filter drop-shadow-xl animate-[bounce_1.5s_infinite]">
          🔥
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 relative z-10 tracking-tight">
          Unstoppable!
        </h2>
        
        <p className="text-orange-600 font-bold text-xl mb-3 relative z-10">
          You're on a {streak}-day streak!
        </p>

        <p className="text-gray-600 mb-8 relative z-10 font-medium leading-relaxed">
          Amazing consistency! Keep your streak alive by logging tomorrow.
        </p>

        <button 
          onClick={handleClose}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md relative z-10 hover:shadow-lg active:scale-95"
        >
          Keep going!
        </button>
      </div>
    </div>
  );
};

export default StreakPopup;
