import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const userData = JSON.parse(localStorage.getItem("registerUser")) || [];
    const user = userData.find((user) => user.email === email && user.password === password);

    if (user) {
      alert("Login successful");
      localStorage.setItem("loginUser", JSON.stringify({ email, password }));
      navigate('/Home');
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center text-4xl mb-4">
        <FaRegUserCircle className='opacity-50' />
      </div>
      <h1 className="text-3xl text-center">Login</h1>
      <p className="text-lg text-center mt-3">Welcome to the page</p>

      <div className="mt-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 mt-6 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
        Login
      </button>

      <Link to="/Submit" className="text-blue-500 hover:underline mt-4 block text-center">
        New user? Register here
      </Link>
    </form>
  );
};

export default Login;
