import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.div`
  font-weight: 500;
`;

const Error = styled.div`
  font-size: 1.4rem;
  color: var(--color-red-500);
`;

function FormRowVertical({ children, label, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
