import { Droppable } from '@hello-pangea/dnd';
import { Lane as LaneType } from 'data/Board/types';
import styled from 'styled-components';
import LaneHeader from './LaneHeader';
import TaskList from './TaskList';

export type LaneProps = { lane: LaneType };

type DroppableStyles = { isDragOver?: boolean };

const StyledLane = styled.section<DroppableStyles>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding: 1rem;
  width: 20rem;
  gap: 1rem;
`;

export default function Lane({ lane }: LaneProps) {
  return (
    <Droppable key={lane.id} droppableId={lane.id}>
      {(provided, snapshot) => (
        <StyledLane ref={provided.innerRef} {...provided.droppableProps}>
          <LaneHeader lane={lane} />
          <TaskList laneId={lane.id} />
          {provided.placeholder}
        </StyledLane>
      )}
    </Droppable>
  );
}
