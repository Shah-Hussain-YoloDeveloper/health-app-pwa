import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search lab test parameter value (e.g., B12, D)"
          className="w-full px-5 py-3 bg-white text-gray-700 pr-12 rounded-full border border-gray-300 shadow-sm text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}
