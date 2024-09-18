import { useMutation } from '@tanstack/react-query';
import { createListingApi } from '../../services/apiFunctions';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreateListing() {
  const navigate = useNavigate();

  const { isPending, mutate: createListing } = useMutation({
    mutationFn: createListingApi,
    onSuccess: (listing) => {
      toast.success('Listing created successfully.');

      setTimeout(() => {
        navigate(`/listings/${listing._id}`);
      }, 1000);
    },
    onError: () => {
      toast.error('Error creating listing.');
    },
  });

  return { isPending, createListing };
}
