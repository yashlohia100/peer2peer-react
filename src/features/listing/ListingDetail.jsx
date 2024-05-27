import BasicInfo from './listing-ui/BasicInfo';
import PersonInfo from './listing-ui/PersonInfo';

export default function ListingDetail() {
  return (
    <div className="divide-y-2 divide-gray-300 p-4">
      <PersonInfo />
      <BasicInfo />
    </div>
  );
}
