import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({
    name: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Ensure storedUser and loginData have defined 'name' properties before trimming
    if (
      storedUser &&
      storedUser.name && loginData.name &&
      storedUser.name.trim() === loginData.name.trim() &&
      storedUser.password === loginData.password
    ) {
      navigate('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={loginData.name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <Link to="/signup">Not have an account? Signup</Link>

      </form>
    </div>
  );
}

export default Login;
