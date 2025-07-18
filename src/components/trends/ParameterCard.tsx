import { Bookmark, Info } from 'lucide-react';

interface ParameterCardProps {
  title: string;
  value: string;
  unit: string;
  ideal: string;
  tag: string;
  date: string;
  highRisk?: boolean;
  className?: string;
}

export default function ParameterCard({
  title,
  value,
  ideal,
  tag,
  date,
  highRisk,
  className = '',
}: ParameterCardProps) {
  return (
    <div className={`bg-white px-6 py-5 rounded-xl shadow-md ${className}`}>
      
      <div className="flex items-start justify-between">
        
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-base text-gray-900">{title}</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500 mt-1">Ideal range: {ideal}</p>
        </div>

        
        <div className="flex items-center gap-3">
          <span
            className={`className="text-sm px-3 py-1 rounded-full font-medium min-w-[44px] text-center text-gray-800 shadow-sm hover:bg-red-200 transition" ${
              highRisk
                ? 'bg-[#ffede6] text-[#db825f]'
                : 'bg-[#ffede6] text-[#db825f]'
            }`}
          >
            {value}
          </span>
          <button className="text-gray-400 text-2xl leading-none">⌄</button>
        </div>
      </div>

    
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
            {tag}
          </span>
          <Bookmark className="w-5 h-5 text-gray-400" />
        </div>
        <span className="text-sm text-gray-400">as of {date}</span>
      </div>
    </div>
  );
}
