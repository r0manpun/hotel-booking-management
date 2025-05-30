import { useQuery } from '@tanstack/react-query';

import { getBookings } from '../../services/apiBookings';

export function useBookings() {
  const {
    data: { data: bookings, count },
    isLoading,
    error,
  } = useQuery({
    queryFn: getBookings,
    queryKey: ['bookings'],
  });

  return {
    bookings,
    isLoading,
    error,
    count,
  };
}
