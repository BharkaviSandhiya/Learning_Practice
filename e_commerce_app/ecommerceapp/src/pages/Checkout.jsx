import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../store/slices/cartSlice';
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    console.log('Order placed:', formData);
    setOrderPlaced(true);
    dispatch(clearCart());
    // Simulate sending email and SMS
    console.log(`Sending email to ${formData.email}`);
    console.log(`Sending SMS to ${formData.phone}`);
    // Redirect to home page after 5 seconds
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  const handleCouponApply = () => {
    // Simulate coupon application
    if (couponCode === 'SUMMER10') {
      setDiscount(10);
    } else {
      alert('Invalid coupon code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping - discount;

  if (orderPlaced) {
    return (
      <div className="container mx-auto my-8 text-center">
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Order Placed Successfully!</p>
          <p>Thank you for your purchase.</p>
        </div>
        <p className="mb-4">We've sent a confirmation email to {formData.email}.</p>
        <p className="mb-4">You will also receive an SMS confirmation on {formData.phone}.</p>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.title} x {item.quantity}</span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="font-bold text-lg mt-4">
          <span>Total: ₹{total.toFixed(2)}</span>
        </div>
        <p className="mt-8">You will be redirected to the home page in 5 seconds.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="flex flex-col md:flex-row">
        <form onSubmit={handleSubmit} className="md:w-2/3 pr-8">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="zipCode" className="block text-gray-700 text-sm font-bold mb-2">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit_card')}
                  className={`flex items-center justify-center p-2 rounded ${paymentMethod === 'credit_card' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <FaCreditCard className="mr-2" /> Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`flex items-center justify-center p-2 rounded ${paymentMethod === 'paypal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <FaPaypal className="mr-2" /> PayPal
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple_pay')}
                  className={`flex items-center justify-center p-2 rounded ${paymentMethod === 'apple_pay' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <FaApplePay className="mr-2" /> Apple Pay
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('google_pay')}
                  className={`flex items-center justify-center p-2 rounded ${paymentMethod === 'google_pay' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <FaGooglePay className="mr-2" /> Google Pay
                </button>
              </div>
            </div>
            {paymentMethod === 'credit_card' && (
              <>
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="expirationDate" className="block text-gray-700 text-sm font-bold mb-2">Expiration Date</label>
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="123"
                    />
                  </div>
                </div>
              </>
            )}
            <div className="mb-4">
              <label htmlFor="couponCode" className="block text-gray-700 text-sm font-bold mb-2">Coupon Code</label>
              <div className="flex">
                <input
                  type="text"
                  id="couponCode"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter coupon code"
                />
                <button
                  type="button"
                  onClick={handleCouponApply}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Place Order
          </button>
        </form>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.title} x {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Discount:</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

