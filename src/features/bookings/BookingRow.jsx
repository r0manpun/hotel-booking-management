import { useNavigate } from 'react-router-dom';
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from 'react-icons/hi2';
import styled from 'styled-components';

import Table from '../../components/Table';
import Tag from '../../components/Tag';
import Menus from '../../components/Menus';
import Modal from '../../components/Modal';
import ConfirmDelete from '../../components/ConfirmDelete';

import { formatCurrency } from '../../utils/helper';
import { useCheckOut } from '../check-in-out/useCheckOut';

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
          <span>{startDate}</span>
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
              onConfirm={() => {}}
            />
          </Modal.Window>
        </Modal>
      </Table.Row>
    </>
  );
}

export default BookingRow;
