import React, { useState } from 'react';
import { Trophy, Award } from 'lucide-react';
import BadgeCard from '../components/BadgeCard';
import AchievementModal from '../components/AchievementModal';

const Profile = () => {
  const [achievements, setAchievements] = useState([
    { id: 1, icon: '🌱', title: 'First Step', description: 'Logged your first activity', unlocked: true },
    { id: 2, icon: '🔥', title: '5 Day Streak', description: '5 consecutive days usage', unlocked: false },
    { id: 3, icon: '🚲', title: 'Eco Transporter', description: 'Low transport emissions', unlocked: true },
    { id: 4, icon: '⚡', title: 'Energy Saver', description: 'Reduced electricity usage', unlocked: false },
  ]);

  const [modalBadge, setModalBadge] = useState(null);

  const handleBadgeClick = (badge) => {
    // If mocking an unlock event for demonstration
    if (!badge.unlocked) {
      setAchievements((prev) => prev.map((ach) => 
        ach.id === badge.id ? { ...ach, unlocked: true } : ach
      ));
      setModalBadge({ ...badge, unlocked: true });
    } else {
      // If already unlocked, simply review the badge in the modal
      setModalBadge(badge);
    }
  };

  const completedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300 pb-16 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Optional Simple Header */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300 tracking-tight flex items-center gap-3">
              <Award className="text-eco-600" size={32} />
              Your Profile
            </h1>
            <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300 font-medium mt-1">Check out your progress and achievements!</p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 flex items-center gap-2">
              <Trophy size={24} className="text-yellow-500" />
              Your Achievements 🏆
            </h2>
            <span className="text-sm font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
              {completedCount} / {achievements.length} Unlocked
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {achievements.map((badge) => (
              <BadgeCard 
                key={badge.id} 
                badge={badge} 
                onClick={() => handleBadgeClick(badge)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Unlock Modal Overlay */}
      {modalBadge && (
        <AchievementModal 
          badge={modalBadge} 
          onClose={() => setModalBadge(null)} 
        />
      )}
    </div>
  );
};

export default Profile;
