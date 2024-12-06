import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const CategoryOffers = ({ offers }) => {
  if (!offers || offers.length === 0) {
    return null;
  }

  const getCategoryProductCount = (category) => {
    if (!category) return 0;
    return products.filter(product => 
      product.category && product.category.toLowerCase() === category.toLowerCase()
    ).length;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {offers.map((offer) => (
        <Link
          key={offer.id}
          to={`/category/${offer.category ? offer.category.toLowerCase().replace(' ', '-') : ''}`}
          className="relative overflow-hidden rounded-lg shadow-md group"
        >
          <img
            src={offer.image}
            alt={offer.category || ''}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold mb-2">{offer.category || 'Category'}</h3>
            <p className="text-lg font-bold mb-2">{getCategoryProductCount(offer.category)} Products</p>
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
              Shop Now
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryOffers;

