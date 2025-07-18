import Header from '../components/trends/Header';
import FilterBar from '../components/trends/FilterBar';
import ParameterCard from '../components/trends/ParameterCard';

export default function ParameterListPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <FilterBar />

      <div className="px-4 pt-4 pb-20">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          All parameters
        </h3>

        <div className="space-y-8">
          <div className="bg-white space-y-8 rounded-xl shadow-sm">
            <ParameterCard
              title="Alkaline Phosphatase"
              value="172"
              unit="U/L"
              ideal="46 - 116 U/L"
              tag="Liver Health"
              date="19 Jun'25"
              highRisk
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <ParameterCard
              title="C-Reactive Protein (Quantitative)"
              value="4.90"
              unit="mg/L"
              ideal="0 - 3.3 mg/L"
              tag="Blood"
              date="9 Jun'25"
              highRisk
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <ParameterCard
              title="Erythrocyte Sedimentation Rate"
              value="36"
              unit="mm/hr"
              ideal="0.1 - 19 mm/hr"
              tag="Blood"
              date="11 Jul'25"
              highRisk
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <ParameterCard
              title="Glucose - Fasting"
              value="103"
              unit="mg/dL"
              ideal="70 - 100 mg/dL"
              tag="Blood"
              date="12 Jun'25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
