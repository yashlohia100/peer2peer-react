import SelectLocation from '../../ui/SelectLocation';
import ListingNavbar from './ListingNavbar';

export default function ListingsPage() {
  return (
    <div className="px-2 pt-4">
      <div className="flex flex-col gap-6 border-b border-gray-300 pb-1 lg:flex-row-reverse lg:justify-between lg:pb-2 lg:pt-6">
        <SelectLocation />
        <ListingNavbar />
      </div>
    </div>
  );
}
