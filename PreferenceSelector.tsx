import React from 'react';
import { X } from 'lucide-react';
import { UserPreferences, FitnessProfile } from '../types';

interface Props {
  preferences: UserPreferences;
  setPreferences: React.Dispatch<React.SetStateAction<UserPreferences>>;
}

export default function PreferenceSelector({ preferences, setPreferences }: Props) {
  const handleAllergy = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      setPreferences(prev => ({
        ...prev,
        allergies: [...prev.allergies, e.currentTarget.value]
      }));
      e.currentTarget.value = '';
    }
  };

  const handleExcluded = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      setPreferences(prev => ({
        ...prev,
        excludedIngredients: [...prev.excludedIngredients, e.currentTarget.value]
      }));
      e.currentTarget.value = '';
    }
  };

  const removeAllergy = (index: number) => {
    setPreferences(prev => ({
      ...prev,
      allergies: prev.allergies.filter((_, i) => i !== index)
    }));
  };

  const removeExcluded = (index: number) => {
    setPreferences(prev => ({
      ...prev,
      excludedIngredients: prev.excludedIngredients.filter((_, i) => i !== index)
    }));
  };

  const updateFitnessProfile = (key: keyof FitnessProfile, value: any) => {
    setPreferences(prev => ({
      ...prev,
      fitnessProfile: {
        ...prev.fitnessProfile,
        [key]: value
      } as FitnessProfile
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Diet Type
          </label>
          <select
            value={preferences.dietType}
            onChange={(e) => setPreferences(prev => ({ ...prev, dietType: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="balanced">Balanced</option>
            <option value="low-carb">Low Carb</option>
            <option value="high-protein">High Protein</option>
            <option value="keto">Keto</option>
            <option value="bodybuilding">Bodybuilding</option>
            <option value="performance">Athletic Performance</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="paleo">Paleo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fitness Goal
          </label>
          <select
            value={preferences.fitnessProfile?.fitnessGoal || 'maintenance'}
            onChange={(e) => updateFitnessProfile('fitnessGoal', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="muscle_gain">Muscle Gain</option>
            <option value="fat_loss">Fat Loss</option>
            <option value="maintenance">Maintenance</option>
            <option value="performance">Athletic Performance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workout Type
          </label>
          <select
            value={preferences.fitnessProfile?.workoutType || 'none'}
            onChange={(e) => updateFitnessProfile('workoutType', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="strength">Strength Training</option>
            <option value="cardio">Cardio</option>
            <option value="hybrid">Hybrid Training</option>
            <option value="none">No Workout</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workout Frequency (days/week)
          </label>
          <select
            value={preferences.fitnessProfile?.workoutFrequency || 3}
            onChange={(e) => updateFitnessProfile('workoutFrequency', parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {[1, 2, 3, 4, 5, 6, 7].map(num => (
              <option key={num} value={num}>{num} days</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workout Time
          </label>
          <select
            value={preferences.fitnessProfile?.workoutTiming || 'morning'}
            onChange={(e) => updateFitnessProfile('workoutTiming', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>
          <select
            value={preferences.fitnessProfile?.experienceLevel || 'beginner'}
            onChange={(e) => updateFitnessProfile('experienceLevel', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Weight (kg)
          </label>
          <input
            type="number"
            value={preferences.fitnessProfile?.currentWeight || ''}
            onChange={(e) => updateFitnessProfile('currentWeight', parseFloat(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            min="30"
            max="200"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Weight (kg)
          </label>
          <input
            type="number"
            value={preferences.fitnessProfile?.targetWeight || ''}
            onChange={(e) => updateFitnessProfile('targetWeight', parseFloat(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            min="30"
            max="200"
            step="0.1"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Daily Calories
        </label>
        <input
          type="number"
          value={preferences.calories}
          onChange={(e) => setPreferences(prev => ({ ...prev, calories: e.target.value }))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          min="1200"
          max="6000"
          step="50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Allergies (Press Enter to add)
        </label>
        <input
          type="text"
          onKeyDown={handleAllergy}
          placeholder="e.g., peanuts"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {preferences.allergies.map((allergy, index) => (
            <span
              key={index}
              className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {allergy}
              <button
                onClick={() => removeAllergy(index)}
                className="ml-2 hover:text-red-900"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Excluded Ingredients (Press Enter to add)
        </label>
        <input
          type="text"
          onKeyDown={handleExcluded}
          placeholder="e.g., mushrooms"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {preferences.excludedIngredients.map((ingredient, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {ingredient}
              <button
                onClick={() => removeExcluded(index)}
                className="ml-2 hover:text-gray-900"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Meals
        </label>
        <select
          value={preferences.mealCount}
          onChange={(e) => setPreferences(prev => ({ ...prev, mealCount: parseInt(e.target.value) }))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value={3}>3 meals</option>
          <option value={4}>3 meals + snack</option>
          <option value={5}>3 meals + 2 snacks</option>
          <option value={6}>3 meals + pre/post workout meals</option>
          <option value={7}>Full athlete meal plan (6-7 meals)</option>
        </select>
      </div>
    </div>
  );
}