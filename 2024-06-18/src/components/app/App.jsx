import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import Login from "../user/login/Login";
import Register from "../user/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reset from "../user/reset/Reset";
import ClientsSection from "../clients/clientsSection/ClientsSection";
import AddClient from "../clients/addClient/AddClient";
import ServicesSection from "../servicesProvided/servicesSection/servicesSection/ServicesSection";
import AddService from "../servicesProvided/addService/AddService";

const App = ()=> {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Works/>}/>
          <Route path="/add-work" element={<AddWork/>}/>
          <Route path="/update/:id" element={<AddWork/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/clients-section" element={<ClientsSection />}></Route>
          <Route path="/add-client" element={<AddClient />}></Route>
          <Route path="/update-client/:id" element={<AddClient/>}/>
          <Route path="/services-section" element={<ServicesSection />}></Route>
          <Route path="/add-service" element={<AddService />}></Route>
          <Route path="/update-service/:id" element={<AddService />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
