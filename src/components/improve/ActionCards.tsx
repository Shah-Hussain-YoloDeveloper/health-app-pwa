export default function ActionCards() {
  return (
    <div className="px-4 pt-6 space-y-4">
      <div className="flex items-center p-6 rounded-3xl bg-white border border-gray-200 shadow-md">
        <img
          src="/icons/doctor.png"
          alt="Doctor"
          className="w-20 h-20 mr-6"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            Consult a doctor
          </h3>
          <p className="text-base text-gray-600 mt-1">
            Preventive consultations with our specialist doctors
          </p>
        </div>
        <div className="w-9 h-9 flex items-center justify-center bg-black rounded-full">
          <span className="text-white text-lg">➔</span>
        </div>
      </div>

      <div className="flex items-center p-6 rounded-3xl bg-white border border-gray-200 shadow-md">
        <img
          src="/icons/recommendations.png"
          alt="Recommendations"
          className="w-20 h-20 mr-6"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            Health<br />recommendations
          </h3>
          <p className="text-base text-gray-600 mt-1">
            Custom diet, lifestyle & supplement suggestions
          </p>
        </div>
        <div className="w-9 h-9 flex items-center justify-center bg-black rounded-full">
          <span className="text-white text-lg">➔</span>
        </div>
      </div>
    </div>
  );
}
