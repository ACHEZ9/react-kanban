type Task = {
  id: string;
  title: string;
  email: string;
  description: string;
};

type Lane = {
  id: string;
  title: string;
  tasks: Task[];
};

export type { Lane, Task };
