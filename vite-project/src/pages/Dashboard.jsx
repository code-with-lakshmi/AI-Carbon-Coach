import React, { useState, useEffect, useRef } from 'react';
import { Target, Lightbulb, Plus, Flame, TrendingDown, Leaf, Car, Zap, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import Chart from '../components/Chart';
import Button from '../components/Button';
import DailyCheckinModal from '../components/DailyCheckinModal';
import LeaderboardCard from '../components/LeaderboardCard';
import ImpactCard from '../components/ImpactCard';
import GoalSelector from '../components/GoalSelector';
import GoalDisplayCard from '../components/GoalDisplayCard';
import StreakIndicator from '../components/StreakIndicator';
import StreakPopup from '../components/StreakPopup';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const targetScore = 78;
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    // Page load fade-in
    setFadeIn(true);

    // Score counter animation
    let current = 0;
    const step = Math.ceil(targetScore / 20); // Reach target comfortably
    const timer = setInterval(() => {
      current += step;
      if (current >= targetScore) {
        current = targetScore;
        clearInterval(timer);
      }
      setAnimatedScore(current);
    }, 30);
    
    return () => clearInterval(timer);
  }, [targetScore]);
  
  const [streak, setStreak] = useState(5);
  const [showStreakPopup, setShowStreakPopup] = useState(false);
  const prevStreak = useRef(streak);

  useEffect(() => {
    if (streak > prevStreak.current) {
      setShowStreakPopup(true);
    }
    prevStreak.current = streak;
  }, [streak]);
  
  const [goalLevel, setGoalLevel] = useState(() => {
    const saved = localStorage.getItem('ecoGoalLevel');
    return saved || 'Intermediate';
  });

  useEffect(() => {
    localStorage.setItem('ecoGoalLevel', goalLevel);
  }, [goalLevel]);

  const weeklyData = [
    { label: 'Mon', value: 3.2 },
    { label: 'Tue', value: 4.1 },
    { label: 'Wed', value: 2.8 },
    { label: 'Thu', value: 5.5 },
    { label: 'Fri', value: 1.9 },
    { label: 'Sat', value: 3.5 },
    { label: 'Sun', value: 2.0 }, // Today
  ];

  return (
    <div className={`min-h-screen bg-gray-50/50 dark:bg-gray-900 pb-16 font-sans transition-all duration-700 ease-out transform ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header & Quick Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300 tracking-tight">Today</h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300 mt-1">Sunday, Oct 15</p>
            </div>
            <div className="mt-1 sm:mt-0">
              <StreakIndicator streak={streak} onIncrease={() => setStreak(s => s + 1)} />
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button variant="secondary" className="flex-1 sm:flex-none" onClick={() => navigate('/suggestions')}>
              <Lightbulb size={18} className="mr-2" /> View Suggestions
            </Button>
            <Button variant="primary" className="flex-1 sm:flex-none">
              <Plus size={18} className="mr-2" /> Add Activity
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Left Column (Carbon Score & Daily Goal) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Smart Goal System */}
            <div className="flex flex-col gap-6">
              <GoalSelector goalLevel={goalLevel} setGoalLevel={setGoalLevel} />
              <GoalDisplayCard goalLevel={goalLevel} />
            </div>

            {/* Carbon Score & Streak Banner */}
            <Card className="bg-gradient-to-br from-eco-600 to-eco-800 text-white border-none shadow-[0_8px_30px_rgba(22,163,74,0.25)] overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl mix-blend-overlay"></div>
              <CardContent className="p-8 pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf size={20} className="text-eco-200" />
                    <span className="text-eco-100 font-medium">Your sustainability score today</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-extrabold tracking-tight dark:text-white transition-colors duration-300">{animatedScore}</span>
                    <span className="text-3xl text-eco-300 font-semibold">/100</span>
                    <span className="text-4xl ml-2 hover:animate-bounce cursor-default transition-transform filter drop-shadow hover:scale-110">🌱</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Flame size={24} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">5 Day Eco Streak</p>
                    <p className="text-eco-100 text-sm font-medium">You're on fire! Keep it up.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Goal Tracker */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Target size={20} className="text-eco-600" /> Daily Target
                  </CardTitle>
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Goal: &lt; 10 kg CO₂
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-col gap-2">
                  <ProgressBar 
                    progress={85} 
                    colorClass="bg-eco-500" 
                    heightClass="h-5"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">8.5 <span className="text-lg text-gray-500 dark:text-gray-400 font-medium">kg today</span></span>
                    <span className="text-sm font-semibold text-eco-600 flex items-center">
                      <TrendingDown size={16} className="mr-1" /> 1.5 kg remaining
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Visualization */}
            <ImpactCard carbonSaved={8.5} />

            {/* Weekly Graph */}
            <Card>
              <CardHeader className="pb-0">
                <CardTitle>Weekly Overview</CardTitle>
                <CardDescription>Your emissions over the last 7 days.</CardDescription>
              </CardHeader>
              <CardContent className="pt-2 pb-6">
                <Chart data={weeklyData} />
              </CardContent>
            </Card>

          </div>

          {/* Right Column (Activity Breakdown & AI Coach Tip) */}
          <div className="flex flex-col gap-6">

            {/* AI Coach Tip */}
            <Card className="bg-eco-50 border-eco-200 shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-eco-200/50">
                <Lightbulb size={100} />
              </div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-eco-800 text-lg flex items-center gap-2">
                  <Lightbulb size={20} className="text-eco-600" /> AI Coach Tip
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-eco-900 font-medium leading-relaxed">
                  "Taking public transport twice a week can reduce your overall transport emissions by 15%. Consider taking the bus tomorrow!"
                </p>
              </CardContent>
            </Card>

            {/* Activity Breakdown */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Activity Breakdown</CardTitle>
                <CardDescription>Where your emissions came from today.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                
                {/* Transport */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
                    <span className="flex items-center gap-2"><Car size={16} className="text-blue-500"/> Transport 🚗</span>
                    <span className="text-gray-900">5.2 kg</span>
                  </div>
                  <ProgressBar progress={61} heightClass="h-2" colorClass="bg-blue-500" showLabelInline={false} />
                </div>

                {/* Electricity */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
                    <span className="flex items-center gap-2"><Zap size={16} className="text-yellow-500"/> Electricity 💡</span>
                    <span className="text-gray-900">4.3 kg</span>
                  </div>
                  <ProgressBar progress={50} heightClass="h-2" colorClass="bg-yellow-500" showLabelInline={false} />
                </div>

                {/* Plastic */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
                    <span className="flex items-center gap-2"><Coffee size={16} className="text-orange-500"/> Plastic 🧴</span>
                    <span className="text-gray-900">3.0 kg</span>
                  </div>
                  <ProgressBar progress={35} heightClass="h-2" colorClass="bg-orange-500" showLabelInline={false} />
                </div>

              </CardContent>
            </Card>

            {/* Leaderboard System */}
            <LeaderboardCard />
          </div>

        </div>
      </div>

      {showModal && <DailyCheckinModal onClose={() => setShowModal(false)} />}
      {showStreakPopup && <StreakPopup streak={streak} onClose={() => setShowStreakPopup(false)} />}
    </div>
  );
};

export default Dashboard;
