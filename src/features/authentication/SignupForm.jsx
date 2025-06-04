import Button from '../../components/Button';
import Form from '../../components/Form';
import FormRow from '../../components/FormRow';
import Input from '../../components/Input';

function SignupForm() {
  return (
    <Form>
      <FormRow label='Full Name'>
        <Input
          type='text'
          id='fullName'
        />
      </FormRow>
      <FormRow label='Email address'>
        <Input
          type='email'
          id='email'
        />
      </FormRow>
      <FormRow label='Password'>
        <Input
          type='password'
          id='password'
        />
      </FormRow>
      <FormRow label='Confirm password'>
        <Input
          type='password'
          id='passwordConfirm'
        />
      </FormRow>

      <FormRow>
        <Button
          variation='secondary'
          type='reset'>
          Cancel
        </Button>
        <Button
          type='submit'
          variation='primary'>
          Create new user
        </Button>
      </FormRow>
    </Form>
  );
}
export default SignupForm;
