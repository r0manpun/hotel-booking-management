import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: auto;
  height: 9.6rem;
`;

function Logo() {
  const logoSrc = '/logo-dark.png';
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
