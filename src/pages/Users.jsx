import Heading from '../components/Heading';
import Row from '../components/Row';
import SignupForm from '../features/authentication/SignupForm';

function Users() {
  return (
    <Row>
      <Heading as='h1'>Create new users</Heading>
      <SignupForm />
    </Row>
  );
}
export default Users;
