import { HiOutlineSun } from 'react-icons/hi2';
import { RiMoonClearFill } from 'react-icons/ri';
import styled from 'styled-components';

import ButtonIcon from '../components/ButtonIcon';

import { useDarkMode } from '../context/DarkModeContext';

const RotatingIcon = styled.span.withConfig({
  shouldForwardProp: (props) => !props.includes('isDarkMode'),
})`
  display: inline-block;
  transform: ${(props) =>
    props.isDarkMode ? 'rotate(80deg)' : 'rotate(0deg)'};
  transition: transform 0.75s ease-in-out;
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      <RotatingIcon isDarkMode={isDarkMode}>
        {isDarkMode ? <HiOutlineSun /> : <RiMoonClearFill />}
      </RotatingIcon>
    </ButtonIcon>
  );
}

export default DarkModeToggle;
