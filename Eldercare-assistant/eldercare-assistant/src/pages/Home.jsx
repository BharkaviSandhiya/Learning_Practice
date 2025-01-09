import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CreditCard, UserPlus } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-sage-800">Welcome to ElderCare Assistant</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/medications" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Clock size={48} className="text-sage-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Medication Reminders</h2>
          <p className="text-sage-700">Manage your medications and set reminders</p>
        </Link>
        <Link to="/payments" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <CreditCard size={48} className="text-sage-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Payment Options</h2>
          <p className="text-sage-700">Manage your payment methods</p>
        </Link>
        <Link to="/subscription" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <UserPlus size={48} className="text-sage-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Subscription Management</h2>
          <p className="text-sage-700">Manage your subscription status</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;

