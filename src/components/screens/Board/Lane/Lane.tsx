import styled from 'styled-components';
import TaskForm from '../Task/TaskForm';
import LaneHeader from './LaneHeader';

export type LaneProps = { title: string };

const StyledLane = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding: 1rem;
  width: 20rem;
  gap: 1rem;
`;

export default function Lane({ title }: LaneProps) {
  return (
    <StyledLane>
      <LaneHeader title={title} />
      <div>
        <TaskForm />
      </div>
    </StyledLane>
  );
}
