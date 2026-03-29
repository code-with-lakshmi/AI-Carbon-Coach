import React, { useState } from 'react';
import { Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import Button from '../components/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../components/Card';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSuggestions = async () => {
    setLoading(true);
    setError(null);
    setSuggestions(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuggestions("💡 Use public transport twice a week to reduce your carbon footprint.");
    } catch (err) {
      setError("Failed to fetch suggestion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-3xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="text-center flex flex-col items-center">
          <div className="bg-eco-100 dark:bg-eco-900/30 p-4 rounded-full inline-block mb-4">
            <Sparkles className="text-eco-600 dark:text-eco-400" size={40} />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            AI Carbon Coach
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Get personalized eco-friendly tips based on your daily activities and lifestyle choices.
          </p>
        </div>

        <Card className="w-full outline outline-1 outline-gray-200 dark:outline-gray-700">
          <CardHeader className="text-center pb-2">
            <CardTitle>Your Activity Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">🚲 Transport: Bike</span>
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">⚡ Electricity: High</span>
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">🧴 Plastic: Medium</span>
            </div>

            <Button 
              onClick={fetchSuggestions} 
              disabled={loading}
              className="w-full sm:w-auto min-w-[240px] text-lg font-bold py-4 shadow-lg flex items-center justify-center transition-all hover:scale-[1.02]"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={22} />
                  Loading...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 animate-pulse" size={22} />
                  Get AI Suggestion
                </>
              )}
            </Button>
            
          </CardContent>
        </Card>

        {/* Results Section */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-2xl p-5 flex items-start gap-3 text-red-600 dark:text-red-400 animate-in fade-in duration-300">
            <AlertCircle className="mt-0.5 shrink-0" size={22} />
            <p className="font-semibold text-base">{error}</p>
          </div>
        )}

        {suggestions && !error && (
          <Card className="w-full border border-eco-200 dark:border-eco-800/60 shadow-xl dark:shadow-eco-900/10 animate-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="bg-eco-50/50 dark:bg-eco-900/10 border-b border-eco-100 dark:border-eco-800/30 rounded-t-2xl">
              <CardTitle className="flex items-center gap-2 text-eco-800 dark:text-eco-400">
                <Sparkles size={24} />
                AI Suggestion
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed text-lg">
                {suggestions}
              </div>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
};

export default Suggestions;
