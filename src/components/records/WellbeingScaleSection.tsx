const wellbeingCards = [
    {
      title: "CVD",
      description: "Probability in next 10 years",
      icon: "/icons/wellbeing/cvd.png",
    },
    {
      title: "Stroke",
      description: "Probability in next 10 years",
      icon: "/icons/wellbeing/stroke.png",
    },
    {
      title: "Depression",
      description: "Probability of depression",
      icon: "/icons/wellbeing/depression.png",
    },
    {
      title: "Anxiety",
      description: "Probability of anxiety",
      icon: "/icons/wellbeing/anxiety.png",
    },
  ];
  
  export default function WellbeingScaleSection() {
    return (
      <div className="px-2 mt-6">
        <h2 className="text-xl mt-4 font-bold text-gray-900 mb-4">Wellbeing Scale</h2>
        <div className="bg-white rounded-2xl shadow p-4 flex items-start gap-3 border border-gray-200">
          <div className="flex-1">
            <p className="text-red-600 font-semibold text-sm mb-1">Designed for you</p>
            <p className="text-sm text-gray-700">
              A questionnaire tailored specifically for your health needs and easy to comprehend.
            </p>
          </div>
          <img src="/icons/wellbeing/phone.png" alt="Info" className="w-16 h-16 object-contain" />
        </div>
  
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {wellbeingCards.map(({ title, description, icon }) => (
            <div
            key={title}
            className="bg-white rounded-2xl border border-gray-200 p-5 min-h-[200px] flex flex-col shadow hover:shadow-md transition-all duration-200"
            >
            <img src={icon} alt={title} className="w-16 h-16 mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <button className="text-sm font-semibold text-gray-900 px-2 py-2 rounded-lg shadow self-start">
                Start Here
            </button>
            </div>
        ))}
        </div>
      </div>
    );
  }
  