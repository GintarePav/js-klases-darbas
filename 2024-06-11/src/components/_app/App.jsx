import Header from "../header/Header";
import Works from "../works/Works";
import AddWorkItem from "../addWorkItem/AddWorkItems";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/add-work" element={<AddWorkItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
