import Header from '../components/records/Header';
import HealthInsightsCard from '../components/records/HealthInsightsCard';
import RecordTiles from '../components/records/RecordTiles';
import QuickAccess from '../components/records/QuickAccess';
import WellbeingScaleSection from '../components/records/WellbeingScaleSection'; 
import ExploreAllCard from '../components/records/ExploreAllCard';

export default function Records() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="px-4 pt-4 pb-28 space-y-6">
        <HealthInsightsCard />
        <RecordTiles />
        <QuickAccess />
        <WellbeingScaleSection /> 
        <ExploreAllCard />
      </div>
    </div>
  );
}
