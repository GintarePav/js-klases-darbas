import { useState } from "react";
import * as service from "../../services/worksCrudServices";
import { useNavigate } from "react-router-dom";

const AddWorkItem = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date: "",
        company: "",
        service: "",
        description: "",
        from: "",
        to: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        service.addWork(formData);
        navigate("/");
    }

    return(
        <div className="card">
            <div className="card-header">
                <h2>Add a task</h2>
            </div>
            <div className="card-body">
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="date">Choose date</label>
                        <input type="date" name="date" className="form-control" onChange={handleChange} value={formData.date}/>
                    </div>
                    <div className="mb-3">
                        <select name="company" className="form-select" onChange={handleChange} value={formData.company}>
                            <option value="">Client</option>
                            <option value="kb">Kilobaitas</option>
                            <option value="it">IT sfera</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <select name="service" className="form-select" onChange={handleChange} value={formData.service}>
                            <option value="">Service</option>
                            <option value="dev">Development</option>
                            <option value="ux">UX research</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="description" className="form-control" placeholder="Description" onChange={handleChange} value={formData.description}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">From</label>
                        <input type="time" name="from" className="form-control" onChange={handleChange} value={formData.from} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">To</label>
                        <input type="time" name="to" className="form-control" onChange={handleChange} value={formData.to} />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWorkItem;