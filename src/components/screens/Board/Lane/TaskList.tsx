import useBoardStore from 'data/Board/store';
import styled from 'styled-components';
import Task from '../Task/Task';

type TaskListProps = {
  laneId: string;
};

const StyledTaskList = styled.div`
  display: flex;
  overflow-y: auto;
  width: 100%;
`;

export default function TaskList({ laneId }: TaskListProps) {
  const tasks = useBoardStore((state) => state.getTasks(laneId));

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </StyledTaskList>
  );
}
