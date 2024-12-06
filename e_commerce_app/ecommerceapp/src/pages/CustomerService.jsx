import React from 'react';

const CustomerService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Service</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>Our customer service team is available 24/7 to assist you with any questions or concerns.</p>
          <p>Email: support@example.com</p>
          <p>Phone: 1-800-123-4567</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
          <ul className="list-disc list-inside">
            <li>How do I track my order?</li>
            <li>What is your return policy?</li>
            <li>Do you offer international shipping?</li>
            <li>How can I change or cancel my order?</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Shipping Information</h2>
          <p>We offer free shipping on orders over $50. Standard shipping typically takes 3-5 business days.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Returns & Exchanges</h2>
          <p>We accept returns within 30 days of purchase. Items must be unused and in original packaging.</p>
        </section>
      </div>
    </div>
  );
};

export default CustomerService;

