import { add } from 'date-fns';

import Menus from '../../components/Menus';
import Table from '../../components/Table';
import BookingRow from './BookingRow';
import Spinner from '../../components/Spinner';

import { useBookings } from './useBookings';

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

const fakeBookings = [
  // CABIN 001
  {
    totalPrice: 600,
    created_at: fromToday(-20, true),
    startDate: fromToday(0),
    endDate: fromToday(7),
    cabins: { name: '001' },
    guests: { fullName: 'John', email: 'john@test.com' },
    hasBreakfast: true,
    status: 'unconfirmed',
    observations:
      'I have a gluten allergy and would like to request a gluten-free breakfast.',
    isPaid: false,
    numGuests: 1,
    id: 1,
  },
  {
    totalPrice: 2600,

    created_at: fromToday(-33, true),
    startDate: fromToday(-23),
    endDate: fromToday(-13),
    cabins: { name: '002' },
    guests: { fullName: 'Luffy', email: 'luffy@test.com' },
    hasBreakfast: true,
    observations: '',
    isPaid: true,
    status: 'checked-in',
    numGuests: 2,
    id: 2,
  },
  {
    totalPrice: 1200,

    created_at: fromToday(-30, true),
    startDate: fromToday(-28),
    endDate: fromToday(-20),
    cabins: { name: '002' },
    guests: { fullName: 'Nami', email: 'nami@test.com' },
    hasBreakfast: true,
    observations: '',
    isPaid: true,
    status: 'checked-out',
    numGuests: 2,
    id: 2,
  },
];

function BookingTable() {
  const { bookings, isLoading } = useBookings();

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
          data={bookings || fakeBookings}
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
