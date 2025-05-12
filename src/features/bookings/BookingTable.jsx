import { useBookings } from './useBookings';
import { add } from 'date-fns';

import Menus from '../../components/Menus';
import Table from '../../components/Table';
import BookingRow from './BookingRow';
import Spinner from '../../components/Spinner';

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

const fakeBookings = [
  // CABIN 001
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(0),
    endDate: fromToday(7),
    cabinId: 1,
    guestId: 2,
    hasBreakfast: true,
    observations:
      'I have a gluten allergy and would like to request a gluten-free breakfast.',
    isPaid: false,
    numGuests: 1,
  },
  {
    created_at: fromToday(-33, true),
    startDate: fromToday(-23),
    endDate: fromToday(-13),
    cabinId: 1,
    guestId: 3,
    hasBreakfast: true,
    observations: '',
    isPaid: true,
    numGuests: 2,
  },
];

function BookingTable() {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <Spinner />;

  let testbooking = bookings === 'undefined' ? fakeBookings : bookings;

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2fr 1fr 1fr 0.6fr'>
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Date</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={testbooking}
          render={(booking) => (
            <BookingRow
              key={booking?.id}
              booking={booking}
            />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
