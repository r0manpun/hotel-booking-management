import styled, { css } from 'styled-components';

const StyledSelect = styled.select`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.6rem 1rem;

  border: 1px solid
    ${(props) =>
      props.type === 'white'
        ? css`var(--color-slate-100)`
        : css`var(--color-slate-300)`};
  background-color: var(--color-slate-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      {...props}>
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}
export default Select;
