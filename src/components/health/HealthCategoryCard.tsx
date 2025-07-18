interface Props {
  title: string;
  icon: string; 
  outOfRange: number;
  total: number;
}

export default function HealthCategoryCard({ title, icon, outOfRange, total }: Props) {
  const description =
    outOfRange === -1 ? (
      <span className="text-sm text-gray-500 italic">
        Book relevant tests to get insights
      </span>
    ) : outOfRange === 0 ? (
      <span className="text-sm text-gray-600">
        <strong>{total} out of {total}</strong> measurements are perfectly within range
      </span>
    ) : (
      <span className="text-sm text-gray-600">
        <strong>{outOfRange} out of {total}</strong> measurements are outside the range
      </span>
    );

  return (
    <div className="flex justify-between items-center p-4 rounded-xl shadow-sm bg-white mb-3">
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={title}
          className="w-10 h-10 object-contain"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
          {description}
        </div>
      </div>
      <span className="text-xl text-gray-400">›</span>
    </div>
  );
}
