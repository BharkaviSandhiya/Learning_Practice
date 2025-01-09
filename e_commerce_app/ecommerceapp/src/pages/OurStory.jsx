import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaUsers, FaGlobe, FaLeaf } from 'react-icons/fa';

const MilestoneCard = ({ year, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-2xl font-bold text-orange-500 mb-2">{year}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-orange-500 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OurStory = () => {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-800">Our Story</h1>
        
        <div className="mb-12">
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
            StyleHub began as a small passion project in 2010 and has since grown into a leading e-commerce platform for fashion enthusiasts. Our journey is one of innovation, perseverance, and a commitment to bringing style to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <MilestoneCard
            year="2010"
            title="The Beginning"
            description="StyleHub was founded in a small garage, with a vision to revolutionize online fashion shopping."
          />
          <MilestoneCard
            year="2015"
            title="Expanding Horizons"
            description="We launched our mobile app and expanded our product range to include accessories and home decor."
          />
          <MilestoneCard
            year="2018"
            title="Going Global"
            description="StyleHub went international, shipping to over 50 countries and partnering with global brands."
          />
          <MilestoneCard
            year="2023"
            title="Sustainability Focus"
            description="We launched our eco-friendly collection and committed to reducing our carbon footprint."
          />
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8 text-orange-700">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <ValueCard
              icon={<FaShoppingBag size={40} />}
              title="Quality First"
              description="We curate only the best products for our customers."
            />
            <ValueCard
              icon={<FaUsers size={40} />}
              title="Customer Obsessed"
              description="Our customers are at the heart of everything we do."
            />
            <ValueCard
              icon={<FaGlobe size={40} />}
              title="Global Mindset"
              description="We embrace diversity and cater to global fashion trends."
            />
            <ValueCard
              icon={<FaLeaf size={40} />}
              title="Sustainability"
              description="We're committed to ethical and sustainable fashion practices."
            />
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-orange-700">Be Part of Our Story</h2>
          <p className="text-gray-700 mb-6">
            We're always looking for passionate individuals to join our team and help write the next chapter of StyleHub.
          </p>
          <div className="space-x-4">
            <Link
              to="/our-story"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 inline-block"
            >
              Read Our Full Story
            </Link>
            <Link
              to="/contact"
              className="bg-white text-orange-500 border border-orange-500 px-6 py-3 rounded-full hover:bg-orange-100 transition duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;

