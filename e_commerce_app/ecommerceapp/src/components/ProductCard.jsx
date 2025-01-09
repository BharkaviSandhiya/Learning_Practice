import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { addToWishlistAsync, removeFromWishlistAsync } from '../store/slices/wishlistSlice';
import { removeFromCart } from '../store/slices/cartSlice';

const ProductCard = ({ product, isCart = false }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  if (!product) {
    return null;
  }

  const isInWishlist = Array.isArray(wishlistItems) && wishlistItems.some(item => item.id === product.id);

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    if (isInWishlist) {
      dispatch(removeFromWishlistAsync(product.id));
    } else {
      dispatch(addToWishlistAsync(product));
    }
  };

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(product.id));
  };

  return (
    <Link to={`/product/${product.title.toLowerCase().replace(/ /g, '-')}`} className="group">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={isCart ? handleRemoveFromCart : handleToggleWishlist}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
          } hover:scale-110 transition-all duration-300`}
        >
          {isCart ? <FaTrash className="w-5 h-5" /> : <FaHeart className="w-5 h-5" />}
        </button>
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            {product.discount}% OFF
          </div>
        )}
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
          <h3 className="text-lg font-medium text-gray-800 mb-1 line-clamp-2">
            {product.title}
          </h3>
          <div className="text-sm text-gray-500 mb-2">{product.category}</div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold">₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
                <span className="text-sm text-green-600">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                </span>
              </>
            )}
          </div>
          <div className="flex gap-1">
            {product.colors && product.colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                title={`Color variant ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

