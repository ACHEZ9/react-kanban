import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { generateUUID } from './service';
import { Lane, Task } from './types';

type BoardState = {
  lanes: Lane[];
};

type BoardActions = {
  createTask: (laneId: string, task: Omit<Task, 'id'>) => void;
  getTasks: (laneId: string) => Task[];
};

const initialState = (): BoardState => {
  const lanes: Lane[] = ['To Do', 'In Progress', 'Done'].map((title) => {
    return {
      id: generateUUID(),
      title: title,
      tasks: [],
    };
  });

  return {
    lanes,
  };
};

const useBoardStore = create<BoardState & BoardActions>()(
  persist(
    immer((set, get) => ({
      ...initialState(),
      createTask: (laneId, task) => {
        const newTask: Task = { id: generateUUID(), ...task };
        set((state) => {
          state.lanes.find((l) => l.id === laneId)?.tasks.push(newTask);
        });
      },
      getTasks: (laneId) =>
        get().lanes.find((l) => l.id === laneId)?.tasks ?? [],
    })),
    { name: 'close-takehome-board-store' },
  ),
);

export default useBoardStore;
