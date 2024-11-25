import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setMessage("A password reset link has been sent to your email address.");
    setError("");
  };

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "50px" }}>
      <h2 className="text-center">Forgot Password</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
