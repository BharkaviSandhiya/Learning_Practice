import React, { useState } from 'react';
import { Check } from 'lucide-react';

function Subscription() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscriptionChange = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-sage-800">Subscription Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isSubscribed}
            onChange={handleSubscriptionChange}
            className="form-checkbox h-6 w-6 text-sage-600 focus:ring-sage-500"
          />
          <span className="text-2xl font-semibold">Premium Subscription</span>
        </label>
        {isSubscribed ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-sage-700">Premium Benefits:</h2>
            <ul className="space-y-2">
              {['24/7 Customer Support', 'Personalized Health Tips', 'Advanced Medication Tracking', 'Family Member Access'].map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Check size={24} className="text-green-500" />
                  <span className="text-xl">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-xl text-sage-700">Upgrade to premium to access all features!</p>
        )}
      </div>
    </div>
  );
}

export default Subscription;

