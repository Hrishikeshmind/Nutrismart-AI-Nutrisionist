import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MealGenerator from './components/MealGenerator';
import { Salad, Sparkles, Users, Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <MealGenerator />

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose NutriSmart?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our advanced AI technology creates personalized meal plans that fit your lifestyle and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Plans</h3>
              <p className="text-gray-600">Advanced algorithms create perfectly balanced meal plans.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalization</h3>
              <p className="text-gray-600">Tailored to your dietary preferences and restrictions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Salad className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Diverse Recipes</h3>
              <p className="text-gray-600">Thousands of delicious and healthy meal options.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Goal Tracking</h3>
              <p className="text-gray-600">Monitor your progress and achieve your health goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Health Journey Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their lives with NutriSmart's intelligent meal planning.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition text-lg font-semibold">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NutriSmart</h3>
              <p className="text-gray-400">Your AI-powered nutrition companion for a healthier lifestyle.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Meal Planning</li>
                <li>Nutrition Tracking</li>
                <li>Recipe Database</li>
                <li>Goal Setting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 NutriSmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;