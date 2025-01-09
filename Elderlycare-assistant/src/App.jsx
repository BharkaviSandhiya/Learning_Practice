import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomeIcon, Clock, CreditCard, UserPlus } from 'lucide-react';
import Home from './pages/Home';
import Medications from './pages/Medications';
import Payments from './pages/Payments';
import Subscription from './pages/Subscription';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sage-50 text-sage-900 flex">
        <nav className="bg-sage-200 w-20 flex flex-col items-center py-8 space-y-8">
          <Link to="/" className="text-sage-600 hover:text-sage-800 transition-colors">
            <HomeIcon size={32} />
          </Link>
          <Link to="/medications" className="text-sage-600 hover:text-sage-800 transition-colors">
            <Clock size={32} />
          </Link>
          <Link to="/payments" className="text-sage-600 hover:text-sage-800 transition-colors">
            <CreditCard size={32} />
          </Link>
          <Link to="/subscription" className="text-sage-600 hover:text-sage-800 transition-colors">
            <UserPlus size={32} />
          </Link>
        </nav>
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medications" element={<Medications />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

