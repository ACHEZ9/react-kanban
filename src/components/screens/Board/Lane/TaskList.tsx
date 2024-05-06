import { Draggable } from '@hello-pangea/dnd';
import useBoardStore from 'data/Board/store';
import styled from 'styled-components';
import Task from '../Task/Task';

type TaskListProps = {
  laneId: string;
};

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  gap: 1rem;
  flex: 1;
`;

const StyledDraggableTask = styled.div``;

export default function TaskList({ laneId }: TaskListProps) {
  const tasks = useBoardStore((state) => state.getTasks(laneId));

  return (
    <StyledTaskList>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided, snapshot) => (
            <StyledDraggableTask
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={provided.draggableProps.style}
            >
              <Task key={task.id} task={task} />
            </StyledDraggableTask>
          )}
        </Draggable>
      ))}
    </StyledTaskList>
  );
}
