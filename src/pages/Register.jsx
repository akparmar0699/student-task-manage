import React, { useEffect, useState } from "react";
import './Register.css';
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  // state declaration section
  const [formData, setFormData] =useState ({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  //logic section


  const validate = () =>{
    const newErrors = {}
    if(!formData.name.trim()){
      newErrors.name = "Full Name is required."
    }
    else if(formData.name.trim().length <= 3){
      newErrors.name = "Minimum 3 characters required."
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is required."
    }
   else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format."
  }

   if(!formData.phone.trim()){
      newErrors.phone = "Phone number is required."
    }
   else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format."
  }
    if(!formData.password.trim()){
      newErrors.password = "Password is required."
    }
   else if(formData.password.trim().length < 6){
      newErrors.password = "Minimum 6 characters required."
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }

  const handleInputChange = (e) => {
    //console.log(e.target.name,e.target.value);
    // e.target.name = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: ""
    })
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validate()){
      localStorage.setItem("authData",JSON.stringify(formData))
      alert('Registration successful!...')
      navigate("/login");
    }
  }

 // useEffect(()=>{
   // console.log(formData)
  // },[formData])

  //design section

  return (
    <>
      <div className="form-container">
        {/* page title*/}

        <h1 className="form-title">REGISTER</h1>
        <form onSubmit={handleSubmit}>
          {/* name field*/}
          <div className="form-group">
            <label htmlFor="name">Full name </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="enter your full name"
              onChange={handleInputChange}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          {/*email field */}
          <div className="form-group">
            <label htmlFor="email">email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="enter your email"
              onChange={handleInputChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* phone number field */}
          <div className="form-group">
            <label htmlFor="phone" phone number></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="enter your phone number"
              onChange={handleInputChange}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/*password field  */}
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="create a password"
              onChange={handleInputChange}
            />
            {errors.password && (<span className="error-msg">{errors.password}</span>)}
          </div>

          {/*submit button  */}

          <button type="submit" className="btn-primary">
            register
          </button>
        </form>

        <p className="link-text">
          Don't have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
