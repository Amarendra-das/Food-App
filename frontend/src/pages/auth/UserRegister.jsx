import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/auth-shared.css';


import { Link } from 'react-router-dom';

function UserRegister() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/user/register', form, { withCredentials: true });
      setMessage('Registration successful!');
      setTimeout(() => { window.location.href = '/user/login'; }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="user-register-title">
        <header>
          <h1 id="user-register-title" className="auth-title">User sign up</h1>
          <p className="auth-subtitle">Join as a regular user and enjoy our services.</p>
        </header>
        <nav className="auth-alt-action" style={{marginTop: '-4px'}}>
          <strong style={{fontWeight:600}}>Switch:</strong> <Link to="/user/register">User</Link> • <Link to="/food-partner/register">Food partner</Link>
        </nav>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" name="fullName" type="text" value={form.fullName} onChange={handleChange} placeholder="Full Name" autoComplete="name" />
          </div>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" autoComplete="email" />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" autoComplete="new-password" />
          </div>
          <button className="auth-submit" type="submit">Create User Account</button>
          {message && <div style={{ color: 'red', textAlign: 'center' }}>{message}</div>}
        </form>
        <div className="auth-alt-action">
          Already a user? <Link to="/user/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
