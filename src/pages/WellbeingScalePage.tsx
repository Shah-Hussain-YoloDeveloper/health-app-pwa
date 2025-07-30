import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Info } from 'lucide-react';


const allWellbeingCards = [
  {
    title: "CVD",
    description: "Probability in next 10 years",
    icon: "/icons/wellbeing/cvd.png",
  },
  {
    title: "Heart Age",
    description: "Your Heart/Vascular age",
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
  {
    title: "Stress",
    description: "Probability of stress",
    icon: "/icons/wellbeing/anxiety.png",
  },
  {
    title: "Hypertension",
    description: "Probability in next 4 years",
    icon: "/icons/wellbeing/hypertension.png",
  },
  {
    title: "Diabetes",
    description: "Probability in next 10 years",
    icon: "/icons/wellbeing/diabetes.png",
  },
];

export default function WellbeingScalePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-28">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Wellbeing Scale</h1>
        <div className="w-5" />
      </div>

      <div className="px-4 mt-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Results</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allWellbeingCards.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm min-h-[180px] flex flex-col justify-between"
            >
              {/* Bigger icon */}
              <img src={icon} alt={title} className="w-14 h-14 mb-4" />

              <div>
                <h4 className="text-base font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
              </div>

              <div className="mt-4 inline-block bg-gray-100 text-xs rounded px-3 py-1 text-gray-700 w-max">
                Not Taken
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-xs text-gray-500 space-y-3 leading-relaxed">
        <div className="flex items-center gap-1 font-semibold">
            <Info className="w-4 h-4 text-gray-500" />
            <span>Disclaimer</span>
        </div>
        <p>
            Based on the most recent scientific research, the Wellbeing Index illustrates potential
            health issues that you may experience as a result of your current lifestyle and present
            symptoms. The health score provided here is generated based on the inputs provided by
            you and is intended to provide a general assessment and raise awareness.
        </p>
        <p>You hereby acknowledge and agree:</p>
        <ul className="list-disc ml-4 space-y-1">
            <li>
            that you are solely responsible for the accuracy and completeness of the health data
            that you input for generating the health score**;
            </li>
            <li>
            that the health score is not a definitive diagnosis or medical advice and is provided
            for informational purposes only and does not substitute professional medical advice;
            </li>
            <li>
            to consult a qualified healthcare professional to address any specific questions or
            concerns regarding your health; and
            </li>
            <li>
            Tata 1MG shall not be responsible or liable for any decisions made by you on the basis
            of the use or interpretation of the health score generated.
            </li>
        </ul>
        <p className="mt-2">
            **For attributes where you did not input the data, an age adjusted proxy value has been used.
        </p>
        </div>

      </div>
    </div>
  );
}
