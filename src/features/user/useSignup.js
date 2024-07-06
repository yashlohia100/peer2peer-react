import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { signupApi } from '../../services/apiFunctions';

export function useSignup() {
  const navigate = useNavigate();

  const { isPending, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success('Signed up successfully.');

      setTimeout(() => {
        navigate(-1);
      }, 1000);
    },
    onError: () => {
      toast.error('Error signing up!');
    },
  });

  return { isPending, signup };
}
