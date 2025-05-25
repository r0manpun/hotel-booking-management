import styled from 'styled-components';

import Table from '../../components/Table';

import { formatCurrency } from '../../utils/helper';
import Tag from '../../components/Tag';
import Menus from '../../components/Menus';
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from 'react-icons/hi2';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';

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

const Amount = styled.div`
  font-weight: 500;
  font-family: 'Sono';
`;

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: 'sky',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      {' '}
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

        <Amount>{formatCurrency(totalPrice)}</Amount>

        <Modal>
          <Menus.Menu>
            <Menus.Toogle id={bookingId} />
            <Menus.List id={bookingId}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/bookings/${bookingId}`)}>
                See Details
              </Menus.Button>

              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}>
                Check in
              </Menus.Button>

              <Menus.Button icon={<HiArrowUpOnSquare />}>
                Check out
              </Menus.Button>

              <Modal.Open opens='delete'>
                <Menus.Button icon={<HiTrash />}>Delete Booking</Menus.Button>
              </Modal.Open>

              <Modal.Window name='delete'>
                <div>Are you sure you want to delete #{bookingId}?</div>
              </Modal.Window>
            </Menus.List>
          </Menus.Menu>
        </Modal>
      </Table.Row>
    </>
  );
}

export default BookingRow;
