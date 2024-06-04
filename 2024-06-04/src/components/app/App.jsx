import Header from "../header/Header";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import About from "../about/About";
import Main from "../main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
