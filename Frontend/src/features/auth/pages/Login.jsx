import React from 'react'
import "../styles/login.scss"
import FormGroup from '../components/FormGroup'
import  { Link } from 'react-router-dom'
const Login = () => {
  return (
    <main className="login-page">
       <div className="form-container">
        <h1>Login</h1>
        <form >
            <FormGroup label="email" placeholder="Enter the email" type="email" required={true}/>
            <FormGroup label="password" placeholder="Enter the password" type="password" required={true}/>
            <button type='submit'>Login</button>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </form>
       </div>
    </main>
  )
}

export default Login