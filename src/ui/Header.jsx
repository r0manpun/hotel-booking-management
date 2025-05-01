import styled from 'styled-components';
import Heading from '../components/Heading';

const StyledHeader = styled.header`
  background-color: var(--color-slate-50);
  padding: 2rem 4.8rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as='h3'>My Application</Heading>
    </StyledHeader>
  );
}
export default Header;
