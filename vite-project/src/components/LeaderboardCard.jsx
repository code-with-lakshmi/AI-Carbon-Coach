import React from 'react';
import { Trophy } from 'lucide-react';
import LeaderboardItem from './LeaderboardItem';

const LeaderboardCard = () => {
  const leaderboardData = [
    { id: 1, name: "Alex", score: 92 },
    { id: 2, name: "Priya", score: 88 },
    { id: 3, name: "You", score: 78 },
    { id: 4, name: "Rahul", score: 75 },
    { id: 5, name: "Sara", score: 70 }
  ];

  // Map and sort data to ensure highest scores are on top
  const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden flex-1">
      {/* Visual background flair */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="bg-orange-100 p-2.5 rounded-xl shadow-sm">
            <Trophy className="text-orange-600" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Top Eco Students 🌍</h2>
            <p className="text-sm text-gray-500 font-medium">Weekly sustainability leaders</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          {sortedData.map((user, index) => (
            <LeaderboardItem key={user.id} user={user} rank={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
