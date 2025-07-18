const quickLinks = [
  { label: 'Add Records', icon: '/icons/addrecord.png' },
  { label: 'Health Guide', icon: '/icons/healthguide.png' },
  { label: 'Wellbeing Scale', icon: '/icons/wellbeingscale.png' },
  { label: 'Trends', icon: '/icons/trendsicon.png' },
];

export default function QuickAccess() {
  return (
    <div className="px-4">
      <h3 className="text-lg mt-9 font-bold text-gray-900 mb-2">Quick Access</h3>

      <div className="flex md:grid overflow-x-auto md:grid-cols-4 gap-5 mt-6 md:overflow-visible">
        {quickLinks.map(({ label, icon }) => {
          const isLarge = label === 'Health Guide' || label === 'Wellbeing Scale';

          return (
            <div
              key={label}
              className="flex flex-col items-center gap-2 min-w-[79px] md:min-w-0"
            >
              <div className="bg-white rounded-2xl p-5 w-[88px] h-[88px] shadow flex items-center justify-center">
                <img
                  src={icon}
                  alt={label}
                  className={`${isLarge ? 'w-16 h-16' : 'w-14 h-14'} object-contain`}
                />
              </div>
              <span className="text-sm text-gray-700 mt-1 text-center font-medium">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
