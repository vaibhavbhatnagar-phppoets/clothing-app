import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5",
    },
    box: {
      padding: "30px",
      background: "white",
      borderRadius: "10px",
      width: "300px",
      textAlign: "center",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      background: "black",
      color: "white",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  const handleLogin = () => {
    if (user.email && user.password) {
      alert("Login Successful ✅");
      navigate("/");
    } else {
      alert("Please fill all fields ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
