import styled from 'styled-components';

import { useUser } from '../features/authentication/users/useUser';

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-slate-600);
  text-transform: capitalize;
`;

const Avtar = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  outline: 2px solid var(--color-slate-100);
`;

function UseAvatar() {
  const { user } = useUser();

  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avtar src={avatar || '/default-user.jpg'} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UseAvatar;
