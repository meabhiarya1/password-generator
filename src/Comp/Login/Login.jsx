import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.generator}>Welcome to Password Generator</div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      {loggedIn && (
        <p className={styles.loggedInMessage}>Logged in successfully!</p>
      )}
    </div>
  );
};

export default Login;
