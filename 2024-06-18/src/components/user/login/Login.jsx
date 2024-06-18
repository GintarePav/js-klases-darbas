import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, login } from "../../../services/AuthServices";
import Reset from "../reset/Reset";

const Login = ()=>{
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [user, loading, error] = useAuthState(auth);

    useEffect(()=>{
        if (loading) return;
        if(user)  navigate('/');
    }, [user, loading])

    const handleChange = (e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        login(userData.email, userData.password);

    }


    return(
        <form className="form container" onSubmit={submitHandler}>
            <div className="form-group mt-3">
                <input type="email" placeholder="El. paštas" name="email" onChange={handleChange} className="form-control"/>
            </div>
            <div className="form-group mt-3">
                <input type="password" placeholder="Slaptažodis" name="password" onChange={handleChange} className="form-control"/>
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">Prisijungti</button>
            </div>
            <div className="form-group mt-3">
               <p>Neturite paskyros? <Link to="/register">Galite susikurti</Link></p>
            </div>
            <div className="form-group mt-3">
               <p>Pamirsote slaptazodi? <Link to="/reset">Gaukite atkurimo nuoroda</Link></p>
            </div>
        </form>
    )
}

export default Login