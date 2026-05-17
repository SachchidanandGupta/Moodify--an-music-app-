import React, { useState } from "react";
import "../styles/login.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
const Login = () => {
  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({  email, password });
    navigate("/")
  };
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            label="email"
            placeholder="Enter the email"
            type="email"
            required={true}
          />
          <FormGroup
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            label="password"
            placeholder="Enter the password"
            type="password"
            required={true}
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
