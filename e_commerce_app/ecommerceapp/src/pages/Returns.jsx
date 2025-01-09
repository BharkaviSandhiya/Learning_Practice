import React from 'react';
import { FaExchangeAlt, FaClipboardCheck, FaTruck, FaMoneyBillWave } from 'react-icons/fa';

const ReturnStep = ({ icon, title, description }) => (
  <div className="flex items-center mb-6">
    <div className="bg-yellow-400 p-3 rounded-full mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Returns = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-800">Returns & Exchanges</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Our 30-Day Guarantee</h2>
          <p className="text-gray-700 mb-4">
            We want you to love your StyleHub purchase. If you're not completely satisfied, we offer a hassle-free 30-day return or exchange policy on most items.
          </p>
          <div className="bg-yellow-100 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Please Note:</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Items must be unworn, unwashed, and in their original packaging with tags attached.</li>
              <li>Some items, such as intimates and personalized products, are not eligible for return.</li>
              <li>Sale items are eligible for exchange or store credit only.</li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-700">How to Return</h2>
            <ReturnStep
              icon={<FaExchangeAlt className="text-yellow-800" />}
              title="Initiate Your Return"
              description="Log in to your account and go to the 'Orders' section to start the return process."
            />
            <ReturnStep
              icon={<FaClipboardCheck className="text-yellow-800" />}
              title="Print Return Label"
              description="Print the prepaid return label provided or request one if you don't have a printer."
            />
            <ReturnStep
              icon={<FaTruck className="text-yellow-800" />}
              title="Ship Your Return"
              description="Pack the item securely and drop it off at your nearest postal service location."
            />
            <ReturnStep
              icon={<FaMoneyBillWave className="text-yellow-800" />}
              title="Receive Your Refund"
              description="Once we receive and process your return, we'll issue a refund to your original payment method."
            />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How long does it take to process my return?</h3>
                <p className="text-gray-600">We typically process returns within 5-7 business days of receiving your package.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do I have to pay for return shipping?</h3>
                <p className="text-gray-600">For standard returns, we provide a prepaid return label. For exchanges, return shipping is always free.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I exchange an item for a different size or color?</h3>
                <p className="text-gray-600">Yes, you can easily request an exchange during the return process. Simply select the new size or color you'd like.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300 inline-block">
            Need Help? Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Returns;

