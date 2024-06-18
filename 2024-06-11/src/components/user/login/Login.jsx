import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  login,
  auth,
} from "../../../services/authServices";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(userData.email, userData.password);
  };

console.log(userData);

  return (
    <form className="form container" onSubmit={submitHandler}>
      <div className="form-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className="form-froup mb-3">
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </div>
      <div className="form-froup mb-3">
        <p>
          Don't have an account? Create one <Link to="/register">here</Link>.
        </p>
      </div>
    </form>
  );
};

export default Login;
