import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { updateBooking } from '../../services/apiBookings';

export function useCheckOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      navigate('/bookings');
    },
  });

  return { checkOut, isCheckingOut };
}
