import { useNavigate } from 'react-router-dom';
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from 'react-icons/hi2';
import { format, isToday } from 'date-fns';
import styled from 'styled-components';

import Table from '../../components/Table';
import Tag from '../../components/Tag';
import Menus from '../../components/Menus';
import Modal from '../../components/Modal';
import ConfirmDelete from '../../components/ConfirmDelete';

import { formatCurrency, formatDistanceFromNow } from '../../utils/helper';
import { useCheckOut } from '../check-in-out/useCheckOut';
import { useDeleteBooking } from './useDeleteBooking';

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Sono';
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;

  & span:first-child {
    font-weight: 600;
  }
  & span:last-child {
    font-size: 1.2rem;
    color: var(--color-slate-500);
  }
`;

const Amount = styled.div.withConfig({
  shouldForwardProp: (props) => props !== 'isPaid',
})`
  font-weight: 500;
  font-family: 'Sono';

  color: ${(props) =>
    props.isPaid ? 'var(--color-green-100)' : 'var(--color-red-500)'};
`;

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    isPaid,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();

  const { checkOut, isCheckingOut } = useCheckOut();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: 'sky',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <Table.Row>
        <Cabin>{cabinName}</Cabin>

        <Stacked>
          <span>{guestName}</span>
          <span>{email}</span>
        </Stacked>

        <Stacked>
          <span>
            {isToday(new Date(startDate))
              ? 'Today'
              : formatDistanceFromNow(startDate)}{' '}
            &rarr;{' '}
            {numNights === 1 ? numNights + ' night' : numNights + ' nights'}{' '}
            stay
          </span>
          <span>
            {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
            {format(new Date(endDate), 'MMM dd yyyy')}
          </span>
        </Stacked>

        <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

        <Amount isPaid={isPaid}>{formatCurrency(totalPrice)}</Amount>

        <Modal>
          <Menus.Menu>
            <Menus.Toogle id={bookingId} />
            <Menus.List id={bookingId}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/bookings/${bookingId}`)}>
                See Details
              </Menus.Button>

              {status === 'unconfirmed' && (
                <Menus.Button
                  icon={<HiArrowDownOnSquare />}
                  onClick={() => navigate(`/checkin/${bookingId}`)}>
                  Check in
                </Menus.Button>
              )}

              {status === 'checked-in' && (
                <Menus.Button
                  icon={<HiArrowUpOnSquare />}
                  onClick={() => checkOut(bookingId)}
                  disabled={isCheckingOut}>
                  Check out
                </Menus.Button>
              )}

              <Modal.Open opens='delete'>
                <Menus.Button icon={<HiTrash />}>Delete Booking</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name='delete'>
            <ConfirmDelete
              resourceName='booking'
              onConfirm={() => deleteBooking(bookingId)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </Table.Row>
    </>
  );
}

export default BookingRow;
