import styled from 'styled-components';

const ButtonText = styled.button`
  color: var(--color-brand-600);
  font-weight: 500;
  background: none;
  text-align: center;
  border: none;
  transition: all 0.3s;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText;
