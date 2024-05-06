import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { generateUUID, moveTask, reorderTask } from './service';
import { Lane, Task } from './types';

type BoardState = {
  lanes: Lane[];
};

type BoardActions = {
  createTask: (laneId: string, task: Omit<Task, 'id'>) => void;
  getTasks: (laneId: string) => Task[];
  reorderTasks: (laneId: string, fromIndex: number, toIndex: number) => void;
  moveTask: (
    fromLaneId: string,
    fromIndex: number,
    toLaneId: string,
    toIndex: number,
  ) => void;
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

      reorderTasks: (laneId, fromIndex, toIndex) => {
        const tasks = get().getTasks(laneId);
        const reorderTasks = reorderTask(tasks, fromIndex, toIndex);

        set((state) => {
          const lane = state.lanes.find((l) => l.id === laneId);
          if (lane) {
            lane.tasks = reorderTasks;
          }
        });
      },

      moveTask: (fromLaneId, fromIndex, toLaneId, toIndex) => {
        const sourceTasks = get().getTasks(fromLaneId);
        const destinationTasks = get().getTasks(toLaneId);
        const [updatedSource, updatedDestination] = moveTask(
          sourceTasks,
          fromIndex,
          destinationTasks,
          toIndex,
        );

        set((state) => {
          const sourceLane = state.lanes.find((l) => l.id === fromLaneId);
          const destinationLane = state.lanes.find((l) => l.id === toLaneId);

          if (sourceLane && destinationLane) {
            sourceLane.tasks = updatedSource;
            destinationLane.tasks = updatedDestination;
          }
        });
      },
    })),
    { name: 'close-takehome-board-store' },
  ),
);

export default useBoardStore;
