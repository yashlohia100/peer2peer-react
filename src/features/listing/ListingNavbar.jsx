import {
  HiOutlineHome,
  HiOutlineQueueList,
  HiOutlineUsers,
} from 'react-icons/hi2';
import ListingNavbarItem from './ListingNavbarItem';

export default function ListingNavbar() {
  return (
    <nav className="flex items-center justify-center gap-4">
      <ListingNavbarItem icon={<HiOutlineQueueList />} text="All Listings" />

      <ListingNavbarItem icon={<HiOutlineHome />} text="Rooms" />

      <ListingNavbarItem icon={<HiOutlineUsers />} text="Roommates" />
    </nav>
  );
}
