import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import { fetchProducts } from '../services/api';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    colors: [],
    rating: 0,
  });
  const wishlistItems = useSelector(state => state.wishlist.items);

  const categories = {
    electronics: ['Smartphones', 'Laptops', 'Audio', 'Wearables', 'TVs', 'Smart Home'],
    clothing: ['Men\'s Wear', 'Women\'s Wear', 'Kids\' Wear', 'Accessories'],
    home: ['Furniture', 'Decor', 'Kitchenware', 'Bedding'],
    beauty: ['Skincare', 'Makeup', 'Haircare', 'Fragrances'],
  };

  const colorOptions = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', '#800080'];

  const currentSubcategories = categories[category?.toLowerCase()] || [];

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts(category, subcategory);
      setFilteredProducts(products);
    };
    loadProducts();
  }, [category, subcategory]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <div className="container mx-auto my-8">
      <Breadcrumb category={category} subcategory={subcategory} />
      <h1 className="text-3xl font-bold mb-6 capitalize">{subcategory || category}</h1>
      
      {/* Add subcategory navigation */}
      <div className="mb-6 flex flex-wrap gap-2">
        {currentSubcategories.map(sub => (
          <Link
            key={sub}
            to={`/category/${category}/${sub.toLowerCase().replace(' ', '-')}`}
            className={`px-4 py-2 rounded-full ${
              subcategory === sub.toLowerCase().replace(' ', '-')
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {sub}
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                <span>$0</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Colors</h3>
              <div className="flex flex-wrap">
                {colorOptions.map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full m-1 border-2 ${filters.colors.includes(color) ? 'border-black' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      const newColors = filters.colors.includes(color)
                        ? filters.colors.filter(c => c !== color)
                        : [...filters.colors, color];
                      handleFilterChange('colors', newColors);
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Minimum Rating</h3>
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                <option value={0}>All Ratings</option>
                <option value={4}>4 Stars & Up</option>
                <option value={3}>3 Stars & Up</option>
                <option value={2}>2 Stars & Up</option>
                <option value={1}>1 Star & Up</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isInWishlist={isInWishlist(product.id)}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No products found matching the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

