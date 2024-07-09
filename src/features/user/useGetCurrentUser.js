import { useQuery } from '@tanstack/react-query';
import { getCurrentUserApi } from '../../services/apiFunctions';

export function useGetCurrentUser() {
  const {
    isPending,
    data: user,
    error,
  } = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUserApi,
    // staleTime: 60000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { isPending, user, error };
}
