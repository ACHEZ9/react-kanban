import Button from 'components/buttons/Button';
import TextArea from 'components/inputs/TextArea';
import TextInput from 'components/inputs/TextInput';
import Card from 'components/layout/Card/Card';
import FormField from 'components/layout/Form/FormField';
import styled from 'styled-components';

type TaskFormProps = {
  onSubmit: () => void;
  onCancel: () => void;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default function TaskForm({ onSubmit, onCancel }: TaskFormProps) {
  return (
    <Card>
      <StyledForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <FormField label="Title" labelFor="title">
          <TextInput id="title" name="Title" />
        </FormField>
        <FormField label="Email" labelFor="email">
          <TextInput id="email" name="Email" type="email" />
        </FormField>
        <FormField label="Description" labelFor="description">
          <TextArea id="description" name="Description" rows={8} />
        </FormField>
        <StyledButtonContainer>
          <Button type="submit" variant="primary">
            Save Task
          </Button>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </StyledButtonContainer>
      </StyledForm>
    </Card>
  );
}
