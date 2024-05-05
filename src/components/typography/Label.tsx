import React from 'react';
import styled from 'styled-components';

type LabelProps = {} & React.LabelHTMLAttributes<HTMLLabelElement>;

const StyledLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.textDefault};
`;

export default function Label({ children, ...labelAttributes }: LabelProps) {
  return <StyledLabel {...labelAttributes}>{children}</StyledLabel>;
}
