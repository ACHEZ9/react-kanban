import { DragDropContext, DropResult } from '@hello-pangea/dnd';
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
  const reorderTasks = useBoardStore((state) => state.reorderTasks);
  const moveTask = useBoardStore((state) => state.moveTask);

  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      if (source.index === destination.index) {
        return;
      }
      reorderTasks(source.droppableId, source.index, destination.index);
    } else {
      moveTask(
        source.droppableId,
        source.index,
        destination.droppableId,
        destination.index,
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledBoard>
        {lanes.map((lane) => (
          <Lane key={lane.id} lane={lane} />
        ))}
      </StyledBoard>
    </DragDropContext>
  );
}
