import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default Card;
