import * as service from "../../../services/clientCrudServices";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddClient = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const [clientFormData, setClientFormData] = useState({
    clientName: "",
    clientId: "",
  })

  const handleChange = (e) => {
    setClientFormData({
      ...clientFormData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      service.updateClient(id, clientFormData)
    } else {
      service.addClient(clientFormData);
    }
    navigate("/clients-section");
  }

  useEffect(() => {
    id && service.getClientById((item) => setClientFormData(item), id)
  }, [id]);

  return (
    <div className="card">
      <div className="card-header">
        <h2>Pridėti klientą</h2>
      </div>
      <div className="card-body">
        <form onSubmit={submitHandler} className="form">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pavadinimas"
              name="clientName"
              value={clientFormData.clientName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Trumpinys (ID)"
              name="clientId"
              value={clientFormData.clientId}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Saugoti
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
