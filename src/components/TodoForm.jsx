import { useState } from "react";

function TodoForm({ addTask }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask(value);
    setValue("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter the task..."
        className="todo-form__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="todo-form__button"
      >
        +
      </button>
    </form>
  );
}

export default TodoForm;
