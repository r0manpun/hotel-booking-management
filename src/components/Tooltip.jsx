import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: var(--color-slate-700);
  color: var(--color-slate-100);
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  padding: 5px 10px;
  text-align: center;

  position: absolute;
  top: 125%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 10;

  // TRANGLE POINTER
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent var(--color-slate-700);
  }

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

function Tooltip({ children, text }) {
  return (
    <TooltipContainer>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  );
}

export default Tooltip;
