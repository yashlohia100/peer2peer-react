import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllListingsApi } from '../../services/apiFunctions';

export function useGetListings() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const city = searchParams.get('city');

  const {
    isPending,
    data: listings,
    error,
  } = useQuery({
    queryKey: ['listings'],
    queryFn: () => getAllListingsApi(type, city),
  });

  const queryClient = useQueryClient();

  useEffect(
    function () {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
    [type, city, queryClient],
  );

  return { isPending, listings, error };
}
