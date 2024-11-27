import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  login: () => void;
}

const Login: React.FC<LoginProps> = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      login(); // Trigger login function
      navigate('/dashboard'); // Redirect to Dashboard
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-accent">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-highlight"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-highlight"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-highlight text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-highlight underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

