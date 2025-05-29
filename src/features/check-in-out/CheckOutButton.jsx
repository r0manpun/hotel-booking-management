import Button from '../../components/Button';
import { useCheckOut } from './useCheckOut';

function CheckOutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckOut();

  return (
    <Button
      variant='primary'
      size='small'
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}>
      Check Out
    </Button>
  );
}

export default CheckOutButton;
