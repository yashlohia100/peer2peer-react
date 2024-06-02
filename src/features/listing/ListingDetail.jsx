import BasicInfo from './listing-ui/BasicInfo';
import Carousel from './listing-ui/Carousel';
import Facilities from './listing-ui/Facilities';
import PersonInfo from './listing-ui/PersonInfo';
import Preferences from './listing-ui/Preferences';

export default function ListingDetail() {
  return (
    <div className="divide-y-2 divide-gray-300 p-4">
      <PersonInfo />
      <BasicInfo />
      <Carousel />
      <Preferences />
      <Facilities />
    </div>
  );
}
