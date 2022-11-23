import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { error, login } from "../../redux/actions/userActions";
import LandingNav from "../LandingNav/LandingNav";
import "./Style.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user1 = {
    email,
    password,
  };
  const { user } = useSelector((state) => state.userReducer);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user1))
      .then(() => {
        JSON.stringify(localStorage.setItem("auth", true));
        // console.log(`/${user.name}/home`);
        // user && navigate(`/${user.name}/home`);
      })
      .catch((err) => dispatch(error(err)));
  };
  {
    user && setName("user.name");
  }
  {
    name && navigate(`/${user.name}/home`);
  }
  return (
    <div>
      <LandingNav />

      <div className="login">
        <div className="container__box">
          <div
            className="brand-logo"
            style={{
              background: "url('/images/deliveryLogo.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="brand-title">LOGIN</div>
          <form>
            <div className="inputs">
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="example@test.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>PASSWORD</label>
              <input
                type="password"
                placeholder="Min 6 charaters long"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="above__button">
                <button onClick={handleLogin}>LOGIN</button>
              </div>
              <Link to="/register">
                <p className="register__link">
                  Do not have an account? Register here
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
