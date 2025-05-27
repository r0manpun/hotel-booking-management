import styled from 'styled-components';

import ButtonText from '../../components/ButtonText';
import Heading from '../../components/Heading';
import Row from '../../components/Row';
import Spinner from '../../components/Spinner';
import BookingDataBox from '../bookings/BookingDataBox';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';

import { useBooking } from '../bookings/useBooking';
import { useMoveBack } from '../../hooks/useMoveBack';
import { formatCurrency } from '../../utils/helper';

const Box = styled.div`
  background-color: var(--color-slate-50);
  border: 1px solid var(--color-slate-100);
  padding: 2.4rem 4rem;
  border-radius: var(--border-radius-md);
`;

function CheckInBooking() {
  const { booking, isLoading } = useBooking();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
  } = booking || {};

  return (
    <>
      <Row type='horizontal'>
        <Heading>Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <CheckBox>
          I confirm that {guests?.fullName} has paid the total amount of{' '}
          {formatCurrency(totalPrice)}
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button onClick={() => {}}>Check in booking #{bookingId}</Button>
        <Button
          variation='secondary'
          onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckInBooking;
