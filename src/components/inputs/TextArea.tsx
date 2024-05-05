import styled from 'styled-components';
import { StyledInput } from './TextInput';

type TextAreaProps = {} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const StyledTextArea = styled(StyledInput).attrs({
  as: 'textarea',
})`
  resize: none;
  height: auto;
`;

export default function TextArea({ ...textAreaAttributes }: TextAreaProps) {
  return <StyledTextArea {...textAreaAttributes} />;
}
