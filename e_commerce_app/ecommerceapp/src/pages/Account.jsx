import React from 'react';
import { Link } from 'react-router-dom';

const Account = ({ isLoggedIn, onLogout }) => {
    const orders = [
    { id: 1, date: '2023-05-15', total: 129.99, status: 'Delivered' },
    { id: 2, date: '2023-05-20', total: 79.99, status: 'Shipped' },
    { id: 3, date: '2023-05-25', total: 199.99, status: 'Processing' },
  ];

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Account</h1>
        <p>Please <Link to="/login" className="text-blue-500 hover:underline">log in</Link> to view your account details.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <button onClick={onLogout} className="btn btn-primary mt-4">Log Out</button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order History</h2>
          {orders.map(order => (
            <div key={order.id} className="border p-4 rounded mb-4">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <Link to={`/order/${order.id}`} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;

