import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaPaypal, FaGooglePay, FaApplePay, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import { clearCart } from '../store/slices/cartSlice';
import { toast } from 'react-hot-toast';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prevState => ({
        ...prevState,
        fullName: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      }));
    }
  }, [isAuthenticated, user]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    dispatch(clearCart());
    navigate('/order-success', {
      state: {
        orderDetails: {
          ...formData,
          items: cartItems,
          subtotal,
          shipping,
          total,
          paymentMethod
        }
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4 mb-8">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6 mt-8">Payment Method</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('credit-card')}
                className={`p-4 border rounded-lg flex flex-col items-center gap-2 ${
                  paymentMethod === 'credit-card' ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <FaCreditCard className="w-8 h-8" />
                <span>Credit Card</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('paypal')}
                className={`p-4 border rounded-lg flex flex-col items-center gap-2 ${
                  paymentMethod === 'paypal' ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <FaPaypal className="w-8 h-8" />
                <span>PayPal</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('google-pay')}
                className={`p-4 border rounded-lg flex flex-col items-center gap-2 ${
                  paymentMethod === 'google-pay' ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <FaGooglePay className="w-8 h-8" />
                <span>Google Pay</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('apple-pay')}
                className={`p-4 border rounded-lg flex flex-col items-center gap-2 ${
                  paymentMethod === 'apple-pay' ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <FaApplePay className="w-8 h-8" />
                <span>Apple Pay</span>
              </button>
            </div>

            {paymentMethod === 'credit-card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Card Number
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="1234 5678 9012 3456"
                    />
                    <div className="ml-2 flex gap-2">
                      <FaCcVisa className="w-8 h-8 text-blue-600" />
                      <FaCcMastercard className="w-8 h-8 text-red-500" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors mt-8"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white shadow-md rounded-lg p-6 sticky top-4">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

