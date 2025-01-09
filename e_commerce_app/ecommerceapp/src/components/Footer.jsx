import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/category/electronics" className="hover:text-gray-300">Electronics</Link></li>
              <li><Link to="/category/fashion" className="hover:text-gray-300">Fashion</Link></li>
              <li><Link to="/category/home" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/category/beauty" className="hover:text-gray-300">Beauty</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-gray-300">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-gray-300">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/our-story" className="hover:text-gray-300">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaLinkedin size={24} />
              </a>
            </div>
            <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; 2023 StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

