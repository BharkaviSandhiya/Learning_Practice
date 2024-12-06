import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { products } from '../data/products';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const recommendedProducts = products
    .filter(product => !cartItems.some(item => item.id === product.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-500 hover:underline">Continue shopping</Link></p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {cartItems.map(item => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex items-center border-b py-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mr-4" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.selectedSize && <p className="text-gray-600">Size: {item.selectedSize}</p>}
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    className="p-1 bg-gray-200 rounded"
                  >
                    <FaMinus />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    className="p-1 bg-gray-200 rounded"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleProceedToCheckout}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="block">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;

