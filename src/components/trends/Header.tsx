import { ArrowLeft, Search } from 'lucide-react';
export default function Header() {
  return (
    <div
      className="px-4 pt-20 pb-10 text-white rounded-b-3xl relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, #1e4d3a, #208c4c, #52b788),
          radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 70%)
        `,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <button className="bg-white text-black rounded-full p-2 translate-y-[-20px] shadow-md hover:bg-gray-100 transition">
          <ArrowLeft className="w-5 h-5" />
        </button>

        <h2 className="translate-y-[-20px] text-center ml-auto text-lg font-semibold flex-1 pr-8">
          Parameter data for Sangam Shrestha
        </h2>
      </div>

      <div className="bg-white rounded-full px-4 py-2 flex items-center shadow-md">
        <input
          type="text"
          placeholder="Search your tested parameters"
          className="flex-1 outline-none text-black placeholder-gray-500 bg-transparent"
        />
        <Search className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
}
