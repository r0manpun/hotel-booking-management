import styled from 'styled-components';

import Logo from './Logo';
import MainNav from './MainNav';

const StyledAside = styled.aside`
  grid-row: 1/-1;
  background-color: var(--color-slate-50);
  color: var(--color-indigo-500);
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
