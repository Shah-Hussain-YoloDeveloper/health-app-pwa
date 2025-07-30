import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "../components/records/testreports/Header";
import SearchBar from "../components/records/testreports/SearchBar";
import ReportCard from "../components/records/testreports/ReportCard";
import UploadButton from "../components/records/testreports/UploadButton";
import UploadOptionsSheet from "../components/records/testreports/UploadOptionsSheet";


export default function TestReportsPage() {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen pb-32 relative">
      <Header />
      <div className="-mt-8 bg-white rounded-xl pt-6 pb-10 shadow-md">
        <SearchBar />

        <div className="px-4 mt-4 space-y-4">
          <ReportCard />
          <h2 className="text-orange-300 mb-4 text-xl flex justify-between items-center">
            MPV +11 outside normal
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </h2>
          <p className="text-gray-500 text-sm mt-8 px-1">Showing 1 - 1 of 1</p>
          <p className="font-semibold text-gray-900 text-base px-1">That's all folks!</p>
        </div>
      </div>

      <UploadButton onClick={() => setShowSheet(true)} />
      <UploadOptionsSheet open={showSheet} onClose={() => setShowSheet(false)} />
    </div>
  );
}
