import React from 'react';
import { Apple } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Apple className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">NutriSmart</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-600 transition">Features</a>
            <a href="#meal-generator" className="text-gray-600 hover:text-green-600 transition">Meal Generator</a>
            <a href="#about" className="text-gray-600 hover:text-green-600 transition">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}