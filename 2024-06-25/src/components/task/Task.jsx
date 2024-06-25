import { useGlobalContext } from "../../context/TasksContext";
import { useState } from "react";

const Task = (props) => {
  const { deleteTaskById, markTaskAsDone } = useGlobalContext();
  const [completed, setCompleted] = useState(props.complete);

  const handleDelete = () => {
    deleteTaskById(props.id);
  }

  const handleComplete = () => {
    markTaskAsDone(props.id);
    setCompleted(true);
  };


  return (
    <li className="list-group-item d-flex justify-content-between align-tems-center" id={props.id}>
        <div><p style={{ textDecoration: props.complete ? "line-through" : "none" }}>{props.title}: {props.description}</p></div>
        <div><button className="m-1 btn btn-danger" onClick={handleDelete}>Remove</button>
        <button className="m-1 btn btn-success" onClick={handleComplete}>Mark done</button></div>
    </li>
  );
};

export default Task;
