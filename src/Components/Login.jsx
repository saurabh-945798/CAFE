import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs"; // For password hashing
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [name, setName] = useState(""); // Added name state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle login function
  const handleLogin = () => {
    // Simulated stored user data (this would normally come from your database)
    const storedUser = {
      name: "Vishal", // Example name
      username: "Gautam", // Example username
      passwordHash: bcrypt.hashSync("saurabh1403", 10), // Example hashed password using bcrypt
    };

    // Check if the input name and username match the stored values
    if (name === storedUser.name && username === storedUser.username) {
      // Check if the entered password matches the stored hashed password
      const passwordMatches = bcrypt.compareSync(password, storedUser.passwordHash);

      if (passwordMatches) {
        localStorage.setItem("isAdminAuthenticated", "true");
        toast.success("Login successful!");
        navigate("/admin"); // Navigate to the Admin page
      } else {
        toast.error("Invalid password!");
      }
    } else {
      toast.error("Invalid username or name!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <h2 style={styles.heading}> Cold Rock Admin Login</h2>

        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            placeholder="Enter your name"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            placeholder="Enter your username"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter your password"
          />
        </div>

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

// Styling for the login page
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f4f7", // Light background
    padding: "20px",
    boxSizing: "border-box",
  },
  loginCard: {
    backgroundColor: "#fff", // White card background
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
    width: "100%",
  },
  label: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    marginTop: "5px",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#007bff",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007bff", // Blue button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3", // Darker blue on hover
  },
};

export default Login;
