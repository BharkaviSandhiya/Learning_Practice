import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-blue-500" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Please check the product page for specific return information. Items must be in their original condition and packaging."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary depending on your location and the shipping method chosen. Typically, orders are delivered within 3-7 business days for domestic shipping and 7-14 business days for international shipping."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to many countries worldwide. Shipping costs and delivery times may vary depending on the destination. Please check our shipping page for more details."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are securely processed."
    },
    {
      question: "How do I care for my StyleHub products?",
      answer: "Care instructions vary by product. Please refer to the care label on each item for specific instructions. Generally, we recommend washing clothes in cold water and air drying to maintain their quality and longevity."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">FAQ'S</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">Can't find the answer you're looking for?</p>
          <a href="/contact" className="text-purple-600 font-semibold hover:underline">Contact our support team</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

