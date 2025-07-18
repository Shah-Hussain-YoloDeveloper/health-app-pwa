import Header from '../components/health/Header';
import HealthScoreCard from '../components/health/HealthScoreCard';
import HealthSummaryCard from '../components/health/HealthSummaryCard';
import StatusOverview from '../components/health/StatusOverview';
import HealthCategoryList from '../components/health/HealthCategoryList';
import BottomNav from '../components/ui/BottomNav';

export default function HealthInsights() {
  return (
    <div className="pb-28 bg-gray-50 ">
      <Header />
      <p className="text-xs text-center text-gray-500 mt-1">Updated on 17 Feb, 2025</p>

      <div className="px-4 space-y-4">
        <HealthScoreCard />
        <HealthSummaryCard />
        <StatusOverview />
        <HealthCategoryList />
      </div>

      <BottomNav />
    </div>
  );
}
