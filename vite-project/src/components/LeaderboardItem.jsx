import React from 'react';

const getMedalColor = (rank) => {
  switch (rank) {
    case 1: 
      return 'text-yellow-600 bg-yellow-100 ring-2 ring-yellow-400'; // Gold
    case 2: 
      return 'text-gray-500 bg-gray-100 ring-2 ring-gray-300'; // Silver
    case 3: 
      return 'text-amber-700 bg-amber-100 ring-2 ring-amber-500'; // Bronze
    default: 
      return 'text-gray-500 bg-gray-50'; // Default
  }
};

const LeaderboardItem = ({ user, rank }) => {
  const isCurrentUser = user.name === "You";
  const medalClass = getMedalColor(rank);
  const isTop3 = rank <= 3;

  return (
    <div 
      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 cursor-default group hover:shadow-md hover:-translate-y-0.5
        ${isCurrentUser 
          ? 'bg-eco-50 border border-eco-200 ring-1 ring-eco-100/50 shadow-sm relative' 
          : 'bg-white border border-transparent hover:border-gray-100'
        }
        ${isTop3 ? 'py-4' : 'py-3'}
      `}
    >
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-transform duration-300 ${medalClass} ${isTop3 ? 'group-hover:scale-110' : ''}`}>
          {rank}
        </div>
        
        {/* Avatar & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-eco-400 to-eco-600 flex items-center justify-center text-white font-bold shadow-sm">
            {user.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className={`font-bold transition-colors ${isCurrentUser ? 'text-eco-900' : 'text-gray-800'}`}>
              {user.name}
            </span>
            {isCurrentUser && (
              <span className="text-[10px] uppercase font-bold text-eco-600 tracking-wider">
                You 👀
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Score */}
      <div className="text-right">
        <span className={`font-extrabold text-lg ${isCurrentUser ? 'text-eco-700' : 'text-gray-900'} ${isTop3 ? 'text-xl' : ''}`}>
          {user.score}
        </span>
        <span className="text-sm font-medium text-gray-500 ml-1">pts</span>
      </div>
    </div>
  );
};

export default LeaderboardItem;
