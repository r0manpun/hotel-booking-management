import { useState } from 'react';

import Button from '../../components/Button';
import FileInput from '../../components/FileInput';
import Form from '../../components/Form';
import FormRow from '../../components/FormRow';
import Input from '../../components/Input';

import { useUser } from './useUser';

function UpdateUserData() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName || '');
  const [avatar, setAvatar] = useState(null);

  return (
    <Form>
      <FormRow label='Email address'>
        <Input
          id='email'
          type='email'
          value={email}
          disabled
        />
      </FormRow>
      <FormRow label='Full name'>
        <Input
          id='fullName'
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}

        />
      </FormRow>
      <FormRow label='Avtar image'>
        <FileInput
          id='avatar'
          type='file'
          accept='image/*'
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button
          type='reset'
          variation='secondary'>
          Cancel
        </Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserData;
