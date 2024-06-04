import { useState } from "react";
const AddTask = (props) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    priority: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      id: new Date().toISOString(),
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSave(formData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Task name"
          onChange={handleChange}
          value={formData.name}
          name="name"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Task description"
          onChange={handleChange}
          value={formData.description}
          name="description"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <select
          onChange={handleChange}
          value={formData.priority}
          name="priority"
        >
          <option value="N/A">Select priority</option>
          <option value="Urgent">Urgent</option>
          <option value="Not urgent">Not Urgent</option>
          <option value="Important">Important</option>
          <option value="Not important">Not Important</option>
        </select>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTask;
