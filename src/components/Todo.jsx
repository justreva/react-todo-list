import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([
      ...tasks,
      { id: uuidv4(), name: task, isDone: false, isEditing: false },
    ]);
  }
  function toggleClick(id, property) {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, [property]: !task[property] } : task;
      })
    );
  }

  function changeTask(id, newTask) {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, name: newTask } : task;
      })
    );
  }
  function deleteTask(id) {
    let res = tasks.filter((elem) => elem.id !== id);
    setTasks(res);
  }
  return (
    <div className="todo-container">
      <h1>Tasks List </h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleClick={toggleClick}
        changeTask={changeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}
