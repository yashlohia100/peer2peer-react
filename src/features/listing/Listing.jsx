import { HiMapPin } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function Listing() {
  return (
    <Link
      to="#"
      className="flex rounded-lg border border-gray-300 shadow-md transition duration-300 md:hover:scale-105"
    >
      <div>
        <img
          src="profile-photo.jpg"
          alt="listing-image"
          className="h-40 w-32 rounded-lg object-cover lg:w-40"
        />
      </div>

      <div className="flex grow flex-col justify-between px-4 py-2 text-xs text-gray-500 lg:text-sm">
        <div>
          <h3 className="text-lg font-medium lg:text-xl">Yash Lohia</h3>
          <p className="mt-1 flex items-center gap-1 text-gray-500/80">
            <span className="text-sm lg:text-base">
              <HiMapPin />
            </span>
            <span>Rohini, New Delhi</span>
          </p>
        </div>

        <p className="lg:hidden">
          <span className="mr-1 text-sm font-bold">₹10,000</span>
          <span>Rent</span>
        </p>

        <div className="flex items-center justify-between pb-1">
          <p className="hidden lg:flex lg:flex-col">
            <span>Rent</span>
            <span className="text-sm font-semibold lg:text-base">₹10,000</span>
          </p>

          <p className="flex flex-col">
            <span>Looking for</span>
            <span className="text-sm font-semibold lg:text-base">Male</span>
          </p>

          <p className="flex flex-col">
            <span>Looking for</span>
            <span className="text-sm font-semibold lg:text-base">Roommate</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
