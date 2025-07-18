// components/records/HealthInsightsCard.tsx
import { ChevronRight } from 'lucide-react';

export default function HealthInsightsCard() {
  return (
    <div className="bg-white p-3 mt-4 rounded-xl shadow border border-gray-200 flex items-center justify-between space-x-4">
      <img
        src="/healthinsight.png"
        alt="Health Insight Icon"
        className="w-20 h-20 object-contain"
      />

      <div className="flex-1">
        <h3 className="text-base text-l font-semibold text-gray-900">Health Insights</h3>
        <p className="text-sm text-gray-500">Unlock Personalised Health Insights</p>
      </div>

      <ChevronRight className="text-gray-400" />
    </div>
  );
}
