import ContactsTableRow from "../contactsTableRow/ContactsTableRow";

const ContactsTable = (props) => {
  return (
    <div className="mb-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((contact) => {
            <ContactsTableRow
              name={contact.name}
              surname={contact.surname}
              email={contact.email}
              message={contact.message}
            />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
