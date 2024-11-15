import React, { useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import NutritionChart from './NutritionChart';
import PreferenceSelector from './PreferenceSelector';

interface MealPlan {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

interface Preferences {
  dietType: string;
  calories: string;
  allergies: string[];
  excludedIngredients: string[];
  mealCount: number;
}

export default function MealGenerator() {
  const [preferences, setPreferences] = useState<Preferences>({
    dietType: 'balanced',
    calories: '2000',
    allergies: [],
    excludedIngredients: [],
    mealCount: 3,
  });
  const [loading, setLoading] = useState(false);
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null);
  const [error, setError] = useState('');

  const generateMealPlan = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate-meal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferences),
      });

      if (!response.ok) {
        throw new Error('Failed to generate meal plan');
      }

      const data = await response.json();
      setMealPlan(data);
    } catch (err) {
      setError('Failed to generate meal plan. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4" id="meal-generator">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-green-50">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Customize Your Plan
              </h2>
              
              <PreferenceSelector
                preferences={preferences}
                setPreferences={setPreferences}
              />

              <button
                onClick={generateMealPlan}
                disabled={loading}
                className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center mt-8"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Generating your perfect meal plan...
                  </>
                ) : (
                  'Generate Meal Plan'
                )}
              </button>

              {error && (
                <div className="mt-4 bg-red-50 text-red-600 p-4 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  {error}
                </div>
              )}
            </div>

            <div className="p-8 bg-white">
              {mealPlan ? (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Your Personalized Meal Plan
                  </h3>
                  
                  <div className="grid gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-600 mb-2">Breakfast</h4>
                      <p className="text-gray-700">{mealPlan.breakfast}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-600 mb-2">Lunch</h4>
                      <p className="text-gray-700">{mealPlan.lunch}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-600 mb-2">Dinner</h4>
                      <p className="text-gray-700">{mealPlan.dinner}</p>
                    </div>

                    {mealPlan.snacks && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-green-600 mb-2">Snacks</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {mealPlan.snacks.map((snack, index) => (
                            <li key={index}>{snack}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <NutritionChart
                    calories={mealPlan.calories}
                    protein={mealPlan.protein}
                    carbs={mealPlan.carbs}
                    fat={mealPlan.fat}
                    fiber={mealPlan.fiber}
                  />
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  <p className="text-center">
                    Your personalized meal plan will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}