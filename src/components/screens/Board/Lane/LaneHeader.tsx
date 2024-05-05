import PlusIcon from 'components/icons/PlusIcon';
import { useState } from 'react';
import styled from 'styled-components';
import TaskForm from '../Task/TaskForm';

type LaneHeaderProps = {
  title: string;
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

export default function LaneHeader({ title }: LaneHeaderProps) {
  const [showNewTask, setShowNewTask] = useState(false);

  const onClickNewTask = () => {
    setShowNewTask(true);
  };

  const onCreateNewTask = () => {};

  const onCancelNewTask = () => {
    setShowNewTask(false);
  };

  return (
    <>
      <StyledLaneHeader>
        <StyledTitle>{title}</StyledTitle>
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
