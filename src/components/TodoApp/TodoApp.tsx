import { useState } from "react";

import { useTodoApp } from "./useTodoApp.hook";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { addTask, completeTask, removeTask } = useTodoApp(setTasks);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onTaskComplete={completeTask}
        onTaskDelete={removeTask}
      />
    </div>
  );
};

export default TodoApp;
