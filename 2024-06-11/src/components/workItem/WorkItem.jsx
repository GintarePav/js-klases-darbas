import * as service from "../../services/worksCrudServices";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const WorkItem = (props) => {
  const navigate = useNavigate();
  const deleteHandler = () => {
    service.deleteWorks(props.id);
    navigate("/");
  };
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.client}</td>
      <td>{props.service}</td>
      <td>{props.description}</td>
      <td>{props.from}</td>
      <td>{props.to}</td>
      <td>
        <Link to={`/update/${props.id}`}>Edit</Link>
      </td>
      <td><a href="#" onClick={deleteHandler}>Delete</a></td>
    </tr>
  );
};

export default WorkItem;
