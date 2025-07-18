import { add } from 'date-fns';
import styled from 'styled-components';

import Heading from '../../components/Heading';
import Row from '../../components/Row';
import Tag from '../../components/Tag';
import ButtonText from '../../components/ButtonText';
import Spinner from '../../components/Spinner';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import BookingDataBox from './BookingDataBox';
import ConfirmDelete from '../../components/ConfirmDelete';
import CheckOutButton from '../check-in-out/CheckOutButton';

import { useBooking } from './useBooking';
import { useMoveBack } from '../../hooks/useMoveBack';

const HeadingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

const booking = {
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
};

function BookingDetails() {
  const { booking, isLoading } = useBooking();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: 'sky',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h4'>Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'checked-in' && <CheckOutButton bookingId={bookingId}/>}
        <Modal>
          <Modal.Open opens='delete'>
            <Button variation='danger'>Delete</Button>
          </Modal.Open>

          <Modal.Window name='delete'>
            <ConfirmDelete
              resourceName='booking'
              onConfirm={() => {}}
            />
          </Modal.Window>
        </Modal>
        <Button
          variation='secondary'
          onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetails;
