
import TodoItems from "./TodoItems";

export default function TodoList({tasks, toggleClick, changeTask, deleteTask}) {
  return (
    <ul className="todo-list">
      <TodoItems tasks={tasks} toggleClick={toggleClick} changeTask={changeTask} deleteTask={deleteTask}/>

    </ul>
  );
}
