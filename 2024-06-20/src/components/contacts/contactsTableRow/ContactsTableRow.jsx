const ContactsTableRow = (props) => {
  return (
    <tr>
      <td scope="row">{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.message}</td>
    </tr>
  );
};

export default ContactsTableRow;