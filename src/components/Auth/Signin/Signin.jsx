
import { useState } from "react";
import '../Signup/Signup.css';
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Auth } from "../../../Redux/Action/Auth";

export const Signin = () => {

    const auth = useSelector(store => store.auth.login);
    const dispatch = useDispatch()
    if(sessionStorage.getItem("token")) {
        dispatch(Auth(true))
    }
    
    
    console.log('auth',auth)
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [show, setShow] = useState('')

    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({...data, [name]: value});
    }

    const dataSubmit = (e) => {
        e.preventDefault();
        axios
          .post("https://localhost:8080/login", data)
          .then((res) => {
            if (res.data === "Either email or password is incorrect") {
              // console.log(res.data)
              setShow("Either email or password is incorrect");
            } else {
              sessionStorage.setItem("token", res.data.token);
              dispatch(Auth(true));
              console.log(auth);
              navigate("/");
            }
          });
    }

    return (
        <div className="signup">
            <div className="signupHead">
            </div>
            <h5>
             Login / Register
            </h5>
            <form onSubmit={dataSubmit}>
                <label>Email</label>
                <input type="text" onClick={() => setShow('')} name="email" id="email" onChange={getData} value={data.email} required/>
                <label>Password</label>
                <input type="password" onClick={() => setShow('')} name="password" id="password" onChange={getData} value={data.password} required/>
                <h5 className="redAlert">{show}</h5>
                <button>Login</button>
            </form>
        </div>
    )
}