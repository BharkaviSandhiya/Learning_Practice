import React from 'react';
import { Link } from 'react-router-dom';

const BrandShowcase = ({ brands }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {brands.map((brand) => (
        <Link
          key={brand.id}
          to={`/brand/${brand.slug}`}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img src={brand.logo} alt={brand.name} className="w-24 h-24 object-contain mb-2" />
          <h3 className="text-lg font-semibold text-center">{brand.name}</h3>
          <p className="text-sm text-gray-500">{brand.productCount} products</p>
        </Link>
      ))}
    </div>
  );
};

export default BrandShowcase;

