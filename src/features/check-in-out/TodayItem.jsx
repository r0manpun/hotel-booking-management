import styled from 'styled-components';
import Tag from '../../components/Tag';
import Flag from '../../components/Flag';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import CheckOutButton from './CheckOutButton';

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 8rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;

  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-slate-100);

  &:first-child {
    border-top: 1px solid var(--color-slate-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type='green'>Arrived</Tag>}
      {status === 'checked-in' && <Tag type='blue'>Departing</Tag>}

      <Flag
        src={guests.countryFlag}
        alt={`Flag of ${guests.country}`}
      />

      <Guest>{guests.fullName}</Guest>
      <div>{numNights}</div>

      {status === 'unconfirmed' && (
        <Button
          size='small'
          variation='primary'
          as={Link}
          to={`/checkin/${id}`}>
          Check in
        </Button>
      )}

      {status === 'checked-in' && <CheckOutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
