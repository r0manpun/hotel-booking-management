import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (error) => {
      toast.error(
        error.message || 'An error occurred while creating the cabin'
      );
    },
  });

  return { createCabin, isCreating };
}
