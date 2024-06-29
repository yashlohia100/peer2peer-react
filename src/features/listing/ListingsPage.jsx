import { useState } from 'react';
import Button from '../../ui/Button';
import SelectLocation from '../../ui/SelectLocation';
import Listing from './Listing';
import ListingNavbar from './ListingNavbar';
import { useGetListings } from './useGetListings';
import { useSearchParams } from 'react-router-dom';

export default function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;

  function handlePrevious() {
    searchParams.set('page', page === 1 ? 1 : page - 1);
    setSearchParams(searchParams);
  }

  function handleNext() {
    searchParams.set('page', page + 1);
    setSearchParams(searchParams);
  }

  const { isPending, listings, error } = useGetListings();

  if (isPending) {
    return <div>Loading...</div>;
  }

  // console.log(listings);

  return (
    <div className="min-h-screen px-6 pt-4">
      <div className="flex flex-col gap-6 border-b border-gray-300 pb-1 lg:flex-row-reverse lg:justify-between lg:pb-2 lg:pt-6">
        <SelectLocation />
        <ListingNavbar />
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-12 lg:gap-10">
        {listings.map((listing) => (
          <Listing key={listing._id} listingObj={listing} />
        ))}
      </ul>

      <div>
        <Button variant="small" onClick={handlePrevious}>
          Prev
        </Button>

        <span>{page}</span>

        <Button variant="small" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
