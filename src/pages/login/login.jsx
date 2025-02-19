import "./login.css";
import assets from "../../assets/assets";
import { useState } from "react";
import { signup, login } from "../../config/firebase";

const Login = () => {
  const [curr, setCurr] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (curr === "Sign Up") {
      signup(username, email, password);
    }

    if (curr === "Login") {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="background" className="logo" />
      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <h2> {curr}</h2>
        {curr === "Sign Up" ? (
          <input
            type="text"
            placeholder="usename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            required
          />
        ) : null}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email Adress"
          className="form-input"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="form-input"
        />
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
