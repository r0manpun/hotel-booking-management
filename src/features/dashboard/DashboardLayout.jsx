import styled from 'styled-components';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <p>Stats</p>
      <p>TodayActivity</p>
      <p>DurationChart</p>
      <p>SalesChart</p>
    </StyledDashboardLayout>
  );
}
export default DashboardLayout;
