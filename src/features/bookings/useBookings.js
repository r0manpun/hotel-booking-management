import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getBookings } from '../../services/apiBookings';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  // PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // QUERY
  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getBookings({ filter, page }),
    queryKey: ['bookings', filter, page],
  });

  return {
    bookings,
    isLoading,
    error,
    count,
  };
}
