import styled from 'styled-components';

import Table from '../../components/Table';

import { formatCurrency } from '../../utils/helper';
import Tag from '../../components/Tag';

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
  const statusToTagName = {
    unconfirmed: 'sky',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
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
    </Table.Row>
  );
}

export default BookingRow;
