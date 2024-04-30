import {
  ArchiveBoxXMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

export default function TodoItems({ tasks, toggleClick, changeTask, deleteTask }) {
  return tasks.map((task) => {
    return (
      <li key={task.id} id={task.id} className="todo-list__item">
        {task.isDone ? (
          <span
            onClick={() => toggleClick(task.id, "isDone")}
            className="task-line"
          >
            {task.name}
          </span>
        ) : (
          <span onClick={() => toggleClick(task.id, "isDone")}>
            {task.name}
          </span>
        )}
        <div className="todo-list__buttons">
          {task.isEdit ? (
            <input
              type="text"
              value={task.name}
              onChange={(e) => changeTask(task.id, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  toggleClick(task.id, "isEdit");
                }
              }}
              className="input-task"
            />
          ) : (
            <PencilSquareIcon
              className="svg svg-edit"
              onClick={() => toggleClick(task.id, "isEdit")}
            />
          )}

          <ArchiveBoxXMarkIcon className="svg" onClick={() => deleteTask(task.id)} />
        </div>
      </li>
    );
  });
}
