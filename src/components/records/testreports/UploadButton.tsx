interface UploadButtonProps {
  onClick: () => void;
}

export default function UploadButton({ onClick }: UploadButtonProps) {
  return (
    <div className="fixed bottom-20 inset-x-0 px-4">
      <button
        onClick={onClick}
        className="w-full mb-10 bg-[#FF5349] text-white py-3 rounded-xl font-semibold text-base shadow-md"
      >
        Upload Record
      </button>
    </div>
  );
}
