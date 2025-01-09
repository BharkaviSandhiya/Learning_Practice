import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

const CouponDisplay = ({ coupons }) => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {coupons.map((coupon) => (
        <div key={coupon.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{coupon.discount}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500">{coupon.code}</span>
              <button
                onClick={() => handleCopyCode(coupon.code)}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Copy coupon code"
              >
                {copiedCode === coupon.code ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaCopy />
                )}
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{coupon.description}</p>
          <div className="w-full h-8 border-t border-dashed border-gray-300 relative">
            <div className="absolute -left-3 -top-4 w-6 h-6 bg-gray-100 rounded-full border border-gray-200"></div>
            <div className="absolute -right-3 -top-4 w-6 h-6 bg-gray-100 rounded-full border border-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponDisplay;

