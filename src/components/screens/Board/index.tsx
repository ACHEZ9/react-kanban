import styled from 'styled-components';
import Column from './Lane/Lane';

const StyledBoard = styled.div`
  display: flex;
  column-gap: 3rem;
  max-width: 100vw;
  padding: 4rem 3rem;
  flex: 1;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function Board() {
  return (
    <StyledBoard>
      <Column title="To Do" />
      <Column title="In Progress" />
      <Column title="Done" />
    </StyledBoard>
  );
}
