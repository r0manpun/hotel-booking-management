import { useState } from 'react';

import Form from '../../../components/Form';
import FormRowVertical from '../../../components/FormRowVertical';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import SpinnerMini from '../../../components/SpinnerMini';

import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isPending, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return alert('Please fill in all fields');

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          id='email'
          type='email'
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input
          id='password'
          type='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button
          size='large'
          disabled={isPending}>
          {!isPending ? 'Login' : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}
export default LoginForm;
