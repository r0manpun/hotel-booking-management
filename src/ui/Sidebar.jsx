import styled from 'styled-components';

import Logo from './Logo';
import MainNav from './MainNav';

const StyledAside = styled.aside`
  grid-row: 1/-1;
  background-color: var(--color-slate-0);
  border-right: 1px solid var(--color-slate-100);
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem;
  gap: 4rem;
  width: 100%;
`;

function Sidebar() {
  return (
    <StyledAside>
      <Logo />
      <MainNav />
    </StyledAside>
  );
}

export default Sidebar;
