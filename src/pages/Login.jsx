import styled from 'styled-components';
import Logo from '../ui/Logo';
import Heading from '../components/Heading';
import LoginForm from '../features/authentication/LoginForm';

const LoginLayout = styled.div`
  min-height: 100vh;
  grid-template-columns: 48rem;
  background-color: var(--color-slate-0);
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as='h4'>Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}
export default Login;
