import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <div className="navbar-nav">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/contact">
        Contacts
      </Link>
    </div>
  );
};

export default NavbarLinks;
