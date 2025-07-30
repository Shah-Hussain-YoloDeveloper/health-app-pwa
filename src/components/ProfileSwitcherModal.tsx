import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';

interface ProfileSwitcherModalProps {
  open: boolean;
  onClose: () => void;
}

const members = [
  {
    id: 1,
    type: 'SELF',
    name: 'Ayaan Hasija',
    age: 23,
    gender: 'Male',
    records: 1,
    avatar: '/icons/profile/ayaan.png',
  },
  {
    id: 2,
    type: 'OTHERS',
    name: 'Maryam Fatima',
    age: 17,
    gender: 'Female',
    records: 2,
    avatar: '/icons/profile/mariyam.png',
  },
  {
    id: 3,
    type: 'OTHERS',
    name: 'Aryan Khan',
    age: 32,
    gender: 'Male',
    records: 2,
    avatar: '/icons/profile/aryan.png',
  },
];

export default function ProfileSwitcherModal({ open, onClose }: ProfileSwitcherModalProps) {
  const { profile, setProfile } = useProfile();
  const [tempSelectedId, setTempSelectedId] = useState(profile.id);

  useEffect(() => {
    if (open) setTempSelectedId(profile.id);
  }, [open, profile.id]);

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed inset-x-0 top-[40%] bottom-0 bg-white rounded-t-2xl z-50 shadow-lg overflow-y-auto">
          <div className="flex justify-end px-4 pt-4">
            <Dialog.Close asChild>
              <button className="text-gray-500 hover:text-black" aria-label="Close">
                <X className="w-6 h-6" />
              </button>
            </Dialog.Close>
          </div>

          <div className="px-4 pb-6">
            <h2 className="text-lg text-gray-900 font-bold">Manage your members</h2>
            <p className="text-sm text-gray-500">In total you have three people</p>

            <div className="grid mt-3 grid-cols-3 gap-3">
              <button className="flex flex-row items-center justify-center bg-white border rounded-xl shadow-lg text-red-500 text-sm font-medium">
                <img src="/icons/profile/add.png" alt="Add New" className="w-5 h-5 mb-1 mr-1" />
                Add New
              </button>
              <button className="flex flex-row items-center justify-center bg-white border rounded-xl shadow-lg text-red-500 text-sm font-medium">
                <img src="/icons/profile/archive.png" alt="View Archived" className="w-6 h-6 mb-1" />
                View Archived
              </button>
              <button className="flex flex-row items-center justify-center bg-white border rounded-xl shadow-lg text-red-500 text-sm font-medium">
                <img src="/icons/profile/merge.png" alt="Merge" className="w-6 h-6 mb-2 mr-1" />
                Merge
              </button>
            </div>

            {['SELF', 'OTHERS'].map(group => (
              <div key={group}>
                <div className="mt-6 text-sm text-red-500 font-semibold">{group}</div>
                {members
                  .filter(m => m.type === group)
                  .map(member => (
                    <div
                      key={member.id}
                      className="bg-gray-100 p-3 rounded-xl mt-2 flex items-center gap-3 relative"
                      onClick={() => setTempSelectedId(member.id)}
                    >
                      <img src={member.avatar} alt="avatar" className="w-14 h-14 rounded-full" />

                      <div>
                        <p className="font-semibold text-gray-700 text-base">{member.name}</p>
                        <p className="text-sm pt-1 text-gray-600">
                          {member.age}yrs • {member.gender}
                        </p>
                        <div className="flex gap-2 text-sm mt-1">
                          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">{member.type}</span>
                          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full ml-1">
                            {member.records} Records
                          </span>
                        </div>
                      </div>

                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            tempSelectedId === member.id ? 'border-red-500' : 'border-gray-400'
                          }`}
                        >
                          {tempSelectedId === member.id && (
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}

            <button
              className="w-full mt-8 bg-gray-200 text-center py-4 rounded-xl text-gray-700 text-base font-medium"
              onClick={() => {
                const selected = members.find(m => m.id === tempSelectedId);
                if (selected) {
                  setProfile({ id: selected.id, name: selected.name });
                  onClose();
                }
              }}
            >
              View Member →
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
