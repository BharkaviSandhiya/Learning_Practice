import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateCartQuantity, removeFromCart } from '../store/slices/cartSlice';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import RecommendedProducts from '../components/RecommendedProducts'; 
import Breadcrumb from '../components/Breadcrumb'; 

const Cart = () => {
  const { items: cartItems, loading } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  const handleQuantityChange = async (item, newQuantity) => {
    if (newQuantity < 1) return;
    
    try {
      await dispatch(updateCartQuantity({ 
        productId: item.id, 
        quantity: newQuantity 
      })).unwrap();
      toast.success('Cart updated successfully');
    } catch (error) {
      toast.error('Failed to update cart');
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await dispatch(removeFromCart(itemId)).unwrap();
      toast.success('Item removed from cart');
    } catch (error) {
      toast.error('Failed to remove item');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link 
            to="/" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb /> 
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.map(item => (
            <div 
              key={`${item.id}-${item.selectedSize}`} 
              className="flex flex-col sm:flex-row items-start sm:items-center border-b py-4 gap-4"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.selectedSize && (
                  <p className="text-gray-600">Size: {item.selectedSize}</p>
                )}
                <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={loading}
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={loading}
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2"
                  disabled={loading}
                  aria-label="Remove item"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          <RecommendedProducts />
        </div>
        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Proceed to Checkout
            </button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Free shipping on orders over ₹1000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

