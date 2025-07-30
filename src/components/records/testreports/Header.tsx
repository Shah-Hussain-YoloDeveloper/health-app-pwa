import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div
      className="px-4 pt-14 pb-16 rounded-b-3xl text-white"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #26533d, #286043, #266a44, #247346, #247c4a, #247147),
          linear-gradient(to right, #2a3b37, #28503d, #286042, #23794a, #22854e, #209652)
        `,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-black rounded-full p-3 shadow"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <h1 className="text-xl font-bold ml-2">Test Reports</h1>
      </div>
    </div>
  );
}
