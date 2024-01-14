import { ChangeEvent, FormEvent, ReactElement, memo, useState } from "react";

type TodoFormProps = {
  onAddTask: (taskTitle: string) => void;
};

const TodoForm = ({ onAddTask }: TodoFormProps): ReactElement => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!newTask) {
      return;
    }

    onAddTask(newTask);
    setNewTask("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button disabled={!newTask}>Add Task</button>
    </form>
  );
};

export default memo(TodoForm);
