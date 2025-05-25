import styled from 'styled-components';

import ButtonText from '../../components/ButtonText';
import Heading from '../../components/Heading';
import Row from '../../components/Row';
import Spinner from '../../components/Spinner';
import BookingDataBox from '../bookings/BookingDataBox';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../components/Button';

import { useBooking } from '../bookings/useBooking';
import { useMoveBack } from '../../hooks/useMoveBack';

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
