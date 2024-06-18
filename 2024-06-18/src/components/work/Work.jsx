import * as service from "../../services/WorksCrudServices"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Work = (props)=>{
    const navigate = useNavigate();

    const deleteHandler = ()=>{
        service.deleteWork(props.id);
        navigate('/');
    }
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.company}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.from}</td>
            <td>{props.to}</td>
            <td><Link to={`/update/${props.id}`}>Keisti</Link></td>
            <td><a href="#" onClick={deleteHandler}>Šalinti</a></td>
        </tr>
    )
}

export default Work