import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import "../styles/register.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
const Register = () => {
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate('/')
  };

  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
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
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
            label="username"
            placeholder="Enter the username"
            type="text"
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
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
