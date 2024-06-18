import { useState, useEffect } from "react";
import * as service from "../../services/WorksCrudServices";
import { getClients } from "../../services/clientCrudServices";
import { getServices } from "../../services/servicesProvidedCrudServices";
import { useNavigate, Link, useParams, useAsyncError } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

/*

*/

const AddWork = () => {
  const [user, setUser] = useAuthState(auth);

  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    date: "",
    company: "",
    service: "",
    description: "",
    from: "",
    to: "",
    uid: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      service.updateWork(id, formData);
    } else {
      service.addWork({ ...formData, uid: user.uid });
      //   console.log(user.uid);
    }
    navigate("/");
  };

  useEffect(() => {
    id && service.getWorkById((item) => setFormData(item), id);
  }, [id]);

  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients((clients) => {
      setClients(clients);
    });
  }, []);

  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices((services) => {
      setServices(services);
    });
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2>Pridėti atliktą darbą</h2>
      </div>
      <div className="card-body">
        <form onSubmit={submitHandler} className="form">
          <div className="mb-3">
            <label htmlFor="date">Pasirinkite datą:</label>
            <input
              type="date"
              name="date"
              className="form-control"
              onChange={handleChange}
              value={formData.date}
            />
          </div>
          <div className="mb-3">
            <select
              name="company"
              className="form-control"
              onChange={handleChange}
              value={formData.company}
            >
              <option selected disabled>
                --Pasirinkite klientą--
              </option>
              {clients.map((client) => (
                <option value={client.clientId}>{client.clientName}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <select
              name="service"
              className="form-control"
              onChange={handleChange}
              value={formData.service}
            >
              <option selected disabled>
                --Pasirinkite paslaugą--
              </option>
              {services.map((service) => (
                <option value={service.serviceId}>{service.serviceName}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              className="form-control"
              placeholder="Darbo aprašymas"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="from">Nuo:</label>
            <input
              type="time"
              name="from"
              className="form-control"
              onChange={handleChange}
              value={formData.from}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to">To:</label>
            <input
              type="time"
              name="to"
              className="form-control"
              onChange={handleChange}
              value={formData.to}
            />
          </div>
          <div className="mb-3">
            {id ? (
              <button type="submit" className="btn btn-primary">
                Atnaujinti
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Saugoti
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWork;

{
  /* <option value="kb">Kilobaitas</option>
<option value="it">IT sfera</option> */
}
