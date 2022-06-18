
import axios from "axios";
import { useState } from "react";
import "../Signup/Signup.css";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState("");
  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const dataSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://master-pharm.herokuapp.com/register", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.errors) {
          if (res.data.errors.length === 3) {
            setShow("Password is not strong");
          } else {
            setShow("Email id already exist");
          }
        } else {
          navigate("/");
        }
      });
  };
  return (
    <div className="signup">
      <div className="signupHead">
        <h1>Sign in India Today</h1>
        <h5>Don't have an account ? </h5><h4>Sign up Now </h4>
      </div>
      <h5>Sign In using your Email or Mobile no.</h5>
      <form onSubmit={dataSubmit}>
        <label>Email</label>
        <input
          onClick={() => setShow("")}
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email.."
          onChange={getData}
          value={data.email}
          required
        />
        <label>Password</label>
        <input
          onClick={() => setShow("")}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password.."
          onChange={getData}
          value={data.password}
          required
        />
        <h6>Forgot Password ??</h6>
        <h5 className="redAlert">{show}</h5>
        <button>Log in</button>
      </form>
    </div>
  );
};