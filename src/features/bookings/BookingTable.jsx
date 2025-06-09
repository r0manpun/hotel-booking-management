import Menus from '../../components/Menus';
import Table from '../../components/Table';
import BookingRow from './BookingRow';
import Spinner from '../../components/Spinner';
import Pagination from '../../ui/Pagination';

import { useBookings } from './useBookings';

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns='0.6fr 2fr 2.2fr 1fr 1fr 0.6fr'>
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Date</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow
              key={booking?.id}
              booking={booking}
            />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
