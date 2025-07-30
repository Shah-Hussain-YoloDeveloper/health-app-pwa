import { useState } from "react";
import { useProfile } from "../context/ProfileContext";
import ProfileSwitcherModal from "./ProfileSwitcherModal";

export default function Header() {
  const { profile } = useProfile(); 
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center justify-between px-4 py-4 rounded-b-2xl text-white shadow"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, #26533d, #286043, #266a44, #247346, #247c4a, #247147),
            linear-gradient(to right, #2a3b37, #28503d, #286042, #23794a, #22854e, #209652)
          `,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="flex items-center gap-3">
          <button className="text-white text-xl">&#8592;</button>
          <div onClick={() => setModalOpen(true)} className="cursor-pointer">
            <h2 className="text-lg font-bold leading-tight">{profile.name}</h2>
            <p className="text-sm opacity-80">Switch Profile ▼</p>
          </div>
        </div>
        <div className="text-2xl font-bold">⋮</div>
      </div>

      <ProfileSwitcherModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
