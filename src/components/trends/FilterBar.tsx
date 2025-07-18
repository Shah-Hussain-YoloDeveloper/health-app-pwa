import { Filter, Bookmark, Table } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className="flex items-center px-4 py-3 gap-3 bg-white sticky top-0 z-10 border-b">
     
      <button className="flex items-center gap-2 text-sm border rounded-full px-3 py-1.5 text-gray-700 hover:bg-gray-100">
        <Filter className="w-4 h-4" />
        Sort by
        <span className="text-xs">▼</span>
      </button>
      
      <div className="flex items-center gap-2 border rounded-full px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
        <span className="flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">
          <Table className="w-3.5 h-3.5" />
          Table
        </span>
        <div className="w-10 h-5 bg-gray-300 rounded-full flex items-center px-1">
          <div className="w-4 h-4 bg-white rounded-full shadow" />
        </div>
      </div>

      <button className="flex items-center gap-2 text-sm border rounded-full px-3 py-1.5 text-gray-700 hover:bg-gray-100">
        <Bookmark className="w-4 h-4" />
        Bookmarked
      </button>
    </div>
  );
}
