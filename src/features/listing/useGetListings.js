import { useQuery } from '@tanstack/react-query';
import { getAllListingsApi } from '../../services/apiFunctions';
import { useSearchParams } from 'react-router-dom';

export function useGetListings() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  const {
    isPending,
    data: listings,
    error,
  } = useQuery({
    queryKey: ['listings'],
    queryFn: () => getAllListingsApi(type),
  });

  return { isPending, listings, error };
}
