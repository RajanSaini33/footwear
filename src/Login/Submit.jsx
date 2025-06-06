import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Submit = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      username,
      email,
      password
    };

    const existingData = JSON.parse(localStorage.getItem("registerUser")) || [];
    const updatedData = [...existingData, newUser];
    localStorage.setItem("registerUser", JSON.stringify(updatedData));

    alert("User registered successfully!");

    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center justify-center text-[40px] mb-4">
        <FaRegUserCircle className="opacity-50" />
      </div>

      <h1 className="text-3xl text-center">Sign Up</h1>
      <p className="text-xl text-center mt-3">Welcome to the Page</p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className="mt-4 w-full p-2 border-2 rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-4 w-full p-2 border-2 rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-4 w-full p-2 border-2 rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 mt-6 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>

      <p className="mt-4 text-center text-sm">
        Already registered?{' '}
        <Link to="/Login" className="text-blue-600 underline">
          Login here
        </Link>
      </p>
    </form>
  );
};

export default Submit;
