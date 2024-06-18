import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../../services/clientCrudServices";
import ClientsTable from "../clientsTable/ClientsTable";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    service.getClients((clients) => {
      setClients(clients);
    });
  }, []);
//   console.log("Clients retrieved:", clients);
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-item btn btn-primary" to="/add-client">
            Prideti klienta
          </Link>
        </li>
      </ul>
      <h2>Clients</h2>
      <ClientsTable data={clients} />
    </div>
  );
};

export default ClientsSection;
