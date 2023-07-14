import React from 'react';
import "./styles.css"
const DesignWithTailwindCSS = () => {
  return (
    <div className="flex justify-center items-end h-screen bg-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">App Design with Tailwind CSS</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus nulla sed diam consectetur, at bibendum
          mi tristique.
        </p>
        <button className="px-1 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default DesignWithTailwindCSS;
