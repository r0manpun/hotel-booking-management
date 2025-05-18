import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledToggle = styled.button`
  border: none;
  background: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-slate-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-slate-700);
  }
`;

const StyledList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !['position'].includes(prop),
})`
  position: fixed;
  background-color: var(--color-slate-50);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  right: ${({ position }) => position.x}px;
  top: ${({ position }) => position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  gap: 1.6rem;
  align-items: center;

  &:hover {
    background-color: var(--color-slate-100);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-slate-400);
    transition: all 0.3s;
  }
`;

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;
  return (
    <MenuContext.Provider
      value={{ openId, open, close, position, setPosition }}>
      {children}
    </MenuContext.Provider>
  );
}

function Toogle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenuContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest('button').getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height + 5,
    });

    openId === '' || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenuContext);

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position}>{children}</StyledList>,
    document.body
  );
}

function Button({ children, onClick, icon }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toogle = Toogle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
