import { useState } from "react";
const AddPost = (props) => {
    const [formData, setFormData] = useState({
        'id': '',
        'title': '',
        'desc': ''
    })
const handleChange = (e) => {
    setFormData({
        ...formData,
        id: Math.random().toString(16).slice(2),
        [e.target.name]: e.target.value,
    });
}
const submitHandler = (e) => {
    e.preventDefault();
    props.onSave(formData);
}
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input type="text" placeholder="Naujienos pavadinimas" onChange={handleChange} value={formData.title} name="title"/>
      </div>
      <div>
        <textarea placeholder="Naujienos tekstas" onChange={handleChange} defaultValue={formData.desc} name="desc"></textarea>
      </div>
      <div>
        <button type="submit">Saugoti</button>
      </div>
    </form>
  );
};

export default AddPost;
