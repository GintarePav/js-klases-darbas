import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../about/About";
import Contacts from "../contacts/contactsSection/ContactsSection";
import Home from "../home/Home";
import { todaysDate } from "../_variables/Variables";
import Header from "../navigation/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home date={todaysDate}/>} />
          <Route path="/about" element={<About date={todaysDate}/>} />
          <Route path="/contact" element={<Contacts date={todaysDate} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
