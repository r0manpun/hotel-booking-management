import Heading from '../components/Heading';
import Row from '../components/Row';
import BookingTable from '../features/bookings/BookingTable';

function Bookings() {
  return (
    <>
      <Row typeof='horizontal'>
        <Heading>All Bookings</Heading>
      </Row>
      <Row type='vertical'>
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;
