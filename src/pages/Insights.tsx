import Header from '../components/Header';
import HealthSummaryCard from '../components/health/HealthSummaryCard';
import StatusOverview from '../components/health/StatusOverview';
import HealthCategoryList from '../components/health/HealthCategoryList';

export default function Insights() {
    return (
      <div className="pb-32 space-y-4">
        <Header />
        <div className="lg:px-2.5">
            <HealthSummaryCard />
            <StatusOverview />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-32 space-y-4">
            <HealthCategoryList />
        </div>
      </div>
    );
  }
  