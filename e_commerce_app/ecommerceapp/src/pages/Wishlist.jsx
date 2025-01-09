import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {!Array.isArray(wishlistItems) || wishlistItems.length === 0 ? (
        <p>Your wishlist is empty. <Link to="/" className="text-blue-500 hover:underline">Continue shopping</Link></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map(item => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">₹{item.price.toFixed(2)}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

