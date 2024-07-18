import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { Link } from "react-router-dom";

function Login() {
  const { setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  let { name, password } = userData;

  function handleOnchange(e) {
    return setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      if (user.password === userData.password) {
        alert("login successfully");
        navigate("/user/quiz");
        setIsLogin(true);
      } else {
        alert("incorrect password");
      }
    } else {
      alert("user not found");
    }
  }
  return (
    <div>
      <div className="container  d-flex justify-content-around p-4 flex-wrap">
        <div>
          <h1>Login</h1>
          <p>
            If you do not an account then go to <Link to={"/"}>Sign Up</Link>
          </p>
          <p>
            Sign up and create your account and then you get ready to solve the
            questions
          </p>
        </div>
        <div>
          <form
            className="form-control p-4 shadow-lg"
            style={{ background: "#bee1e6" }}
            onSubmit={handleLogin}
          >
            <label htmlFor="name" className="form-label">
              UserName
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleOnchange}
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleOnchange}
            />
            <button
              style={{ background: "#a0c4ff" }}
              className="form-control my-3 text-white"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
