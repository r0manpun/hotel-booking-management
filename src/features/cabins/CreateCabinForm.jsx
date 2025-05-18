import Button from '../../components/Button';
import Form from '../../components/Form';
import FormRow from '../../components/FormRow';
import Input from '../../components/Input';

function CreateCabinForm() {
  return (
    <Form>
      <FormRow label='Cabin name'>
        <Input
          id='name'
          type='text'
          autoComplete='name'
          placeholder='Enter cabin name'
        />
      </FormRow>
      <FormRow label='Maximum capacity'>
        <Input
          id='description'
          type='number'
          placeholder='Enter cabin description'
        />
      </FormRow>
      <FormRow label='Regular price'>
        <Input
          id='price'
          type='number'
          autoComplete='price'
          placeholder='Enter cabin price'
        />
      </FormRow>
      <FormRow label='Discount'>
        <Input
          id='discount'
          type='number'
          defaultValue={0}
          placeholder='Enter cabin discount'
        />
      </FormRow>

      <FormRow label='Description'>
        <Input
          id='description'
          type='text'
          defaultValue=''
          placeholder='Enter cabin discount'
        />
      </FormRow>
      <FormRow label='Cabin photo'>
        <Input type='file' />
      </FormRow>

      <FormRow>
        <Button
          variation='secondary'
          size='medium'
          type='reset'>
          Cancel
        </Button>
        <Button
          variation='primary'
          size='medium'>
          Edit cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
