import { useNavigate } from 'react-router-dom';

export default function ExploreAllCard() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/wellbeing-scale')}
      className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer hover:shadow transition"
    >
      <div className="flex items-center gap-3">
        <img
          src="/icons/exploreall.png"
          alt="Explore"
          className="w-8 h-8 object-contain"
        />
        <span className="text-base font-semibold text-gray-800">Explore all</span>
      </div>
      <span className="text-gray-400 text-xl">&rsaquo;</span>
    </div>
  );
}
