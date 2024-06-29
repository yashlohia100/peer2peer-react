import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getListingApi } from '../../services/apiFunctions';

export function useGetListing() {
  const { listingId } = useParams();

  const {
    isPending,
    data: listing,
    error,
  } = useQuery({
    queryKey: ['listing'],
    queryFn: () => getListingApi(listingId),
    refetchOnWindowFocus: false,
  });

  return { isPending, listing, error };
}
