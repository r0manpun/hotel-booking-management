import { HiArrowRightOnRectangle } from 'react-icons/hi2';

import ButtonIcon from '../../components/ButtonIcon';
import SpinnerMini from '../../components/SpinnerMini';

import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ButtonIcon
      onClick={logout}
      disabled={isLoggingOut}>
      {!isLoggingOut ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
