export default function HealthProgramCard() {
  return (
    <div className="px-4 pt-10">
      <h2 className="text-lg text-gray-900 font-bold mb-4">
        Enroll to a best-in-class health program
      </h2>
      
      <div className="rounded-3xl overflow-hidden bg-white shadow-md">
        <div className="bg-purple-700 text-white text-sm px-4 py-2 font-medium">
          HUMAN EDGE • <span className="opacity-70">Mito Start</span>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-black text-lg">
                Longevity program by Dr. Marcus Ranney
              </h3>
              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                <li>• Improve metabolic health</li>
                <li>• Improve sleep quality and more</li>
              </ul>
            </div>
            <img
              src="/doctor1.png"
              alt="Dr Marcus"
              className="w-20 h-20 rounded-2xl object-cover ml-4"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-green-600 font-semibold text-sm">
              Enroll at ₹36,000
              <span className="text-gray-400 line-through ml-2">₹40,000</span>
            </div>
            <button className="bg-black text-white text-sm px-4 py-2 rounded-lg">
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
