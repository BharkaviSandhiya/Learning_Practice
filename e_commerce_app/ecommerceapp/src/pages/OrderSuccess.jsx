import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaBox, FaTruck, FaEnvelope, FaMobile } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const isGuest = !user;
  const orderDetails = location.state?.orderDetails || {
    items: [],
    subtotal: 0,
    shipping: 0,
    total: 0,
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: ''
  };

  useEffect(() => {
    dispatch(clearCart());
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600">
              Thank you for shopping with us. Your order has been confirmed.
            </p>
          </div>

          <div className="border-t border-b border-gray-200 py-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-600">Confirmation sent to:</span>
              </div>
              <span className="font-medium">{isGuest ? orderDetails.email : user.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaMobile className="text-gray-400" />
                <span className="text-gray-600">SMS notification sent to:</span>
              </div>
              <span className="font-medium">{isGuest ? orderDetails.phone : user.phone}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Order Number:</p>
                  <p className="font-medium">{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Order Date:</p>
                  <p className="font-medium">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Payment Method:</p>
                  <p className="font-medium">{orderDetails.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-gray-600">Shipping Address:</p>
                  <p className="font-medium">{`${orderDetails.address}, ${orderDetails.city}, ${orderDetails.zipCode}`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {orderDetails.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span>₹{orderDetails.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping:</span>
                <span>
                  {orderDetails.shipping === 0 
                    ? 'FREE' 
                    : `₹${orderDetails.shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total:</span>
                <span>₹{orderDetails.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/orders')}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              View Orders
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <FaBox className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-gray-600">Order Confirmed</p>
            </div>
            <div className="flex-1 border-t border-gray-300" />
            <div className="text-center">
              <FaTruck className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-gray-600">Shipping Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

