import { useNavigate, Link } from "react-router-dom";
import * as service from "../../../services/servicesProvidedCrudServices";

const ServiceRow = (props) => {
  const navigate = useNavigate();

  const deleteHandler = (e) => {
    e.preventDefault();
    service.deleteService(props.id);
    navigate("/services-section");
  };
  
  return (
    <tr>
      <td>{props.serviceName}</td>
      <td>{props.serviceId}</td>
      <td>
        <Link to={`/update-service/${props.id}`}>Keisti</Link>
      </td>
      <td>
        <a href="" onClick={deleteHandler}>
          Šalinti
        </a>
      </td>
    </tr>
  );
};

export default ServiceRow;
