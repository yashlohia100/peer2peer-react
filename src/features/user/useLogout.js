import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logoutApi } from '../../services/apiFunctions';
import toast from 'react-hot-toast';

export function useLogout() {
  const queryClient = useQueryClient();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success('Logged out successfully.');
      queryClient.resetQueries({ queryKey: ['currentUser'] });
    },
    onError: () => {
      toast.error('Error logging out.');
    },
  });

  return { isPending, logout };
}
