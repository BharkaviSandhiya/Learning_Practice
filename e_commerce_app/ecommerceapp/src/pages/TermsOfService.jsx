import React from 'react';
import { FaGavel, FaUserCircle, FaShoppingCart, FaCreditCard, FaExclamationCircle } from 'react-icons/fa';

const TermsSection = ({ icon, title, content }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <div className="text-gray-700 mr-3">{icon}</div>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="pl-9 text-gray-700">
      {content}
    </div>
  </div>
);

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <TermsSection
            icon={<FaGavel size={24} />}
            title="1. Acceptance of Terms"
            content={
              <p>
                By accessing and using StyleHub's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            }
          />
          
          <TermsSection
            icon={<FaUserCircle size={24} />}
            title="2. User Accounts"
            content={
              <ul className="list-disc list-inside space-y-2">
                <li>You must be at least 18 years old to create an account.</li>
                <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                <li>You agree to accept responsibility for all activities that occur under your account.</li>
              </ul>
            }
          />
          
          <TermsSection
            icon={<FaShoppingCart size={24} />}
            title="3. Products and Pricing"
            content={
              <ul className="list-disc list-inside space-y-2">
                <li>All product descriptions and pricing are subject to change without notice.</li>
                <li>We reserve the right to limit the quantity of items purchased per order.</li>
                <li>Colors and appearances of products may vary slightly from images on the website.</li>
              </ul>
            }
          />
          
          <TermsSection
            icon={<FaCreditCard size={24} />}
            title="4. Payments and Refunds"
            content={
              <ul className="list-disc list-inside space-y-2">
                <li>We accept major credit cards, PayPal, and other specified payment methods.</li>
                <li>All payments are processed securely through our payment providers.</li>
                <li>Refunds are subject to our Return Policy, which can be found on our website.</li>
              </ul>
            }
          />
          
          <TermsSection
            icon={<FaExclamationCircle size={24} />}
            title="5. Limitation of Liability"
            content={
              <p>
                StyleHub shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            }
          />
          
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms of Service at any time. We will always post the most current version on our website. By continuing to use our service after changes become effective, you agree to be bound by the revised terms.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="font-semibold">legal@stylehub.com</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

