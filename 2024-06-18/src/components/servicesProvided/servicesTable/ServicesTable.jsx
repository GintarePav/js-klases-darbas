import ServiceRow from "../serviceRow/serviceRow";
const ServicesTable = (props) => {
  console.log("Clients table:", props.data);
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Paslaugos pavadinimas</th>
          <th>Paslaugos id</th>
          <th>Keisti</th>
          <th>Šalinti</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((service) => (
          <ServiceRow 
          id={service.id}
          serviceName={service.serviceName}
          serviceId={service.serviceId}/>
        ))}
      </tbody>
    </table>
  );
};

export default ServicesTable;
