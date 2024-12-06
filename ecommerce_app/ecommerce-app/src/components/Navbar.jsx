// import React from 'react';
// import { Link } from 'react-router-dom'; 

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/>
//           </svg>
//           <span className="text-white font-bold text-xl ml-3">eCommerce</span>
//         </div>
//         <div className="flex space-x-4">
//           <Link to="/" className="text-white hover:text-gray-200">Home</Link>
//           <Link to="/shop" className="text-white hover:text-gray-200">Shop</Link>
//           <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/>
          </svg>
          <span className="text-white font-bold text-xl ml-3">eCommerce</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/shop" className="navbar-link">Shop</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
