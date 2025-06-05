import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Form from '../../components/Form';
import FormRow from '../../components/FormRow';
import Input from '../../components/Input';
import SpinnerMini from '../../components/SpinnerMini';

import { useSignup } from './useSignup';

function SignupForm() {
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;
  const { signUp, isSigning } = useSignup();

  function onSubmit({ fullName, email, password }) {
    signUp({ fullName, email, password }, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label='Full Name'
        error={errors?.fullName?.message}>
        <Input
          type='text'
          id='fullName'
          disabled={isSigning}
          {...register('fullName', {
            required: 'Full name is required',
          })}
        />
      </FormRow>
      <FormRow
        label='Email address'
        error={errors?.email?.message}>
        <Input
          type='email'
          id='email'
          disabled={isSigning}
          {...register('email', {
            required: 'Email address is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          })}
        />
      </FormRow>
      <FormRow
        label='Password'
        error={errors?.password?.message}>
        <Input
          type='password'
          id='password'
          disabled={isSigning}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
      </FormRow>
      <FormRow
        label='Confirm password'
        error={errors?.passwordConfirm?.message}>
        <Input
          type='password'
          id='passwordConfirm'
          disabled={isSigning}
          {...register('passwordConfirm', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation='secondary'
          type='reset'
          onClick={reset}
          disabled={isSigning}>
          Cancel
        </Button>
        <Button
          type='submit'
          variation='primary'
          disabled={isSigning}>
          {!isSigning ? 'Create new user' : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}
export default SignupForm;
