import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? 'var(--color-brand-600)' : 'var(--color-slate-50)'};
  color: ${(props) => (props.active ? 'var(--color-brand-50)' : 'inherit')};

  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-left: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-500);
    color: var(--color-brand-50);
  }
`;

function Pagination() {
  return (
    <StyledPagination>
      <P>
        Showing <span>X</span> to <span>X</span> of <span>count</span> results
      </P>

      <Buttons>
        <PaginationButton
          onClick={() => {}}
          disabled={false}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={() => {}}
          disabled={false}>
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
