import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi2';
import IconBox from './IconBox';
import SelectLocation from './SelectLocation';

export default function Homepage() {
  return (
    <div className="min-h-screen px-4 py-2">
      <h2 className="mt-12 text-center text-2xl font-medium text-zinc-600">
        What are you looking for?
      </h2>

      <div className="mt-10 flex items-center justify-center gap-6 pb-8 md:gap-8">
        <IconBox icon={<HiOutlineHome />} text="Room" />
        <IconBox icon={<HiOutlineUsers />} text="Roommate" />
      </div>

      <SelectLocation />
    </div>
  );
}
