import { useMutation } from '@tanstack/react-query';
import { createListingApi } from '../../services/apiFunctions';
import toast from 'react-hot-toast';

export function useCreateListing() {
  const { isPending, mutate: createListing } = useMutation({
    mutationFn: createListingApi,
    onSuccess: () => {
      toast.success('Listing created successfully.');
    },
    onError: () => {
      toast.error('Error creating listing.');
    },
  });

  return { isPending, createListing };
}
