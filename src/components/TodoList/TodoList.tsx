import { memo } from "react";
import TodoItem from "./TodoItem";

type TodoListProps = {
  tasks: Task[];
  onTaskComplete: (task: Task) => void;
  onTaskDelete: (task: Task) => void;
};

const TodoList = ({ tasks, onTaskComplete, onTaskDelete }: TodoListProps) => {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <TodoItem
            task={t}
            onTaskComplete={onTaskComplete}
            onTaskDelete={onTaskDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(TodoList);
