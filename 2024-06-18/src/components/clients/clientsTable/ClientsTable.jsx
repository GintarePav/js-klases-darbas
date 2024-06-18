import ClientRow from "../clientRow/ClientRow";

const ClientsTable = (props) => {
  console.log("Clients table:", props.data);
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Kliento pavadinimas</th>
          <th>Kliento id</th>
          <th>Keisti</th>
          <th>Šalinti</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((client) => (
          <ClientRow
            id={client.id}
            clientName={client.clientName}
            clientId={client.clientId}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;
