import styled, { css } from 'styled-components';

const Form = styled.form
  .withConfig({
    shouldForwardProp: (props) => !props.includes('type'),
  })
  .attrs((props) => ({ type: props.type || 'regular' }))`
  ${(props) =>
    props.type === 'regular' &&
    css`
      padding: 2.4rem 4rem;

      background-color: var(--color-slate-50);
      /* border: 1px solid var(--color-slate-100); */
      border-radius: var(--border-radius-md);
    `}
  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 80rem;
    `}

  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
