import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => {
      createEditCabin(newCabinData, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (error) => {
      toast.error(
        error.message || 'An error occurred while updating the cabin'
      );
    },
  });

  return { updateCabin, isEditing };
}
