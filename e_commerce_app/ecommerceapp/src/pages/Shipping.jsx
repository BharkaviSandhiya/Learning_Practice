import React from 'react';
import { FaShippingFast, FaGlobeAmericas, FaBoxOpen, FaTruck } from 'react-icons/fa';

const ShippingMethod = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
    <div className="text-green-500 mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Shipping = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Shipping Information</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ShippingMethod
            icon={<FaShippingFast size={24} />}
            title="Standard Shipping"
            description="Delivery within 3-5 business days. Free for orders over $50."
          />
          <ShippingMethod
            icon={<FaTruck size={24} />}
            title="Express Shipping"
            description="Delivery within 1-2 business days. Additional fees apply."
          />
          <ShippingMethod
            icon={<FaGlobeAmericas size={24} />}
            title="International Shipping"
            description="Delivery within 7-14 business days. Customs fees may apply."
          />
          <ShippingMethod
            icon={<FaBoxOpen size={24} />}
            title="Local Pickup"
            description="Free pickup at our designated locations within 24 hours of order confirmation."
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Shipping Policies</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>All orders are processed within 1-2 business days after payment confirmation.</li>
            <li>Shipping times are estimates and are not guaranteed.</li>
            <li>We offer free standard shipping on orders over $50 within the continental United States.</li>
            <li>International customers are responsible for any customs fees or taxes imposed by their country.</li>
            <li>For any issues with your shipment, please contact our customer support within 48 hours of delivery.</li>
          </ul>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Track Your Order</h3>
          <p className="mb-4 text-gray-600">Enter your order number to get real-time updates on your shipment.</p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Order Number"
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300">
              Track
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

