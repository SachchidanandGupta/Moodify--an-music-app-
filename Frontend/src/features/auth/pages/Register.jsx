import React from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/register.scss"
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <main className="register-page">
        <div className="form-container">
            <h1>Register</h1>
            <form>
                <FormGroup label="email" placeholder="Enter the email" type="email" required={true}/>
                <FormGroup label="username" placeholder="Enter the username" type="text" required={true}/>
                <FormGroup label="password" placeholder="Enter the password" type="password" required={true}/>

                <button type='submit'>Register</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Register