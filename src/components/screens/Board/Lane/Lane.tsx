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
  min-width: 10rem;
  gap: 1rem;
`;

export default function Lane({ lane }: LaneProps) {
  return (
    <StyledLane>
      <LaneHeader lane={lane} />
      <TaskList laneId={lane.id} />
    </StyledLane>
  );
}
