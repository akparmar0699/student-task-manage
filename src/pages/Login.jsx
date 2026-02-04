import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {

  const [loginData,setLoginData]=useState({
    email: "",
    password: "", 
  });
   const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  //validation 

const validate = () => {
  const newErrors = {};

  if (!loginData.email.trim()) {
    newErrors.email = "email is required";
  }

  if (!loginData.password.trim()) {
    newErrors.password = "password is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};



  const handleInputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    // e.target.name=e.target.value
setLoginData({
  ...loginData,
  [e.target.name]:e.target.value,

});
    setErrors({
      ...errors,
      [e.target.name] :"",
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const storedUser = JSON.parse(localStorage.getItem("authData"));

    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
localStorage.setItem("loginData", JSON.stringify(storedUser));
navigate("/Dashboard");

    } else {
      setErrors({ common: "Invalid email or password" });
    }
  };
  

  return ( 
    <>
    <div className="form-container">
      {/*page title */}
      <h1 className="form-title">welcom back</h1>
      {/*login form */}
      <form onSubmit={handleSubmit}>
        {/*email field */}
        <div className="form-group">
          <label htmlFor="email">email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
              onChange={ handleInputChange }


          />
                        {errors.email && <span className="error-msg">{errors.email}</span>}

        </div>

        {/*password field */}
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter ypur password"
              onChange={ handleInputChange }


          />
                        {errors.password && <span className="error-msg">{errors.password}</span>}

        </div>

        {/*submit button */}
        <button className="btn-primary">login</button>
      </form>
      {/*link to register page */}
      <p className="link-text">
        Don't have an account? <Link to="/Register">Register here</Link>
      </p>
    </div>
    </>
  );
};

export default Login;