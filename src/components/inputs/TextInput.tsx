import styled from 'styled-components';

type TextInputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<TextInputProps>`
  height: 2rem;
  padding: 0.5rem 1rem;

  border-radius: ${({ theme }) => theme.layout.borderRadius};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-style: solid;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function TextInput({ ...inputAttributes }: TextInputProps) {
  return <StyledInput {...inputAttributes} />;
}
