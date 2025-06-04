import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { updateBooking } from '../../services/apiBookings';

export function useCheckin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: checkIn, isPending: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      const { guests, cabins } = data;
      toast.success(
        `${guests.fullName} was checked in to cabin "${cabins.name}"`
      );
      queryClient.invalidateQueries({ active: true });
      navigate('/bookings');
    },
    onError: (error) => {
      toast.error(
        error.message || 'An error occurred while checking in the booking'
      );
    },
  });

  return { checkIn, isCheckingIn };
}
