import PlusIcon from 'components/icons/PlusIcon';
import styled from 'styled-components';

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
  return (
    <StyledLaneHeader>
      <StyledTitle>{title}</StyledTitle>
      <StyledButton type="button" title="Add task">
        <PlusIcon />
      </StyledButton>
    </StyledLaneHeader>
  );
}
