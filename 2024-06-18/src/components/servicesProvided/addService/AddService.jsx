import * as service from "../../../services/servicesProvidedCrudServices";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [servicesFormData, setServicesFormData] = useState({
    serviceName: "",
    serviceId: "",
  });

  const handleChange = (e) => {
    setServicesFormData({
      ...servicesFormData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      service.updateService(id, servicesFormData)
    } else {
      service.addService(servicesFormData);
    }
    navigate("/services-section");
  };

  useEffect(() => {
    id && service.getServiceById((item) => setServicesFormData(item), id)
  }, [id])

  return (
    <div className="card">
      <div className="card-header">
        <h2>Pridėti paslaugą</h2>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={submitHandler}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pavadinimas"
              name="serviceName"
              value={servicesFormData.serviceName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Trumpinys (ID)"
              name="serviceId"
              value={servicesFormData.serviceId}
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

export default AddService;
