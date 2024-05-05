import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.layout.headerHeight};
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 2rem;
`;

const StyledHeaderText = styled.h1`
  font-size: 1.875rem;
  line-height: 2.5rem;
  color: #fff;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderText>Close Frontend Take-Home Project</StyledHeaderText>
    </StyledHeader>
  );
}
