import { Dispatch, SetStateAction, useCallback } from "react";

export const useTodoApp = (setTasks: Dispatch<SetStateAction<Task[]>>) => {
  const addTask = useCallback(
    (task: string) =>
      setTasks((tasks) => [
        ...tasks,
        { id: Date.now(), title: task, isCompleted: false },
      ]),
    [setTasks]
  );

  const completeTask = useCallback(
    (task: Task) =>
      setTasks((tasks) =>
        tasks.map((t) =>
          t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
        )
      ),
    [setTasks]
  );

  const removeTask = useCallback(
    (task: Task) => setTasks((tasks) => tasks.filter((t) => t.id !== task.id)),
    [setTasks]
  );

  return {
    addTask,
    completeTask,
    removeTask,
  };
};
