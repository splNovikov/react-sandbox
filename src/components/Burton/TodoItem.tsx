import React, { memo } from "react";

type TodoItemProps = {
  task: Task;
  onTaskComplete: (task: Task) => void;
  onTaskDelete: (task: Task) => void;
};

const TodoItem = ({ task, onTaskComplete, onTaskDelete }: TodoItemProps) => {
  const handleChange = () => onTaskComplete(task);
  const handleDeleteClick = () => onTaskDelete(task);

  return (
    <label>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleChange}
      />
      <span>{task.title}</span>
      <button onClick={handleDeleteClick}>Del?</button>
    </label>
  );
};

export default memo(TodoItem);
