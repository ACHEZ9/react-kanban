import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type CardProps = {};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding: 1rem;
  gap: 1rem;
`;

export default function Card({ children }: PropsWithChildren<CardProps>) {
  return <StyledCard>{children}</StyledCard>;
}
