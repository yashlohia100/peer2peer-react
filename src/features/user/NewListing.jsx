import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function NewListing() {
  return (
    <div className="flex flex-col items-center gap-4 py-6 text-sm">
      <h2 className="text-lg font-medium text-zinc-600">
        Create a new listing
      </h2>

      <div className="flex gap-5">
        <Link
          to="/new-listing/room"
          className="flex h-48 w-44 flex-col items-center justify-center rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-400 transition duration-300 hover:scale-105 hover:bg-zinc-50 hover:text-emerald-400 hover:shadow-lg"
        >
          <HiOutlineHome className="text-8xl" />
          <p className="text-base font-medium text-zinc-600">Room</p>
          <p className="text-zinc-600">Having a room</p>
          <p className="text-zinc-600">Looking for a mate</p>
        </Link>

        <Link
          to="/new-listing/roommate"
          className="flex h-48 w-44 flex-col items-center justify-center rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-400 transition duration-300 hover:scale-105 hover:bg-zinc-50 hover:text-emerald-400 hover:shadow-lg"
        >
          <HiOutlineUsers className="text-8xl" />
          <p className="text-base font-medium text-zinc-600">Roommate</p>
          <p className="text-zinc-600">Looking for a room</p>
          <p className="text-zinc-600">With a roommate</p>
        </Link>
      </div>
    </div>
  );
}
