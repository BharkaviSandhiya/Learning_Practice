import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaUser, FaShoppingBag, FaHeart } from 'react-icons/fa';
import { logout } from '../store/slices/authSlice';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);
  const cartItems = useSelector(state => state.cart);
  const wishlistItems = useSelector(state => state.wishlist);

  const categories = [
    { 
      name: 'Electronics', 
      subcategories: ['Smartphones', 'Laptops', 'Audio', 'Wearables', 'TVs', 'Smart Home']
    },
    { 
      name: 'Clothing', 
      subcategories: ['Men\'s Wear', 'Women\'s Wear', 'Kids\' Wear', 'Accessories']
    },
    { name: 'Home', subcategories: ['Furniture', 'Decor', 'Kitchenware', 'Bedding'] },
    { name: 'Beauty', subcategories: ['Skincare', 'Makeup', 'Haircare', 'Fragrances'] },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">StyleHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-4">
              {categories.map((category) => (
                <div key={category.name} className="relative group">
                  <button
                    onClick={() => handleCategoryClick(category.name)}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    {category.name}
                  </button>
                  <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        to={`/category/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-[400px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaSearch />
              </button>
            </form>

            <div className="flex items-center space-x-4">
              <Link to="/wishlist" className="relative">
                <FaHeart className="text-2xl text-gray-600" />
                {wishlistItems.items && wishlistItems.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistItems.items.length}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="relative">
                <FaShoppingBag className="text-2xl text-gray-600" />
                {cartItems.items && cartItems.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.items.length}
                  </span>
                )}
              </Link>

              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2">
                    <img
                      src={user.photoURL || '/default-avatar.png'}
                      alt={user.displayName}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {user.displayName}
                    </span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={() => dispatch(logout())}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-1 text-gray-600"
                >
                  <FaUser />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

