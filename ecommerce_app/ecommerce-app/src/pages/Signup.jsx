import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({});

  const handleSignup = () => {
    console.log('User signed up with:', formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl">Signup</h2>
      <input
        type="text"
        placeholder="Username"
        className="p-2 border mt-4 w-full"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <button onClick={handleSignup} className="bg-green-500 text-white p-2 mt-4">
        Signup
      </button>
    </div>
  );
};

export default Signup;
