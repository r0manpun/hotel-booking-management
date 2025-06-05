import Heading from '../components/Heading';
import Row from '../components/Row';
import UpdateUserData from '../features/authentication/UpdateUserData';

function Account() {
  return (
    <>
      <Heading as='h1'>Update your account</Heading>
      <Row>
        <Heading as='h3'>Update user data</Heading>
        <UpdateUserData />
      </Row>
    </>
  );
}
export default Account;
