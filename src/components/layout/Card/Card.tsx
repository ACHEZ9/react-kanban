import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type CardProps = { gap?: string };

const StyledCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding: 1rem;
  gap: ${({ gap = '1rem' }) => gap};
`;

export default function Card({ gap, children }: PropsWithChildren<CardProps>) {
  return <StyledCard gap={gap}>{children}</StyledCard>;
}
