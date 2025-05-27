import styled from 'styled-components';

const StyledCheckBox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type='checkbox'] {
    height: 2.4rem;
    width: 2.4rem;

    outline: none;
    transform-origin: 0;

    accent-color: var(--color-brand-500);
  }

  & input[type='checkbox']:disabled {
    accent-color: var(--color-brand-500);
  }

  & label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

function CheckBox({ children, checked, disabled = false, id, onChange }) {
  return (
    <StyledCheckBox>
      <input
        type='checkbox'
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ''}>{children}</label>
    </StyledCheckBox>
  );
}

export default CheckBox;
