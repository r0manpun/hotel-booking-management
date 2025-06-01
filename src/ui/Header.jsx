import styled from 'styled-components';

import UseAvatar from './UserAvatar';
import HeaderMenu from './HeaderMenu';

const StyledHeader = styled.header`
  background-color: var(--color-slate-50);
  padding: 2rem 4.8rem;
  border-bottom: 1px solid var(--color-slate-100);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UseAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
export default Header;
