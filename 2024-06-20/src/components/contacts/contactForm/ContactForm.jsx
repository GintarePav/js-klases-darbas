import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = (props) => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState({
        name: "",
        surname: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setContacts({
            ...contacts,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSave(contacts);
        console.log(contacts);
        navigate("/contact");
    }

    // console.log(contacts);

  return (
    <div className="m-3 container d-flex justify-content-center">
      <form onSubmit={submitHandler}>
        <h3 className="my-3 text-center">Add new contact</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Name"
            placeholder="Name"
            name="name"
            value={contacts.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Surname"
            placeholder="Surname"
            name="surname"
            value={contacts.surname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            aria-label="Email"
            placeholder="Email"
            name="email"
            value={contacts.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            aria-label="Message"
            placeholder="Message"
            name="message"
            value={contacts.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-secondary w-100">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
