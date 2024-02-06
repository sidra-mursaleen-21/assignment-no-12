import React, { useState } from "react";
import Input from "../../components/input";
import credentail from "../../credntials";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const inputFeild = (key, value) => {
    setInput({ ...input, [key]: value });
  };

  const logIn = (e) => {
    e.preventDefault();
    const { username, password } = credentail;
    if (input.username === username && input.password === password) {
      localStorage.setItem("logIn", true);
      navigate("/home")
    } else {
      alert("wrong credential");
    }
  };

  return (
    <>
      <div className="mainContainer">
        <div className="logInContainer">
          <form onSubmit={logIn}>
            <h1>log in</h1>
            <Input
              id="username"
              required={true}
              type="text"
              placeholder="enter your username "
              label="user name"
              onChange={(e) => {
                inputFeild(e.target.id, e.target.value);
              }}
            />
            <Input
              id="password"
              required={true}
              type="password"
              placeholder="enter you password"
              label="password"
              onChange={(e) => {
                inputFeild(e.target.id, e.target.value);
              }}
            />
            <div className="logInButton">
              <button type="submit">log in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
