import styled from 'styled-components';
import { useDarkMode } from '../context/DarkModeContext';

const StyledLogo = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: auto;
  height: 9.6rem;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const logoSrc = isDarkMode ? '/logo-dark.png' : '/logo-light.png';

  return (
    <StyledLogo className='logo'>
      <Image
        src={logoSrc}
        alt='Logo'
      />
    </StyledLogo>
  );
}
export default Logo;
