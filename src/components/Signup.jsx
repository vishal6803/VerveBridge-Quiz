import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  let { name, password } = userData;

  function handleOnchange(e) {
    return setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  function handleSignUp(e) {
    e.preventDefault();
    const user = localStorage.setItem("user", JSON.stringify(userData));
    console.log(user);
    alert("Sucessfully Sign up");
  }
  return (
    <div>
      <div className="container  d-flex justify-content-around p-4 flex-wrap">
        <div>
          <h1>Sign Up</h1>
          <p>
            If you had aleady an account then go to{" "}
            <Link to={"/login"}>login</Link>
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
            onSubmit={handleSignUp}
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

export default Signup;
