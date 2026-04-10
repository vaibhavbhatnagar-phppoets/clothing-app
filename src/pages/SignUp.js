import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
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
      background: "#ff3f6c",
      color: "white",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  const handleSignup = () => {
    if (user.name && user.email && user.password) {
      alert("Signup Successful 🎉");
      navigate("/login");
    } else {
      alert("Fill all fields ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Name"
          style={styles.input}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

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

        <button style={styles.button} onClick={handleSignup}>
          Signup
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
