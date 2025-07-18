import {
  HiArrowRightOnRectangle,
  HiOutlineSun,
  HiOutlineUser,
} from 'react-icons/hi2';
import styled from 'styled-components';

import ButtonIcon from '../components/ButtonIcon';
import Tooltip from '../components/Tooltip';
import { useNavigate } from 'react-router-dom';
import Logout from '../features/authentication/Logout';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <Tooltip text='Account Setting'>
          <ButtonIcon onClick={() => navigate('/account')}>
            <HiOutlineUser />
          </ButtonIcon>
        </Tooltip>
      </li>
      <li>
        <Tooltip text='Toggle Dark/Light Mode'>
          <DarkModeToggle />
        </Tooltip>
      </li>
      <li>
        <Tooltip text='Logout'>
          <Logout />
        </Tooltip>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
