import Heading from '../components/Heading';
import Row from '../components/Row';
import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';

function Bookings() {
  return (
    <>
      <Row>
        <Heading>All Bookings</Heading>
        <BookingTableOperations />
      </Row>
      <Row type='vertical'>
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;
