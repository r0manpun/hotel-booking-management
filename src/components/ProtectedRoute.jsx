import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useUser } from '../features/authentication/users/useUser';

import SpinnerMini from './SpinnerMini';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-slate-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) {
    return (
      <FullPage>
        <SpinnerMini />
      </FullPage>
    );
  }

  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
