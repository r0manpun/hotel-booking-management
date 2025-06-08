import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useCheckOut() {
  const queryClient = useQueryClient();

  const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),
    onSuccess: (data) => {
      const { guests } = data;
      toast.success(`${guests.fullName} was checked out!`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      toast.error(
        error.message || 'An error occurred while checking out the booking'
      );
    },
  });

  return { checkOut, isCheckingOut };
}
