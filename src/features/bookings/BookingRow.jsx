import styled from 'styled-components';
import Table from '../../components/Table';

const Cabin = styled.div``;

const Stacked = styled.div``;

const Amount = styled.div``;

const Tag = styled.span``;

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName:guestName, email },
    cabins: { name: cabinName },
  },
}) {
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

      <Tag>{status}</Tag>

      <Amount>{totalPrice}</Amount>
    </Table.Row>
  );
}

export default BookingRow;
