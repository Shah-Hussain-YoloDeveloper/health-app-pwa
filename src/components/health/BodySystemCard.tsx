interface Props {
  label: string;
  count: string;
  status: 'good' | 'bad';
}

export default function BodySystemCard({ label, count, status }: Props) {
  const badgeStyle =
    status === 'bad'
      ? 'bg-yellow-100 text-yellow-900'
      : 'bg-green-100 text-green-800';

  return (
    <div className="bg-white rounded-3xl shadow-lg px-6 py-8 w-full flex flex-col items-center gap-y-4">
      <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${badgeStyle}`}>
        {label}
      </span>

      <div className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-none tracking-tight">
        {count}
      </div>

      <span className="text-base text-gray-600 font-medium">
        Body Systems
      </span>
    </div>
  );
}
