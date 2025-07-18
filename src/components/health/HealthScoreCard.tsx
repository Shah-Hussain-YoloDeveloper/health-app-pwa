
import { BarChart3 } from 'lucide-react';

export default function HealthScoreCard() {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="flex items-center p-4 pb-2">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-800">Health Score</h3>
          <div className="mt-1 text-4xl font-bold text-gray-900 leading-tight">
            86<span className="text-gray-400 text-2xl">/100</span>
          </div>
          <button className="mt-1 text-sm font-semibold text-black hover:underline flex items-center gap-1">
            View more details <span className="text-lg">›</span>
          </button>
        </div>
      </div>

      <div className="bg-green-600 text-white text-sm px-4 py-2 flex items-center gap-2">
        <BarChart3 className="w-4 h-4" />
        You are in the top 30% of your age group.
      </div>
    </div>
  );
}
