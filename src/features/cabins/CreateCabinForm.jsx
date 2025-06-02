import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import FileInput from '../../components/FileInput';
import Form from '../../components/Form';
import FormRow from '../../components/FormRow';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

function CreateCabinForm({ onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? 'modal' : 'regular'}>
      <FormRow
        label='Cabin name'
        error={errors?.name?.message}>
        <Input
          id='name'
          type='text'
          {...register('name', { required: 'This field is required!' })}
        />
      </FormRow>
      <FormRow
        label='Maximum capacity'
        error={errors?.maxCapacity?.message}>
        <Input
          id='maxCapacity'
          type='number'
          {...register('maxCapacity', {
            required: 'This field is required!',
            min: {
              value: 1,
              message: 'Capacity must be at least 1.',
            },
          })}
        />
      </FormRow>
      <FormRow
        label='Regular price'
        error={errors?.regularPrice?.message}>
        <Input
          id='regularPrice'
          type='number'
          {...register('regularPrice', {
            required: 'This field is required!',
            min: {
              value: 1,
              message: 'Price must be at least 1.',
            },
          })}
        />
      </FormRow>
      <FormRow
        label='Discount'
        error={errors?.discount?.message}>
        <Input
          id='discount'
          type='number'
          defaultValue={0}
          {...register('discount', {
            validate: (value) =>
              value < +getValues().regularPrice ||
              'Discount should be less then regular price!',
          })}
        />
      </FormRow>

      <FormRow
        label='Description'
        error={errors?.name?.message}>
        <TextArea
          id='description'
          type='text'
          defaultValue=''
          {...register('description', { required: 'This field is required!' })}
        />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput
          type='file'
          id='image'
          accept='image/*'
          {...register('image', {
            required: 'This field is required!',
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation='secondary'
          size='medium'
          type='reset'
          onClick={() => onCloseModal?.()}>
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
