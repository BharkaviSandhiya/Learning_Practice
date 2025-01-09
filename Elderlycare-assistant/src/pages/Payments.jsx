import React, { useState } from 'react';
import { CreditCard, Smartphone, Building } from 'lucide-react';

function Payments() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected payment method:', paymentMethod);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-sage-800">Payment Options</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div className="space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment-method"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={handlePaymentMethodChange}
              className="form-radio text-sage-600 focus:ring-sage-500"
            />
            <CreditCard size={24} className="text-sage-600" />
            <span className="text-xl">Credit Card</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment-method"
              value="debit-card"
              checked={paymentMethod === 'debit-card'}
              onChange={handlePaymentMethodChange}
              className="form-radio text-sage-600 focus:ring-sage-500"
            />
            <Smartphone size={24} className="text-sage-600" />
            <span className="text-xl">Debit Card</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment-method"
              value="bank-transfer"
              checked={paymentMethod === 'bank-transfer'}
              onChange={handlePaymentMethodChange}
              className="form-radio text-sage-600 focus:ring-sage-500"
            />
            <Building size={24} className="text-sage-600" />
            <span className="text-xl">Bank Transfer</span>
          </label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-sage-600 text-white py-3 px-4 rounded-md hover:bg-sage-700 transition-colors text-xl"
        >
          Save Payment Method
        </button>
      </form>
    </div>
  );
}

export default Payments;

