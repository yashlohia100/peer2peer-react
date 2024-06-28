import { Link } from 'react-router-dom';

export default function ListingNavbarItem({ icon, text, toListingType }) {
  return (
    <Link
      to={toListingType === 'all' ? '/listings' : `?type=${toListingType}`}
      className="flex flex-col items-center gap-1 border-b-2 border-transparent px-2 py-1 text-zinc-500 transition duration-300 hover:text-zinc-700 focus:border-zinc-600 focus:text-zinc-700 focus:outline-none"
    >
      <span className="text-2xl">{icon}</span>

      <span className="text-sm">{text}</span>
    </Link>
  );
}
