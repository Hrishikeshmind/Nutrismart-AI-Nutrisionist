import React from 'react';
import { Activity, Target, Dumbbell } from 'lucide-react';

interface Props {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  workoutType?: string;
  timing?: {
    preworkout?: string;
    postworkout?: string;
  };
}

export default function NutritionChart({ 
  calories, 
  protein, 
  carbs, 
  fat, 
  fiber,
  workoutType,
  timing 
}: Props) {
  const total = protein + carbs + fat;
  const proteinPercentage = (protein / total) * 100;
  const carbsPercentage = (carbs / total) * 100;
  const fatPercentage = (fat / total) * 100;

  const proteinPerKg = protein / 75; // Assuming 75kg average weight
  const isHighProtein = proteinPerKg >= 2.0;

  return (
    <div className="mt-6 p-6 bg-gray-50 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold">Nutritional Information</h4>
        {workoutType && (
          <div className="flex items-center text-green-600">
            <Dumbbell className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">{workoutType}</span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <Activity className="h-5 w-5 text-green-600 mr-2" />
            <p className="text-sm text-gray-600">Calories</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{calories}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <Target className="h-5 w-5 text-green-600 mr-2" />
            <p className="text-sm text-gray-600">Protein/kg</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{proteinPerKg.toFixed(1)}g</p>
          {isHighProtein && (
            <span className="text-xs text-green-600">Optimal for muscle gain</span>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <Dumbbell className="h-5 w-5 text-green-600 mr-2" />
            <p className="text-sm text-gray-600">Fiber</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{fiber}g</p>
        </div>

        {timing?.preworkout && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Pre-workout</p>
            <p className="text-lg font-semibold text-gray-900">{timing.preworkout}</p>
            {timing.postworkout && (
              <>
                <p className="text-sm text-gray-600 mt-2 mb-1">Post-workout</p>
                <p className="text-lg font-semibold text-gray-900">{timing.postworkout}</p>
              </>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="flex items-center">
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
              Protein ({protein}g)
            </span>
            <span>{Math.round(proteinPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${proteinPercentage}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="flex items-center">
              <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
              Carbs ({carbs}g)
            </span>
            <span>{Math.round(carbsPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${carbsPercentage}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              Fat ({fat}g)
            </span>
            <span>{Math.round(fatPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{ width: `${fatPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}