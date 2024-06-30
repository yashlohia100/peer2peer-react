import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginApi } from '../../services/apiFunctions';

export function useLogin() {
  const navigate = useNavigate();

  const { isPending, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success('Logged in successfully.');

      setTimeout(() => {
        navigate(-1);
      }, 1000);
    },
    onError: () => {
      toast.error('Error logging in!');
    },
  });

  return { isPending, login };
}
