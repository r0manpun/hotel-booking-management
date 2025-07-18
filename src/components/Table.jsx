import { createContext, useContext } from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
  background-color: var(--color-slate-50);
  border: 1px solid var(--color-slate-200);
  font-size: 1.4rem;
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.header.withConfig({
  shouldForwardProp: (props) => props !== 'columns',
})`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-slate-0);
  border-bottom: 1px solid var(--color-slate-300);
  border-start-end-radius: var(--border-radius-md);

  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-slate-600);
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-slate-100);
  }
`;

const Footer = styled.footer`
  background-color: var(--color-slate-0);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 2.4rem;
  text-align: center;
`;

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role='table'>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader
      role='table'
      columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Body({ data, render }) {
  if (!data?.length || data === 'undefined')
    return <Empty role='table'>No data available at the moment!</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow
      role='table'
      columns={columns}>
      {children}
    </StyledRow>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
