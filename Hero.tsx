import React from 'react';
import { Utensils, Heart, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your Personal
            <span className="text-green-600"> AI Nutritionist</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience the future of nutrition with personalized meal plans powered by artificial intelligence.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition text-lg font-semibold">
              Get Started Free
            </button>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition text-lg font-semibold border-2 border-green-600">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
            <p className="text-gray-600">Tailored meal plans based on your preferences and goals</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Focused</h3>
            <p className="text-gray-600">Nutritionally balanced meals for optimal health</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
            <p className="text-gray-600">Advanced AI technology for smart meal recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
}