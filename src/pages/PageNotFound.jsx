import styled from 'styled-components';

import { useMoveBack } from '../hooks/useMoveBack';
import Heading from '../components/Heading';
import Button from '../components/Button';

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-slate-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background-color: var(--color-slate-0);
  border: 1px solid var(--color-slate-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as='h1'>
          The page you are looking for could not be found 😢 (404)
        </Heading>
        <Button
          size='large'
          onClick={moveBack}>
          &larr; Go Back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}
export default PageNotFound;
