import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => {
      createEditCabin(newCabinData, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
  });

  return { updateCabin, isEditing };
}
