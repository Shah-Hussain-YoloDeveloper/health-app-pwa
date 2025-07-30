import * as Dialog from "@radix-ui/react-dialog";
import { ChevronRight, X, Camera, Image } from "lucide-react";
import clsx from "clsx";
import { useRef, useState } from "react";

interface UploadOptionsSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function UploadOptionsSheet({ open, onClose }: UploadOptionsSheetProps) {
  const [selectedType, setSelectedType] = useState<null | "prescription" | "test">(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleBack = () => setSelectedType(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const handleGalleryUpload = () => {
    fileInputRef.current?.click();
  };

  const handleCameraUpload = () => {
    cameraInputRef.current?.click();
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={clsx(
            "fixed inset-x-0 bottom-0 z-50 rounded-t-2xl bg-white px-4 pb-8 pt-6 shadow-lg transition ease-in-out data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom"
          )}
        >
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-1 opacity-70 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {/* First Screen */}
          {!selectedType && (
            <>
              <h2 className="font-semibold text-lg text-gray-800 mb-4">What do you want to upload?</h2>
              <div className="space-y-4">
                <button
                  className="w-full flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3 hover:bg-gray-200 transition"
                  onClick={() => setSelectedType("prescription")}
                >
                  <div className="flex items-center gap-3">
                    <img src="/icons/prescription1.png" className="w-7 h-8" alt="Prescription" />
                    <span className="text-gray-700 font-medium">Prescription</span>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </button>

                <button
                  className="w-full flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3 hover:bg-gray-200 transition"
                  onClick={() => setSelectedType("test")}
                >
                  <div className="flex items-center gap-3">
                    <img src="/icons/testreport1.png" className="w-7 h-9" alt="Test Report" />
                    <span className="text-gray-700 font-medium">Test Report</span>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </button>
              </div>
            </>
          )}

          {/* Second Screen (Camera / Gallery) */}
          {selectedType && (
            <>
              <div className="flex items-center justify-between mb-4">
                <button onClick={handleBack} className="text-sm text-gray-500 hover:underline">
                  ← Back
                </button>
                <h2 className="text-lg font-semibold text-gray-800">
                  Upload {selectedType === "prescription" ? "Prescription" : "Test Report"}
                </h2>
                <div className="w-[60px]" />
              </div>

              <div className="space-y-4 mt-8">
                <button
                  className="w-full flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition"
                  onClick={handleCameraUpload}
                >
                  <Camera className="text-gray-700" />
                  <span className="text-gray-800 font-medium">Upload from Camera</span>
                </button>

                <button
                  className="w-full flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition"
                  onClick={handleGalleryUpload}
                >
                  <Image className="text-gray-700" />
                  <span className="text-gray-800 font-medium">Upload from Gallery</span>
                </button>
              </div>
            </>
          )}

          {/* Hidden Inputs */}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
