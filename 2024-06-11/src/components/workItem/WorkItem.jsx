const WorkItem = (props)=> {
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.client}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.from}</td>
            <td>{props.to}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    )
}

export default WorkItem