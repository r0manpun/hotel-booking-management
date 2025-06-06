import Heading from '../components/Heading';
import Row from '../components/Row';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';
import UpdateUserData from '../features/authentication/UpdateUserDataForm';

function Account() {
  return (
    <>
      <Heading as='h1'>Update your account</Heading>
      <Row>
        <Heading as='h3'>Update user data</Heading>
        <UpdateUserData />
      </Row>
      <Row>
        <Heading as='h3'>Update user password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}
export default Account;
