import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({});

  const handleLogin = () => {
    login(credentials);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl">Login</h2>
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 mt-4">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
