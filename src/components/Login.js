import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.email || !formData.password) {
      setError("Both fields are required!");
      return;
    }
  
    // Store user email and password in localStorage
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);
  
    // Simulate login process (You can replace this with a real authentication process)
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.email === formData.email && user.password === formData.password
        );
        if (user) {
          handleLogin();
          navigate("/profile"); // Navigate to profile after successful login
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error checking user credentials:", error);
        setError("Failed to authenticate.");
      });
  };
  
  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "50px" }}>
      <h2 className="text-center">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">Login</button>
      </form>
      <p className="text-center mt-3">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
      <p className="text-center">
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
};

export default LoginPage;
