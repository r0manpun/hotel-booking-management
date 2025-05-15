import Form from '../../components/Form';
import FormRow from '../../components/FormRow';
import Input from '../../components/Input';

function UpdateSettingsForm() {
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min-nights'
          defaultValue='minBookingLength'
          onBlur={() => {}}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max-nights'
          defaultValue='maxBookingLength'
          onBlur={() => {}}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max-guests'
          defaultValue='maxGuestsPerBooking'
          onBlur={() => {}}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast-price'
          defaultValue='breakfastPrice'
          onBlur={() => {}}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
