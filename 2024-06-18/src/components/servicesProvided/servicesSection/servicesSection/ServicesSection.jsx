import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../../../services/servicesProvidedCrudServices";
import ServicesTable from "../../servicesTable/ServicesTable";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    service.getServices((services) => {
      setServices(services);
    });
  }, []);

  console.log("Services retrieved:", services);

  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-item btn btn-primary" to="/add-service">
            Prideti paslaugas
          </Link>
        </li>
      </ul>
      <h2>Services</h2>
      <ServicesTable data={services}/>
    </div>
  );
};

export default ServicesSection;
