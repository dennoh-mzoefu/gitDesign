import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser, error } from "../../redux/actions/userActions";
import LandingNav from "../LandingNav/LandingNav";

import "./Style.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  // const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = {
    name,
    email,
    description,
    password,
    profilePic,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return dispatch(error("passwords do not match"));
    }
    dispatch(createUser(user))
      .then(() => {
        JSON.parse(localStorage.setItem("auth", true));
        JSON.parse(localStorage.setItem("user", user));
        navigate("/home");
      })
      .catch((err) => dispatch(error(err)).log(err));
  };
  const uploadImage = (files) => {
    console.log(files[0].name);
    setProfilePic(files[0].name);
  };

  return (
    <div>
      <LandingNav />
      <div className="register">
        <div className="container__box">
          <div className="brand-title">Sign Up</div>
          <div className="brand">
            <input type="file" onChange={(e) => uploadImage(e.target.files)} />
          </div>
          <div className="inputs">
            <label>USER NAME</label>
            <input
              type="text"
              placeholder="User name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="example@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>ABOUT YOU</label>
            <textarea
              rows="4"
              cols="30"
              name="comment"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              Enter text here...
            </textarea>
            <label>PASSWORD</label>
            <input
              type="password"
              placeholder="Min 6 charaters long"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>CONFIRM PASSWORD</label>
            <input
              type="password"
              placeholder="Min 6 charaters long"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="above__button">
              <button onClick={handleSubmit}>Sign Up</button>
            </div>
            <Link to="/login">
              <p className="register__link">Have an account? Login here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
