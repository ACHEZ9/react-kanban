import TextInput from 'components/inputs/TextInput';
import Card from 'components/layout/Card/Card';
import FormField from 'components/layout/Form/FormField';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function TaskForm() {
  return (
    <Card>
      <StyledForm>
        <FormField label="Title" labelFor="title">
          <TextInput id="title" name="Title" />
        </FormField>
        <FormField label="Email" labelFor="email">
          <TextInput id="email" name="Email" type="email" />
        </FormField>
        {/* <label>
          <span>Title</span>
          <input name="title" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" />
        </label>
        <label>
          <span>Description</span>
          <textarea name="email" />
        </label> */}
        {/* <div>
          <Button type="button">Cancel</Button>
          <Button type="submit">Save task</Button>
        </div> */}
      </StyledForm>
    </Card>
  );
}
