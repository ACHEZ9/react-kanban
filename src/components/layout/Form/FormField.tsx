import Label from 'components/typography/Label';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type FormFieldProps = {
  label: string;
  labelFor?: string;
};

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function FormField({
  label,
  labelFor,
  children,
}: PropsWithChildren<FormFieldProps>) {
  return (
    <StyledFormField>
      <Label htmlFor={labelFor}>{label}</Label>
      {children}
    </StyledFormField>
  );
}
