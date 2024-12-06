import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { processPayment } from '../services/PaymentService';

const Payment = () => {
  const { cart } = useCart();
  const [paymentStatus, setPaymentStatus] = useState('');

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = async () => {
    const response = await processPayment(totalAmount);
    setPaymentStatus(response.status);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl">Payment</h2>
      <ul className="mt-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <span>{formatCurrency(item.price)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <span>Total: {formatCurrency(totalAmount)}</span>
        <button onClick={handlePayment} className="bg-blue-500 text-white p-2">
          Proceed to Payment
        </button>
      </div>
      {paymentStatus && <div className="mt-4">{paymentStatus}</div>}
    </div>
  );
};

export default Payment;
