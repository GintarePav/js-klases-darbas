import * as service from "../../services/worksCrudServices"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import WorksTable from "../worksTable/WorksTable";

const Works = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        service.getAllWorks(works => {
            setWorks(works);
        })
    }, [])

    // console.log(works)

    return(
    <div className="container">
        <ul className="nav nav-pills">
            <li className="nav-item my-3">
                <Link to="/add-work" className="nav-item btn btn-primary">Add task</Link>
            </li>
        </ul>
        <h2>Works</h2>
        <WorksTable data={works}/>
    </div>
    )
}

export default Works;