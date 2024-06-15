import BasicInfo from './listing-ui/BasicInfo';
import Carousel from './listing-ui/Carousel';
import ExtraInfo from './listing-ui/ExtraInfo';
import Facilities from './listing-ui/Facilities';
import PersonInfo from './listing-ui/PersonInfo';
import Preferences from './listing-ui/Preferences';

export default function ListingDetail() {
  return (
    <div className="p-4 lg:grid lg:grid-cols-[1fr_2fr]">
      <div className="border-b-2 border-gray-300 lg:mt-20 lg:border-none">
        <PersonInfo />
      </div>

      <div className="divide-y-2 divide-gray-300">
        <BasicInfo />
        <Carousel />
        <Preferences />
        <Facilities />
        <ExtraInfo />
      </div>
    </div>
  );
}
