import { useEffect, useState } from 'react';
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
import { useSettings } from '../settings/useSettings';
import { useCheckin } from './useCheckin';

const Box = styled.div`
  background-color: var(--color-slate-50);
  border: 1px solid var(--color-slate-100);
  padding: 2.4rem 4rem;
  border-radius: var(--border-radius-md);
`;

function CheckInBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isSettingLoading } = useSettings();

  const moveBack = useMoveBack();
  const { checkIn, isCheckingIn } = useCheckin();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  if (isLoading || isSettingLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
  } = booking || {};

  const optionalBreakfastPrice = settings?.breakfastPrice * numGuests;

  function handleCheckIn() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkIn({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type='horizontal'>
        <Heading>Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <CheckBox
            id='breakfast'
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((paid) => !paid);
              setConfirmPaid(false);
            }}>
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}
          </CheckBox>
        </Box>
      )}

      <Box>
        <CheckBox
          id='confirm'
          checked={confirmPaid}
          onChange={() => setConfirmPaid((paid) => !paid)}
          disabled={confirmPaid || isCheckingIn}>
          I confirm that {guests?.fullName} has paid the total amount of{' '}
          {!addBreakfast
            ? totalPrice && formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button
          onClick={handleCheckIn}
          disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
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
