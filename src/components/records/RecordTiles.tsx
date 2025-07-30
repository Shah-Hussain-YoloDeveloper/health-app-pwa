import { useNavigate } from 'react-router-dom';

export default function RecordTiles() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-lg ml-2 font-bold text-gray-800">Records</h2>
      <p className="text-sm ml-2 text-gray-600">What are you looking for?</p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Test Reports Card - now clickable */}
        <button
          type="button"
          onClick={() => navigate('/test-reports')}
          className="bg-white mt-2 rounded-xl shadow p-4 space-y-2 text-left focus:outline-none transition hover:shadow-md active:scale-[0.98]"
        >
          <img src="/testreports.png" alt="Test Reports" className="w-20 h-20" />
          <div className="text-lg font-semibold text-gray-800">Test Reports</div>
          <p className="text-sm text-gray-500">Total 12 · Updated on 17 Jul 2025</p>
        </button>

        {/* Prescriptions Card */}
        <div className="bg-white rounded-xl mt-2 shadow p-4 space-y-2">
          <img src="/prescriptions.png" alt="Prescriptions" className="w-20 h-20" />
          <div className="text-lg font-semibold text-gray-800">Prescriptions</div>
          <p className="text-sm text-gray-500">Upload your records</p>
        </div>
      </div>
    </div>
  );
}
