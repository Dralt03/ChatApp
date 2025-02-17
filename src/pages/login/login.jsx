import "./login.css";
import assets from "../../assets/assets";
import { useState } from "react";

const Login = () => {
  const [curr, setCurr] = useState("Sign Up");
  return (
    <div className="login">
      <img src={assets.logo_big} alt="background" className="logo" />
      <form className="login-form">
        <h2> {curr}</h2>
        {curr === "Sign Up" ? (
          <input
            type="text"
            placeholder="usename"
            className="form-input"
            required
          />
        ) : null}
        <input type="email" placeholder="Email Adress" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <button type="Submit">{curr}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to terms & services </p>
        </div>
        <div className="login-forgot">
          {curr === "Sign Up" ? (
            <p className="login-toggle">
              Already Have an account{" "}
              <span onClick={() => setCurr("Login")}>Click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurr("Sign Up")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
