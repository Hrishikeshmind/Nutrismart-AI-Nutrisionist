import create from 'zustand';
import { persist } from 'zustand/middleware';
import { MealPlan, UserPreferences } from '../types';

interface MealStore {
  mealPlans: MealPlan[];
  preferences: UserPreferences;
  selectedDate: Date;
  setMealPlans: (plans: MealPlan[]) => void;
  addMealPlan: (plan: MealPlan) => void;
  setPreferences: (prefs: UserPreferences) => void;
  setSelectedDate: (date: Date) => void;
}

export const useMealStore = create<MealStore>()(
  persist(
    (set) => ({
      mealPlans: [],
      preferences: {
        dietType: 'balanced',
        calories: '2000',
        allergies: [],
        excludedIngredients: [],
        mealCount: 3,
        healthGoals: [],
        activityLevel: 'moderate',
      },
      selectedDate: new Date(),
      setMealPlans: (plans) => set({ mealPlans: plans }),
      addMealPlan: (plan) =>
        set((state) => ({ mealPlans: [...state.mealPlans, plan] })),
      setPreferences: (prefs) => set({ preferences: prefs }),
      setSelectedDate: (date) => set({ selectedDate: date }),
    }),
    {
      name: 'nutrismart-storage',
    }
  )
);