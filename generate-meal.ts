import OpenAI from 'openai';
import { MealPlan, UserPreferences } from '../types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function generateMealPlan(preferences: UserPreferences): Promise<MealPlan> {
  try {
    const prompt = `Generate a detailed daily meal plan with the following requirements:
      - Diet type: ${preferences.dietType}
      - Target calories: ${preferences.calories}
      - Allergies to avoid: ${preferences.allergies.join(', ')}
      - Excluded ingredients: ${preferences.excludedIngredients.join(', ')}
      - Number of meals: ${preferences.mealCount}
      - Health goals: ${preferences.healthGoals.join(', ')}
      - Activity level: ${preferences.activityLevel}

      Include:
      1. Complete recipes with ingredients and instructions
      2. Detailed nutritional information including macros and micronutrients
      3. Meal timing recommendations
      4. Portion sizes
      5. Alternative ingredient suggestions
      
      Format the response as a structured JSON object matching the MealPlan type.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a professional nutritionist and chef specialized in creating personalized meal plans."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    return JSON.parse(response || '{}');
  } catch (error) {
    console.error('Error generating meal plan:', error);
    throw new Error('Failed to generate meal plan');
  }
}