import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      const { cabins, guests } = data;
      toast.success(
        `${guests.fullName}'s booking for cabin ${cabins.name} was deleted`
      );
      queryClient.invalidateQueries({ active: true });
    },
    onError: (data, error) => {
      toast.error(`Error deleting booking ${data.id}`);
    },
  });

  return { deleteBooking, isDeleting };
}
