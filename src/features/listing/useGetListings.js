import { useQuery } from '@tanstack/react-query';
import { getAllListingsApi } from '../../services/apiFunctions';

export function useGetListings() {
  const {
    isPending,
    data: listings,
    error,
  } = useQuery({
    queryKey: ['listings'],
    queryFn: getAllListingsApi,
  });

  return { isPending, listings, error };
}
