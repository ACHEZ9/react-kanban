import Card from 'components/layout/Card/Card';
import { Task as TaskType } from 'data/Board/types';
import { memo } from 'react';
import styled from 'styled-components';

type TaskProps = {
  task: TaskType;
};

const StyledCardContainer = styled.div`
  flex: 1;
`;

const StyledCardHeader = styled.div`
  display: flex;
`;

const StyledTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledDescription = styled.text`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;

const Task = memo(({ task }: TaskProps) => {
  return (
    <StyledCardContainer>
      <Card gap="0.25rem">
        <StyledCardHeader>
          <StyledTitle>{task.title}</StyledTitle>
        </StyledCardHeader>
        <StyledDescription>{task.description}</StyledDescription>
      </Card>
    </StyledCardContainer>
  );
});

export default Task;
