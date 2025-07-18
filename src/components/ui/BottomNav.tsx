import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function BottomNav() {
  const { pathname } = useLocation();

  const items = [
    {
      label: 'Insights',
      path: '/insights',
      iconPath: '/icons-navbar/insights.png',
    },
    {
      label: 'Improve',
      path: '/improve',
      iconPath: '/icons-navbar/improve.png',
    },
    {
      label: 'Ask me',
      isButton: true,
      icon: () => <Sparkles className="w-5 h-5 text-white" />,
    },
    {
      label: 'Trends',
      path: '/trends',
      iconPath: '/icons-navbar/trends.png',
    },
    {
      label: 'Records',
      path: '/records',
      iconPath: '/icons-navbar/records.png',
    },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-full shadow-lg flex justify-between items-center px-2 py-2 z-50 border border-gray-200">
      {items.map(({ label, path, iconPath, icon, isButton}) => {
        const isActive = pathname === path;
        const isAskMe = label === 'Ask me';

        const iconWrapperClasses = `
          w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out
          ${isAskMe
            ? 'bg-gradient-to-br from-blue-600 to-blue-400 shadow-md border-[3px] border-white'
            : isActive
            ? 'bg-white border-2 border-black shadow-md'
            : 'bg-transparent'}
        `;


        const textClasses = `
          text-[10px] mt-1 transition-all
          ${isAskMe
            ? 'text-blue-600 font-semibold'
            : isActive
            ? 'text-black font-semibold'
            : 'text-gray-600'}
        `;

        const containerClasses = `
          transition-transform duration-300 ease-in-out
          ${isActive || isAskMe ? '-top-4 scale-110 relative' : 'scale-100'}
        `;

        const content = (
          <>
            <div className={containerClasses}>
              <div className={iconWrapperClasses}>
                {isAskMe ? icon?.() : <img
                  src={iconPath}
                  alt={label}
                  className={`
                    ${label === 'Trends' ? 'w-8 h-8' : 'w-6 h-6'}
                    object-contain transition-opacity duration-300
                    ${isActive ? 'opacity-100' : 'opacity-60'}
                  `}
                />
                }
              </div>
            </div>
            <span className={textClasses}>{label}</span>
          </>
        );

        return isButton ? (
          <button
            key={label}
            className="flex flex-col items-center justify-center flex-1 focus:outline-none"
          >
            {content}
          </button>
        ) : (
          <Link
            key={label}
            to={path as string}
            className="flex flex-col items-center justify-center flex-1"
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
