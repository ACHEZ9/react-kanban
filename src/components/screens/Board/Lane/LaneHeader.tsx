import PlusIcon from 'components/icons/PlusIcon';
import useBoardStore from 'data/Board/store';
import { Lane, Task } from 'data/Board/types';
import { useState } from 'react';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import TaskForm from '../Task/TaskForm';

type LaneHeaderProps = {
  lane: Lane;
};

const StyledLaneHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0;
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border: 0;
  padding: 0;
`;

export default function LaneHeader({ lane }: LaneHeaderProps) {
  const createTask = useBoardStore((state) => state.createTask);
  const taskCount = useBoardStore(
    useShallow((state) => state.getTasks(lane.id).length),
  );

  const [showNewTask, setShowNewTask] = useState(false);

  const onClickNewTask = () => {
    if (taskCount >= 100) {
      // TODO: Show message if at limit
      return;
    }
    setShowNewTask(true);
  };

  const onCreateNewTask = (task: Omit<Task, 'id'>) => {
    createTask(lane.id, task);
    setShowNewTask(false);
  };

  const onCancelNewTask = () => {
    setShowNewTask(false);
  };

  return (
    <>
      <StyledLaneHeader>
        <StyledTitle>{lane.title}</StyledTitle>
        <StyledButton type="button" title="Add task" onClick={onClickNewTask}>
          <PlusIcon />
        </StyledButton>
      </StyledLaneHeader>
      {showNewTask && (
        <TaskForm onSubmit={onCreateNewTask} onCancel={onCancelNewTask} />
      )}
    </>
  );
}
