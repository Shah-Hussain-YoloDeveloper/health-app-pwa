import { useState } from 'react';
import HealthScoreCard from './HealthScoreCard';

export default function HealthSummaryCard() {
  const [showScore, setShowScore] = useState(false);

  return (
    <div className="bg-gray-900 text-white p-0 rounded-2xl overflow-hidden relative shadow mx-1.5">
      <div className="absolute top-16 left-2 w-1/3 sm:w-[20%] sm:top-5 sm:left-0 h-[60%] z-0 flex items-center justify-center">
        <img
          src="/human.png"
          alt="Left human background"
          className="w-full h-full object-contain opacity-15"
        />
      </div>

      <div className="hidden sm:flex absolute top-10 right-0 w-[20%] h-[75%] z-0 items-center justify-center">
        <img
          src="/human.png"
          alt="Right human background"
          className="w-full h-full object-contain opacity-15"
        />
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-400 px-4 sm:px-7 py-4 sm:py-5 relative z-10 flex justify-between items-center">
        <div>
          <h2 className="text-lg sm:text-xl font-bold">Your Health Summary</h2>
          <p className="text-xs text-white/80">Stay updated with your health status</p>
        </div>
        <div className="bg-white text-gray-800 text-xs px-2 py-0.5 rounded-full shadow z-20">
          New +
        </div>
      </div>

      <div className="relative px-4 py-6 sm:p-10 space-y-5 z-10">
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-semibold">Overview</h3>
          <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-2xl">
            Health Summary provides a clear snapshot of your well-being, highlighting any concerns and trends.
          </p>
          <button
            className="mt-5 bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-6 rounded-lg transition"
            onClick={() => setShowScore(true)}
          >
            Generate Report
          </button>

          {showScore && <HealthScoreCard />}
        </div>
      </div>
    </div>
  );
}
