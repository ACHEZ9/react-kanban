import useBoardStore from 'data/Board/store';
import styled from 'styled-components';
import Lane from './Lane/Lane';

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
  const lanes = useBoardStore((state) => state.lanes);

  return (
    <StyledBoard>
      {lanes.map((lane) => (
        <Lane key={lane.id} lane={lane} />
      ))}
    </StyledBoard>
  );
}
