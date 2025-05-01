import Form from '../../components/Form';
import Input from '../../components/Input';

function CabinEditForm() {
  return (
    <Form>
      <Form.Vertical label='Cabin name'>
        <Input
          id='name'
          type='text'
          autoComplete='name'
          placeholder='Enter cabin name'
        />
      </Form.Vertical>
      <Form.Vertical label='Cabin description'>
        <Input
          id='description'
          rows={5}
          placeholder='Enter cabin description'
        />
      </Form.Vertical>
      <Form.Vertical label='Cabin price'>
        <Input
          id='price'
          type='number'
          autoComplete='price'
          placeholder='Enter cabin price'
        />
      </Form.Vertical>
      <Form.Vertical label='Cabin discount'>
        <Input
          id='discount'
          type='number'
          autoComplete='discount'
          placeholder='Enter cabin discount'
        />
      </Form.Vertical>
    </Form>
  );
}

export default CabinEditForm;
