import React from 'react';
import { FaShieldAlt, FaUserLock, FaCookieBite, FaExclamationTriangle } from 'react-icons/fa';

const PolicySection = ({ icon, title, content }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <div className="text-teal-500 mr-3">{icon}</div>
      <h2 className="text-2xl font-semibold text-teal-700">{title}</h2>
    </div>
    <div className="pl-9">
      {content}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-teal-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-teal-800">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <PolicySection
            icon={<FaShieldAlt size={24} />}
            title="Information We Collect"
            content={
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personal information (name, email address, shipping address)</li>
                <li>Payment information (credit card numbers, PayPal email)</li>
                <li>Demographic information (age, gender, location)</li>
                <li>Usage data (pages visited, products viewed, time spent on site)</li>
              </ul>
            }
          />
          
          <PolicySection
            icon={<FaUserLock size={24} />}
            title="How We Use Your Information"
            content={
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your orders and account</li>
                <li>To improve our website and customer service</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            }
          />
          
          <PolicySection
            icon={<FaCookieBite size={24} />}
            title="Cookies and Tracking Technologies"
            content={
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            }
          />
          
          <PolicySection
            icon={<FaExclamationTriangle size={24} />}
            title="Data Security"
            content={
              <p className="text-gray-700">
                We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            }
          />
          
          <div className="mt-8 p-4 bg-teal-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-teal-800">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.
            </p>
            <a
              href="/contact"
              className="text-teal-600 hover:text-teal-800 font-semibold"
            >
              Contact us to exercise these rights →
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="font-semibold">privacy@stylehub.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

