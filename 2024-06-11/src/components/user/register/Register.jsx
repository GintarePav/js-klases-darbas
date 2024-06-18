import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { registerWithEmailAndPassword, auth } from "../../../services/authServices";


const Register = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstName: '',
        email: '',
        password: ''
    });

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        registerWithEmailAndPassword(userData.firstName, userData.email, userData.password)
    }

    // console.log('user data from google:', user);
  return (
    <form onSubmit={submitHandler} className="form container">
      <div className="form-group mb-3">
        <input type="text" onChange={handleChange} placeholder="Name" className="form-control" name="firstName" />
      </div>
      <div className="form-group mb-3">
        <input type="email" onChange={handleChange} placeholder="Email" className="form-control" name="email" />
      </div>
      <div className="form-group mb-3">
        <input type="password" onChange={handleChange} placeholder="Password" className="form-control" name="password" />
      </div>
      <div className="form-froup mb-3">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
      <div className="form-froup mb-3">
        <p>
          Already have an account? Log in <Link to="/login">here</Link>.
        </p>
      </div>
    </form>
  );
};

export default Register;
