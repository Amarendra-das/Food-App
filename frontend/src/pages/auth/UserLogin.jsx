import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/auth-shared.css';


import { Link } from 'react-router-dom';

function UserLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/user/login', form, { withCredentials: true });
      setMessage('Login successful!');
      setTimeout(() => { window.location.href = '/'; }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="user-login-title">
        <header>
          <h1 id="user-login-title" className="auth-title">User login</h1>
          <p className="auth-subtitle">Sign in to your user account.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" autoComplete="email" />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" autoComplete="current-password" />
          </div>
          <button className="auth-submit" type="submit">Sign In</button>
          {message && <div style={{ color: 'red', textAlign: 'center' }}>{message}</div>}
        </form>
        <div className="auth-alt-action">
          New user? <Link to="/user/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
