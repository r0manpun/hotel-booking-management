import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid var(--color-slate-300);
  background-color: var(--color-slate-50);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    --webkit-background-color: var(--color-slate-50) !important;
  }
`;

export default Input;
