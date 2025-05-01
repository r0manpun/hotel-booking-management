import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    background-color: var(--color-brand-600);
  `,
  danger: css``,
};

const Button = styled.button
  .withConfig({
    shouldForwardProp: (props) => !['size', 'variation'].includes(props),
  })
  .attrs((props) => ({
    variation: props.variation || 'primary',
    size: props.size || 'medium',
  }))`

border-radius: var(--border-radius-sm);
border: none;
box-shadow: var(--shadow-sm);

${(props) => sizes[props.size]}
${(props) => variations[props.variation]}   
`;

export default Button;
