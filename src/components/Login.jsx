import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login({ setIsLogIn }) {
  const [usersArr, setUsersArr] = useState(
    JSON.parse(localStorage.getItem("usersArr")) || []
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [theUser, setTheUser] = useState(null);

  useEffect(() => {
    setTheUser(usersArr?.find((user) => user.email === username));
  }, [usersArr, username]);

  useEffect(() => {
    const loginDataString = localStorage.getItem("loginData");
    if (loginDataString) {
      const parsedLoginData = JSON.parse(loginDataString);
      setLoginData(parsedLoginData);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (theUser && theUser.password === password) {
      const updatedLoginData = {
        [username]: password,
      };
      const updatedLoginDataString = JSON.stringify(updatedLoginData);

      localStorage.setItem("loginData", updatedLoginDataString);

      setLoginData(updatedLoginData);
      setSubmitted(true);

      // setIsLogIn(true);

      const url = `/Volunteer`;

      window.history.pushState({}, "", url);
      window.location.reload();
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div className="logIn-container">
      <h2 className="login-title">התחבר בתור מתנדב</h2>

      <div>
        <div className="form-outline form-white">
          <input
            type="email"
            className="form-control form-control-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label">אימייל</label>
        </div>
        <div>
          <input
            type="password"
            className="form-control form-control-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label">סיסמה</label>
        </div>

        <div>
          <p className="mb-0">
            אין לך עדיין חשבון?{" "}
            <Link to="/SignUp" className="text-white-50 fw-bold">
              הירשם
            </Link>
          </p>
        </div>
      </div>
      <button
        className="btn btn-outline-light btn-lg px-5"
        type="submit"
        onClick={handleLogin}
      >
        התחבר
      </button>
    </div>
  );
}

export default Login;
