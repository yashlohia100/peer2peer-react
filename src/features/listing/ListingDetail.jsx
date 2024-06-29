import BasicInfo from './listing-ui/BasicInfo';
import Carousel from './listing-ui/Carousel';
import ExtraInfo from './listing-ui/ExtraInfo';
import Facilities from './listing-ui/Facilities';
import PersonInfo from './listing-ui/PersonInfo';
import Preferences from './listing-ui/Preferences';
import { useGetListing } from './useGetListing';

export default function ListingDetail() {
  const { isPending, listing, error } = useGetListing();

  if (isPending) {
    return <div>Loading...</div>;
  }

  console.log(listing);

  const {
    user,
    location,
    lookingFor,
    occupancy,
    rent,
    preferences,
    facilities,
    highlights,
    description,
    images,
  } = listing;

  return (
    <div className="min-h-screen p-4 lg:grid lg:grid-cols-[1fr_2fr]">
      <div className="border-b-2 border-gray-300 lg:mt-20 lg:border-none">
        <PersonInfo user={user} location={location} />
      </div>

      <div className="divide-y-2 divide-gray-300">
        <BasicInfo
          gender={user.gender}
          rent={rent}
          occupancy={occupancy}
          lookingFor={lookingFor}
        />

        {images.length > 0 && <Carousel images={images} />}

        <Preferences preferences={preferences} />

        {facilities.length > 0 && <Facilities facilities={facilities} />}

        <ExtraInfo highlights={highlights} />
      </div>
    </div>
  );
}
