import ContactsTable from "../contactsTable/ContactsTable";
import ContactForm from "../contactForm/ContactForm";
import { useState } from "react";

const Contacts = (props) => {
    const [Form, setForm] = useState(false);
    const [contactData, setContactData] = useState([]);

    const getNewContact = (data) => {
        setContactData((prevData) => {
            return[...prevData, data]
        })
    }

  return (
    <div className="m-3 container">
      <div>
        <h3>Hi - Contact</h3>
        <p>
          <span>Today's date: </span>
          {props.date}
        </p>
      </div>
      <div className="mb-3">
        <button className="btn btn-secondary" href="" onClick={()=>setForm(true)}>
          Add contact
        </button>
      </div>
      {Form && <ContactForm onSave={getNewContact}/>}
      {!Form && <ContactsTable data={contactData}/>}
    </div>
  );
};

export default Contacts;
