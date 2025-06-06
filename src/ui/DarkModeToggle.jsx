import { HiOutlineSun } from 'react-icons/hi2';

import ButtonIcon from '../components/ButtonIcon';
import styled from 'styled-components';

const RotatingIcon = styled.span.withConfig({
  shouldForwardProp: (props) => !props.includes('isDarkMode'),
})`
  display: inline-block;
  transform: ${(props) =>
    props.isDarkMode ? 'rotate(80deg)' : 'rotate(0deg)'};
  transition: transform 0.75s ease-in-out;
`;

function DarkModeToggle() {
  return (
    <ButtonIcon>
      <RotatingIcon isDarkMode={false}>
        <HiOutlineSun />
      </RotatingIcon>
    </ButtonIcon>
  );
}

export default DarkModeToggle;
