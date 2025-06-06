import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormRow from '../../components/FormRow';
import Input from '../../components/Input';

import { useUpdateUser } from './useUpdateUser';

function UpdatePasswordForm() {
  const { register, reset, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();
  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label='New password (min 8 chars)'
        error={errors?.password?.message}>
        <Input
          type='password'
          autoComplete='current-password'
          id='password'
          disabled={isUpdating}
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
        label='Password confirm'
        error={errors?.confirmPassword?.message}>
        <Input
          type='password'
          id='confirmPassword'
          autoComplete='new-password'
          disabled={isUpdating}
          {...register('confirmPassword', {
            required: 'Confirm password is required',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          type='reset'
          variation='secondary'
          onClick={reset}
          disabled={isUpdating}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
