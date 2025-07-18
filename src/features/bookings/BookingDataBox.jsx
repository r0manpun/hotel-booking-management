import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import { format, isToday } from 'date-fns';
import styled from 'styled-components';

import DataItem from '../../components/DataItem';
import Flag from '../../components/Flag';

import { formatCurrency, formatDistanceFromNow } from '../../utils/helper';

const StyledBookingDataBox = styled.section`
  background-color: var(--color-slate-0);
  border: 1px solid var(--color-slate-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.div`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-brand-50);

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
  }

  & span {
    font-family: 'Sono';
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-slate-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-slate-700);
  }
`;

const Price = styled.div.withConfig({
  shouldForwardProp: (props) => props !== 'isPaid',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  margin-top: 2.4rem;
  border-radius: var(--border-radius-sm);

  background-color: ${(props) =>
    props.isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
  color: ${(props) =>
    props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};

  */ & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-slate-500);
  text-align: right;
`;

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: {
      fullName: guestFullName,
      email,
      country,
      countryFlag,
      nationalID,
    } = {},
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>
        {startDate && (
          <p>
            {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
            {isToday(new Date(startDate))
              ? 'Today'
              : formatDistanceFromNow(startDate)}
            ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
          </p>
        )}
      </Header>

      <Section>
        <Guest>
          {countryFlag && (
            <Flag
              src={countryFlag}
              alt={`Flag of ${country}`}
            />
          )}
          <p>
            {guestFullName}
            {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </Guest>

        <DataItem
          icon={<HiOutlineChatBubbleBottomCenterText />}
          label={'Observations: '}>
          {observations !== '' ? observations : 'No observations yet.'}
        </DataItem>

        <DataItem
          icon={<HiOutlineCheckCircle />}
          label={'Breakfast included?'}>
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem
            icon={<HiOutlineCurrencyDollar />}
            label={'Total price: '}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              `(${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? 'Paid' : 'Will pay at property'}</p>
        </Price>
      </Section>

      <Footer>
        <p>
          Booked{' '}
          {created_at && format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
        </p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
