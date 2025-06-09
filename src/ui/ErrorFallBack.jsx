import styled from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';
import Heading from '../components/Heading';
import Button from '../components/Button';

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-slate-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background-color: var(--color-slate-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: 'Sono';
    margin-bottom: 3.2rem;
    color: var(--color-slate-500);
  }
`;

function ErrorFallBack({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as='h1'>Something went wrong 🧐</Heading>
          <p>{error.message}</p>
          <Button
            size='large'
            onClick={resetErrorBoundary}>
            Try Again
          </Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallBack;
