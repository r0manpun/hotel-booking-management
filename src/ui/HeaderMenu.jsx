import {
  HiArrowRightOnRectangle,
  HiOutlineSun,
  HiOutlineUser,
} from 'react-icons/hi2';
import styled from 'styled-components';

import ButtonIcon from '../components/ButtonIcon';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <HiOutlineSun />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <HiArrowRightOnRectangle />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
