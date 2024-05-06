import { fireEvent, render, screen } from '@testing-library/react';
import defaultTheme from 'app/theme';
import { Lane } from 'data/Board/types';
import { ThemeProvider } from 'styled-components';
import LaneHeader from './LaneHeader';

describe('LaneHeader component', () => {
  const lane: Lane = { id: '1', title: 'To Do', tasks: [] };

  it('does not display TaskForm initially', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <LaneHeader lane={lane} />
      </ThemeProvider>,
    );
    const taskForm = screen.queryByText('Title');
    expect(taskForm).not.toBeInTheDocument();
  });

  it('displays TaskForm when "Add task" button is clicked', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <LaneHeader lane={lane} />
      </ThemeProvider>,
    );
    const addButton = screen.getByTitle('Add task');
    fireEvent.click(addButton);
    const taskForm = screen.getByText('Title');
    expect(taskForm).toBeInTheDocument();
  });
});
