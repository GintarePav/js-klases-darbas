import Task from "../task/Task";
import AddTask from "../addTask/AddTask";
import { useGlobalContext } from "../../context/TasksContext";

const Tasks = () => {
  const { tasks, isOpen, handleForm } = useGlobalContext();
  console.log(isOpen);
  return (
    <div className="container">
      <h2 className="m-5 text-center">Task list</h2>
      <div className="text-center m-5">
        {!isOpen && (
          <>
            <button
              className="btn btn-primary m-1"
              onClick={() => {
                handleForm(true);
              }}
            >
              Add task
            </button>
            <button
            className="btn btn-secondary m-1"
            onClick={() => {
            }}
          >
            Show done
          </button>
          </>
        )}
      </div>
      {isOpen ? (
        <AddTask />
      ) : (
        <ul className="list-group">
          {tasks.length &&
            tasks.map((task, i) => (
              <Task
                key={i}
                id={task.id}
                title={task.title}
                description={task.description}
                complete={task.complete}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
