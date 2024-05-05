import useBoardStore from 'data/Board/store';

type TaskListProps = {
  laneId: string;
};

export default function TaskList({ laneId }: TaskListProps) {
  const tasks = useBoardStore((state) => state.getTasks(laneId));

  return <>{tasks.map((task) => task.title)}</>;
}
