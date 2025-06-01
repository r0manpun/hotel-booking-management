import styled from 'styled-components';

const ButtonIcon = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0.6rem;

  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-slate-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.3rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
