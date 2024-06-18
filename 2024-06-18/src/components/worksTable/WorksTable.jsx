import Work from "../work/Work"
const WorksTable = (props)=>{
    console.log('work table', props.data)
    return(
        <table className="table table-bordered table-striped">  
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Klientas</th>
                    <th>Suteikta paslauga</th>
                    <th>Aprašymas</th>
                    <th>Nuo</th>
                    <th>Iki</th>
                    <th>Keisti</th>
                    <th>Šalinti</th>
                </tr>
            </thead>
            <tbody>
                {props.data?.map(work=><Work
                id = {work.id}
                date={work.date}
                company = {work.company}
                service = {work.service}
                description={work.description}
                from ={work.from}
                to = {work.to}
            />)}
            </tbody>
        </table>
    )
}

export default WorksTable