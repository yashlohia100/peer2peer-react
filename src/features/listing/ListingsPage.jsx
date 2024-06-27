import SelectLocation from '../../ui/SelectLocation';
import Listing from './Listing';
import ListingNavbar from './ListingNavbar';
import { useGetListings } from './useGetListings';

export default function ListingsPage() {
  const { isPending, listings, error } = useGetListings();

  if (isPending) {
    return <div>Loading...</div>;
  }

  console.log(listings);

  return (
    <div className="min-h-screen px-6 pt-4">
      <div className="flex flex-col gap-6 border-b border-gray-300 pb-1 lg:flex-row-reverse lg:justify-between lg:pb-2 lg:pt-6">
        <SelectLocation />
        <ListingNavbar />
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-12 lg:gap-10">
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </ul>
    </div>
  );
}
