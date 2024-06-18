import Header from "../header/Header";
import Works from "../works/Works";
import AddWorkItem from "../addWorkItem/AddWorkItems";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../user/register/Register";
import Login from "../user/login/Login";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/add-work" element={<AddWorkItem />} />
          <Route path="/update/:id" element={<AddWorkItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
