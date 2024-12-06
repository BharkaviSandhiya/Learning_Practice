import React from 'react';

const CouponDisplay = ({ coupons }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {coupons.map((coupon) => (
        <div key={coupon.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{coupon.discount}</h3>
            <span className="text-sm font-medium text-gray-500">Code: {coupon.code}</span>
          </div>
          <p className="text-gray-600 mb-4">{coupon.description}</p>
          <div className="w-full h-8 border-t border-dashed border-gray-300 relative">
            <div className="absolute -left-3 -top-4 w-6 h-6 bg-gray-100 rounded-full border border-gray-200"></div>
            <div className="absolute -right-3 -top-4 w-6 h-6 bg-gray-100 rounded-full border border-gray-200"></div>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Apply Coupon
          </button>
        </div>
      ))}
    </div>
  );
};

export default CouponDisplay;

