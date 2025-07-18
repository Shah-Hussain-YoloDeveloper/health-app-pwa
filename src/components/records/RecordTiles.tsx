export default function RecordTiles() {
    return (
      <div>
        <h2 className="text-lg ml-2 font-bold text-gray-800">Records</h2>
        <p className="text-sm ml-2 text-gray-600">What are you looking for?</p>
  
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white mt-2 rounded-xl shadow p-4 space-y-2">
            <img src="/testreports.png" className="w-20 h-20" />
            <div className="text-l font-semibold text-gray-800">Test Reports</div>
            <p className="text-sm text-gray-500">Total 12 · Updated on 17 Jul 2025</p>
          </div>
  
          <div className="bg-white rounded-xl mt-2 shadow p-4 space-y-2">
            <img src="/prescriptions.png" className="w-20 h-20" />
            <div className="text-l font-semibold text-gray-800">Prescriptions</div>
            <p className="text-sm text-gray-500">Upload your records</p>
          </div>
        </div>
      </div>
    );
  }
  