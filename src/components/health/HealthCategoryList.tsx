import HealthCategoryCard from './HealthCategoryCard';

export default function HealthCategoryList() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-yellow-700 font-bold text-lg mb-1">❶ Needs Improvement</h3>
        <p className="text-sm text-gray-600 mb-3">
          Some parameter values are out of the prescribed range, you may consult a doctor for their opinion.
        </p>
        <HealthCategoryCard title="Blood" icon="/icons-pwa/blood.svg"outOfRange={7} total={29} />
        <HealthCategoryCard title="Liver Health" icon="/icons-pwa/liver.svg" outOfRange={1} total={14} />
        <HealthCategoryCard title="Vitamins and Minerals" icon="/icons-pwa/vitamins.svg" outOfRange={2} total={3} />
        <HealthCategoryCard title="Diabetes" icon="/icons-pwa/diabetes.svg" outOfRange={2} total={7} />
      </section>

      <section>
        <h3 className="text-green-700 font-bold text-lg mb-1">❷ Looks Good</h3>
        <p className="text-sm text-gray-600 mb-3">
          Parameter values are within range, need to be maintained for a healthy body.
        </p>
        <HealthCategoryCard title="Kidney Health" icon="/icons-pwa/kidney.svg" outOfRange={0} total={20} />
        <HealthCategoryCard title="Heart Health" icon="/icons-pwa/heart.svg" outOfRange={0} total={8} />
        <HealthCategoryCard title="Joint Health" icon="/icons-pwa/joint.svg" outOfRange={0} total={1} />
        <HealthCategoryCard title="Thyroid Health" icon="/icons-pwa/endocrinology.svg" outOfRange={0} total={3} />
        <HealthCategoryCard title="Bone Health" icon="/icons-pwa/bone-health.svg" outOfRange={0} total={1} />
      </section>

      <section>
        <h3 className="text-gray-800 font-bold text-lg mb-2">❸ Untested Systems</h3>
        <p className="text-sm text-gray-600 mb-3">
          Book a full body package to get insights on the following body systems.
        </p>

        <button className="w-full bg-pink-100 text-pink-700 font-semibold text-sm py-2 rounded-xl mb-4 hover:bg-pink-200 transition">
          Book full body health package
        </button>

        <HealthCategoryCard title="Hormonal Health" icon="/icons-pwa/hormone-therapy.svg" outOfRange={-1} total={0} />
        <HealthCategoryCard title="Pancreas" icon="/icons-pwa/pancreas.svg" outOfRange={-1} total={0} />
        <HealthCategoryCard title="Body Measurements" icon="/icons-pwa/anthropometry.svg" outOfRange={-1} total={0} />
      </section>
    </div>
  );
}
