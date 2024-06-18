import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import * as userServices from "../../../services/userServices";
import { auth, logout } from "../../../services/AuthServices";
const Profile = ()=>{
    const [userData, setUserData] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading) return;
        if(!user) navigate('/login');
        userServices.getUserData(user, setUserData) 
    }, [user, loading])


    return(
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link active">Pradinis</Link>
                </li>
                {user?
                <li className="nav-item dropdown">
                    <a href="" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{userData.name}</a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item">{userData.email}</li>
                        <li className="dropdown-item"><Link to="/clients-section">Clients</Link></li>
                        <li className="dropdown-item"><Link to="/services-section">Services</Link></li>
                        <li className="dropdown-item" onClick={logout}>Atsijungti</li>
                    </ul>
                </li>:
                <li className="nav-item"><Link to="/login" className="nav-link">Prisijungti</Link></li>
                }

        </ul>
    )
}

export default Profile