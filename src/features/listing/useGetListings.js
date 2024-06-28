import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllListingsApi } from '../../services/apiFunctions';

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

  const queryClient = useQueryClient();

  useEffect(
    function () {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
    [type, queryClient],
  );

  return { isPending, listings, error };
}
