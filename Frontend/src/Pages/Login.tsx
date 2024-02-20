// types/User.ts
import React, { useState } from 'react';
import '../styles/LoginForm.css'
import SignupImag from '../assets/signup.jpg'
import { Link } from 'react-router-dom';

 interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }
  


const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
      };
    
      return (
        <div className="signup-form-container">
          <h2>Login</h2>
          <div className="signup-form-container-right">
            <img src={SignupImag} alt="" />
            <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm Password"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to='/signup'> Signup</Link></p>
            
          </form>
          </div>
        </div>
      );
}

export default Login