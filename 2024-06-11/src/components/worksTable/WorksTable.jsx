import WorkItem from "../workItem/WorkItem";

const WorksTable = (props) => {
    console.log(props.data);
    return(
        <table className="table table-borderd table-striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Client</th>
                    <th>Service</th>
                    <th>Description</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.data?.map((work) => 
                    <WorkItem 
                    key={work.id}
                    date={work.date}
                    client={work.company}
                    service={work.service}
                    description={work.description}
                    from={work.from}
                    to={work.to}
                    />
                )}
            </tbody>
        </table>
    )
}

export default WorksTable;