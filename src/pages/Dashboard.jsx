import Heading from '../components/Heading';
import Row from '../components/Row';
import DashboardLayout from '../features/dashboard/DashboardLayout';

function Dashboard() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Dashboard</Heading>
      </Row>

      <DashboardLayout />
    </>
  );
}
export default Dashboard;
