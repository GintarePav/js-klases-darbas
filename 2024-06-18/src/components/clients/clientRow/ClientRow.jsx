import { useNavigate, Link } from "react-router-dom";
import * as service from "../../../services/clientCrudServices"

const ClientRow = (props) => {
    const navigate = useNavigate();

    const deleteHandler = (e) => {
        e.preventDefault();
        service.deleteClient(props.id);
        navigate("/clients-section");
    }

    return(
        <tr>
            <td>{props.clientName}</td>
            <td>{props.clientId}</td>
            <td><Link to={`/update-client/${props.id}`}>Keisti</Link></td>
            <td><a href="" onClick={deleteHandler}>Šalinti</a></td>
        </tr>
    )
}

export default ClientRow;