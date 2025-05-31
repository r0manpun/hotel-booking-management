import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledFilter = styled.div`
  border: 1px solid var(--color-slate-100);
  background-color: var(--color-slate-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);

  display: flex;
  padding: 0.4rem;
  gap: 0.4rem;
`;

const FilterButton = styled.button.withConfig({
  shouldForwardProp: (props) => !props.includes('active'),
})`
  background-color: var(--color-slate-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleFilter(value) {
    searchParams.set(filterField, value);

    // If there is already a page, while filtering
    // it will automatically set page to 1
    if (searchParams.get('page')) searchParams.set('page', 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleFilter(option.value)}
          key={option.value}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}>
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
