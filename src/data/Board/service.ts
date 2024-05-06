import { v4 as uuid } from 'uuid';
import { Task } from './types';

const generateUUID = () => uuid();

const reorderTask = (tasks: Task[], fromIndex: number, toIndex: number) => {
  const result = [...tasks];
  const removed = result.splice(fromIndex, 1);

  result.splice(toIndex, 0, ...removed);

  return result;
};

const moveTask = (
  source: Task[],
  sourceIndex: number,
  destination: Task[],
  destinationIndex: number,
) => {
  const updatedSource = [...source];
  const updatedDestination = [...destination];

  const moved = updatedSource.splice(sourceIndex, 1);
  updatedDestination.splice(destinationIndex, 0, ...moved);

  return [updatedSource, updatedDestination];
};

export { generateUUID, moveTask, reorderTask };
