import React from 'react';
import { FaBriefcase, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const JobListing = ({ title, department, location, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="text-gray-600 mb-2">{department} | {location}</div>
    <p className="text-gray-700 mb-4">{description}</p>
    <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300">
      Apply Now
    </button>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-indigo-500 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      description: "We're looking for an experienced software engineer to help build and scale our e-commerce platform."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      description: "Join our design team to create intuitive and beautiful user experiences for our customers."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Los Angeles, CA",
      description: "Lead our marketing efforts to grow our brand and reach new customers in the fashion industry."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Join Our Team</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <ValueCard
              icon={<FaUsers size={40} />}
              title="Collaboration"
              description="We believe in the power of teamwork and diverse perspectives."
            />
            <ValueCard
              icon={<FaLightbulb size={40} />}
              title="Innovation"
              description="We encourage creative thinking and novel solutions."
            />
            <ValueCard
              icon={<FaBriefcase size={40} />}
              title="Excellence"
              description="We strive for the highest quality in everything we do."
            />
            <ValueCard
              icon={<FaRocket size={40} />}
              title="Growth"
              description="We support personal and professional development."
            />
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700">Current Openings</h2>
          {jobOpenings.map((job, index) => (
            <JobListing key={index} {...job} />
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Why Work With Us?</h2>
          <p className="text-gray-700 mb-6">
            At StyleHub, we offer more than just a job. We provide a dynamic work environment where your ideas are valued,
            your growth is supported, and your work makes a real impact. Join us in shaping the future of fashion e-commerce!
          </p>
          <ul className="text-left text-gray-600 mb-6 inline-block">
            <li className="mb-2">✓ Competitive salary and equity packages</li>
            <li className="mb-2">✓ Flexible work arrangements</li>
            <li className="mb-2">✓ Comprehensive health benefits</li>
            <li className="mb-2">✓ Professional development opportunities</li>
            <li>✓ Fun and inclusive company culture</li>
          </ul>
          <a
            href="/contact"
            className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition duration-300 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;

