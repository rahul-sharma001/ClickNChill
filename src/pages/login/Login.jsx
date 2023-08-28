import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <span className="text"> Click&Chill </span>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <Link className="loginButton" to ="/">Sign In</Link>
          <span>
            New to Click&Chill? <b><Link className="link" to ="/register">Sign up now.</Link></b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}