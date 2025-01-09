import React from 'react';

const TopStories = ({ stories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stories.map((story) => (
        <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
            <p className="text-gray-600">{story.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopStories;

