import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Brain, LineChart, Target, Trophy } from 'lucide-react';

const Features = () => {
  const featureData = [
    {
      icon: <Brain className="w-6 h-6 text-eco-600" />,
      title: 'AI Suggestions',
      description: 'Get personalized, actionable recommendations powered by AI to effectively reduce your daily carbon footprint.',
      color: 'bg-eco-100',
    },
    {
      icon: <LineChart className="w-6 h-6 text-blue-600" />,
      title: 'Dashboard Insights',
      description: 'Visualize your progress with beautiful, intuitive charts and identify key areas where you can improve.',
      color: 'bg-blue-100',
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: 'Carbon Tracking',
      description: 'Log your meals, transportation, and energy usage effortlessly with our smart logging system.',
      color: 'bg-purple-100',
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-600" />,
      title: 'Gamification',
      description: 'Earn badges, compete with friends on the campus leaderboard, and make saving the planet fun.',
      color: 'bg-orange-100',
    },
  ];

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to make an impact
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Powerful tools designed specifically for students to understand and reduce their environmental footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <Card key={index} className="border-none bg-gray-50/50 hover:bg-white pt-6 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
