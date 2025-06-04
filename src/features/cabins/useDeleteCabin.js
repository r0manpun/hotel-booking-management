import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, isPending: isDeleting } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: (data) => {
      toast.success(`Cabin "${data.name}" deleted successfully`);
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (error) => {
      toast.error(
        error.message || 'An error occurred while deleting the cabin'
      );
    },
  });

  return { deleteCabin, isDeleting };
}
