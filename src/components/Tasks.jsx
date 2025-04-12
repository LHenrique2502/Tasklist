import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ButtonTask from "./ButtonTask";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`text-left w-full bg-slate-400 text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <ButtonTask onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </ButtonTask>
            <ButtonTask onClick={() => onDeleteTaskClick(task.id)}>
              <TrashIcon />
            </ButtonTask>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
