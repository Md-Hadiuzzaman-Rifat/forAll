/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./AdminLogin.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useDispatch } from "react-redux";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch= useDispatch()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch]);

  const { login, logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/dashboard/orders")
    } catch (err) {
      setError("Failed to Login");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button-field">
            <button className="button-field1" disabled={loading} type="submit">
              Login
            </button>
            <button className="button-field2" onClick={()=>logout()}>Logout</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;