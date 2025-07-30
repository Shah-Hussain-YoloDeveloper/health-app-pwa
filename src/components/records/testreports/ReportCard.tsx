export default function ReportCard() {
  return (
    <div className="bg-white rounded-xl top-32 mt-8 mb-8 shadow-lg p-6 space-y-3">
      <div className="flex items-start gap-4">
        <img src="..\icons\testreports/fullbody.png" className="w-12 h-14 mt-1" alt="Report" />
        <div>
          <h2 className="text-gray-800 font-semibold mb-2 text-base leading-snug">
            Comprehensive Gold Full Body Checkup With Smart Report
          </h2>
          <p className="text-gray-500 text-sm">17 Feb 2025</p>
        </div>
      </div>
    </div>
  );
}
