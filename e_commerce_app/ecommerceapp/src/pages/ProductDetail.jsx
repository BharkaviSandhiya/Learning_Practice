import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaShoppingCart, FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice';
import Breadcrumb from '../components/Breadcrumb';
import { fetchProductDetails } from '../services/api';

const ProductDetail = () => {
  const { productName } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const isInWishlist = product && Array.isArray(wishlistItems) && wishlistItems.some(item => item.id === product.id);

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const productData = await fetchProductDetails(productName);
        setProduct(productData);
        setReviews(Array.isArray(productData?.reviews) ? productData.reviews : []);
      } catch (err) {
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productName]);

  if (loading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (error) return <div className="container mx-auto px-4 py-8">Error: {error}</div>;
  if (!product) return <div className="container mx-auto px-4 py-8">Product not found</div>;

  const handleAddToCart = () => {
    if (product.category === 'Clothing' && !selectedSize) {
      alert('Please select a size');
    } else {
      dispatch(addToCart({ ...product, selectedSize, quantity }));
    }
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddReview = () => {
    if (reviewText.trim() === '') {
      alert('Please enter a review');
      return;
    }
    const newReview = {
      id: Date.now(),
      text: reviewText,
      rating: reviewRating,
      date: new Date().toISOString(),
    };
    setReviews(prevReviews => [...prevReviews, newReview]);
    setReviewText('');
    setReviewRating(5);
  };

  const getSizes = () => {
    switch (product.category) {
      case 'Clothing':
        return ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
      case 'Shoes':
        return ['6', '7', '8', '9', '10', '11', '12'];
      case 'Beauty':
        return ['30ml', '50ml', '100ml'];
      default:
        return null;
    }
  };

  const sizes = getSizes();

  const renderSizeChart = () => {
    if (product.category === 'Clothing') {
      return (
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>Size</th>
              <th>Chest (inches)</th>
              <th>Waist (inches)</th>
              <th>Hips (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XS</td>
              <td>32-34</td>
              <td>26-28</td>
              <td>34-36</td>
            </tr>
            <tr>
              <td>S</td>
              <td>34-36</td>
              <td>28-30</td>
              <td>36-38</td>
            </tr>
            <tr>
              <td>M</td>
              <td>36-38</td>
              <td>30-32</td>
              <td>38-40</td>
            </tr>
            <tr>
              <td>L</td>
              <td>38-40</td>
              <td>32-34</td>
              <td>40-42</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>40-42</td>
              <td>34-36</td>
              <td>42-44</td>
            </tr>
            <tr>
              <td>XXL</td>
              <td>42-44</td>
              <td>36-38</td>
              <td>44-46</td>
            </tr>
          </tbody>
        </table>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb category={product.category} subcategory={product.subcategory} product={product.title} />
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <img src={product.image} alt={product.title} className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">{product.rating.toFixed(1)} | {reviews.length} Ratings</span>
          </div>
          <div className="mb-4">
            <span className="text-2xl font-bold">₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-500 line-through ml-2">₹{product.originalPrice.toFixed(2)}</span>
                <span className="text-lg text-green-600 ml-2">
                  ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
                </span>
              </>
            )}
          </div>
          <p className="text-gray-600 mb-4">inclusive of all taxes</p>
          {sizes && (
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold mb-2">SELECT SIZE</h2>
                {product.category === 'Clothing' && (
                  <button
                    className="text-blue-500 text-sm"
                    onClick={() => setShowSizeChart(!showSizeChart)}
                  >
                    {showSizeChart ? 'Hide Size Chart' : 'Size Chart'}
                  </button>
                )}
              </div>
              {showSizeChart && (
                <div className="mb-4">
                  {renderSizeChart()}
                </div>
              )}
              <div className="flex space-x-4">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`w-10 h-10 rounded-full border ${
                      selectedSize === size ? 'border-blue-500 text-blue-500' : 'border-gray-300'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">QUANTITY</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 p-2 rounded-full"
              >
                <FaMinus />
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 p-2 rounded-full"
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300"
            >
              <FaShoppingCart className="inline-block mr-2" />
              ADD TO BAG
            </button>
            <button
              onClick={handleToggleWishlist}
              className={`flex-1 py-2 px-4 rounded-md transition duration-300 ${
                isInWishlist
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <FaHeart className="inline-block mr-2" />
              {isInWishlist ? 'WISHLISTED' : 'WISHLIST'}
            </button>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${
                  star <= reviewRating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                onClick={() => setReviewRating(star)}
              />
            ))}
          </div>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Write your review here..."
          ></textarea>
          <button
            onClick={handleAddReview}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Review
          </button>
        </div>
        <div>
          {Array.isArray(reviews) && reviews.map((review) => (
            <div key={review.id} className="border-b pb-4 mb-4">
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-gray-600">{review.text}</p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

