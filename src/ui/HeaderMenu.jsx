import {
  HiArrowRightOnRectangle,
  HiOutlineSun,
  HiOutlineUser,
} from 'react-icons/hi2';
import styled from 'styled-components';

import ButtonIcon from '../components/ButtonIcon';
import Tooltip from '../components/Tooltip';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <Tooltip text='Account Setting'>
          <ButtonIcon>
            <HiOutlineUser />
          </ButtonIcon>
        </Tooltip>
      </li>
      <li>
        <Tooltip text='Toggle Dark/Light Mode'>
          <ButtonIcon>
            <HiOutlineSun />
          </ButtonIcon>
        </Tooltip>
      </li>
      <li>
        <Tooltip text='Logout'>
          <ButtonIcon>
            <HiArrowRightOnRectangle />
          </ButtonIcon>
        </Tooltip>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
