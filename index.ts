export interface MealPlan {
  id: string;
  date: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string[];
  preworkoutMeal?: string;
  postworkoutMeal?: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  nutrients: {
    vitamins: Record<string, number>;
    minerals: Record<string, number>;
  };
  recipes: {
    breakfast: Recipe;
    lunch: Recipe;
    dinner: Recipe;
    snacks: Recipe[];
    preworkout?: Recipe;
    postworkout?: Recipe;
  };
  timing: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snacks: string[];
    preworkout?: string;
    postworkout?: string;
  };
}

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  nutritionPerServing: NutritionInfo;
  macroRatio: MacroRatio;
}

export interface MacroRatio {
  protein: number;
  carbs: number;
  fat: number;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  vitamins: Record<string, number>;
  minerals: Record<string, number>;
}

export interface UserPreferences {
  dietType: string;
  calories: string;
  allergies: string[];
  excludedIngredients: string[];
  mealCount: number;
  healthGoals: string[];
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  fitnessProfile?: FitnessProfile;
}

export interface FitnessProfile {
  workoutType: 'strength' | 'cardio' | 'hybrid' | 'none';
  workoutFrequency: number;
  workoutTiming: string;
  fitnessGoal: 'muscle_gain' | 'fat_loss' | 'maintenance' | 'performance';
  currentWeight: number;
  targetWeight: number;
  height: number;
  age: number;
  gender: 'male' | 'female' | 'other';
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
}