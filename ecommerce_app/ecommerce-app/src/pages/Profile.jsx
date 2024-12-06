import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl">Profile</h2>
      {user ? (
        <div className="mt-4">
          <p>Name: {user.name}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
