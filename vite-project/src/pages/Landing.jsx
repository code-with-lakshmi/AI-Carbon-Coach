import React from 'react';
import { ArrowRight, Sparkles, Brain, LineChart, Target, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/Card';

const Landing = () => {
  const navigate = useNavigate();

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
    <div className="flex flex-col min-h-full font-sans selection:bg-eco-200 selection:text-eco-900">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-eco-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute top-12 -right-24 w-96 h-96 bg-eco-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-green-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-100 text-eco-700 font-medium text-sm mb-8">
              <Sparkles size={16} />
              <span>The #1 Smart Carbon Footprint Tracker for Students</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Track Your Carbon. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-500 to-eco-700">
                Change Your Future.
              </span>
            </h1>
            
            <p className="mt-4 text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of students making a real impact. Use AI-driven insights to seamlessly track, reduce, and balance your daily carbon footprint.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto" onClick={() => navigate('/auth')}>
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-4 w-full sm:w-auto">
                View Live Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-900 font-semibold">
            <span className="text-eco-600 text-xl">🌱</span> AI Carbon Coach
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Carbon Coach. Built for students targeting a sustainable future.
          </p>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-eco-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-eco-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-eco-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
