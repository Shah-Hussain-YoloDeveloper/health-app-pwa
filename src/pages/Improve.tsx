import Header from "../components/Header";
import ActionCards from "../components/improve/ActionCards";
import HealthProgramCard from "../components/improve/HealthProgramCard";

export default function ImprovePage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Header />
      <ActionCards />
      <HealthProgramCard />
    </div>
  );
}
