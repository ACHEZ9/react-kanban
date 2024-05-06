import { moveTask, reorderTask } from './service';
import { Task } from './types';

const generateTasks = (id: string, size: number): Task[] => {
  const tasks: Task[] = [];

  for (let i = 1; i <= size; i++) {
    tasks.push({
      id: `${id}-${i}`,
      title: `Task ${i}`,
      email: `user${i}@example.com`,
      description: `Description ${i}`,
    });
  }

  return tasks;
};

describe('reorderTask function', () => {
  it('should reorder tasks correctly', () => {
    const tasks: Task[] = generateTasks('source', 4);

    const reorderedTasks = reorderTask(tasks, 1, 2);

    expect(reorderedTasks[0]).toEqual(tasks[0]);
    expect(reorderedTasks[1]).toEqual(tasks[2]);
    expect(reorderedTasks[2]).toEqual(tasks[1]);
    expect(reorderedTasks[3]).toEqual(tasks[3]);
  });
});

describe('moveTask function', () => {
  it('should move a task from source to destination', () => {
    const source = generateTasks('source', 3);
    const destination = generateTasks('dest', 1);
    const sourceIndex = 1;
    const destinationIndex = 1;

    const [updatedSource, updatedDestination] = moveTask(
      source,
      sourceIndex,
      destination,
      destinationIndex,
    );

    expect(updatedSource.length).toEqual(2);
    expect(updatedSource[1]).toEqual(source[2]);

    expect(updatedDestination.length).toEqual(2);
    expect(updatedDestination[1]).toEqual(source[1]);
  });
});
