import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';

const StyledConfirmDelete = styled.div`
  width: 40rem;
  gap: 1.2rem;
  display: flex;
  flex-direction: column;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as='h3'>Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName}
        <br /> <strong>permanently</strong>?<br />
        <em>This action cannot be undone.</em>
      </p>

      <div>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onConfirm}>Delete</Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
