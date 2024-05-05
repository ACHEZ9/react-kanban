import Button from 'components/buttons/Button';
import TextArea from 'components/inputs/TextArea';
import TextInput from 'components/inputs/TextInput';
import Card from 'components/layout/Card/Card';
import FormField from 'components/layout/Form/FormField';
import { Task } from 'data/Board/types';
import { useState } from 'react';
import styled from 'styled-components';

type TaskFormProps = {
  onSubmit: (task: Omit<Task, 'id'>) => void;
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
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const saveButtonDisabled = !title || !email || !description;

  return (
    <Card>
      <StyledForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit({ title, email, description });
        }}
      >
        <FormField label="Title" labelFor="title">
          <TextInput
            id="title"
            name="Title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </FormField>
        <FormField label="Email" labelFor="email">
          <TextInput
            id="email"
            name="Email"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </FormField>
        <FormField label="Description" labelFor="description">
          <TextArea
            id="description"
            name="Description"
            rows={8}
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </FormField>
        <StyledButtonContainer>
          <Button type="submit" variant="primary" disabled={saveButtonDisabled}>
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
