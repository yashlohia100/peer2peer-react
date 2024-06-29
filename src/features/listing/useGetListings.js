import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllListingsApi } from '../../services/apiFunctions';

export function useGetListings() {
  const [searchParams] = useSearchParams();
  const searchParamsString = searchParams.toString();
  const queryClient = useQueryClient();

  const {
    isPending,
    data: listings,
    error,
  } = useQuery({
    queryKey: ['listings'],
    queryFn: () => getAllListingsApi(searchParamsString),
  });

  useEffect(
    function () {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
    [queryClient, searchParamsString],
  );

  return { isPending, listings, error };
}
