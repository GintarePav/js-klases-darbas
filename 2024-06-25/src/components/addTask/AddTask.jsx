import { useGlobalContext } from "../../context/TasksContext";
import { useState } from "react";

const AddTask = () => {
  const { addTask, handleForm } = useGlobalContext();
  const taskID = new Date().toISOString();
  const [formData, setFormData] = useState({
    id: taskID,
    title: "",
    description: "",
    complete: false
  });

  const handleChange = (e) => {
    setFormData({
        ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTask(formData);
    handleForm(false);
  };

  console.log(formData);
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="form-control"
          onChange={handleChange}
          value={formData.title}
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          placeholder="description"
          className="form-control"
          onChange={handleChange}
          value={formData.description}
        ></textarea>
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default AddTask;
