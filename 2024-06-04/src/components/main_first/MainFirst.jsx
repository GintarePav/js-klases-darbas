import ToDoItem from "../toDoItem/ToDoItem";
import { useState } from "react";
import AddTask from "../taskAddition/AddTask";

const MainFirst = () => {
  const [submit, setSubmit] = useState(false);
  const submitHandler = () => {
    setSubmit(true);
  };
  const [tasks, setTasks] = useState([]);
  const handleTaskData = (data) => {
    setTasks((prevData) => {
      return [...prevData, data];
    });
    console.log(tasks);
  };
  return (
    <>
      <section>
      <h2>To-do List</h2>
        <button onClick={submitHandler} style={{ marginBottom: '10px' }}>Add task</button>
        {submit && <AddTask onSave={handleTaskData} />}
      </section>
      <main>
          {tasks.map((task) => (
            <ToDoItem key={task.id} name={task.name} description={task.description} priority={task.priority}/>
          ))}
      </main>
    </>
  );
};

export default MainFirst;
