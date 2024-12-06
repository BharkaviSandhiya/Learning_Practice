import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useSelector } from 'react-redux';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    colors: [],
    rating: 0,
  });
  const [expandedFilters, setExpandedFilters] = useState(['subcategories', 'priceRange', 'colors', 'rating']);
  const wishlistItems = useSelector(state => state.wishlist);

  const categories = {
    electronics: ['Smartphones', 'Laptops', 'Audio', 'Wearables', 'TVs', 'Smart Home'],
    clothing: ['Men\'s Wear', 'Women\'s Wear', 'Kids\' Wear', 'Accessories'],
    home: ['Furniture', 'Decor', 'Kitchenware', 'Bedding'],
    beauty: ['Skincare', 'Makeup', 'Haircare', 'Fragrances'],
  };

  const colorOptions = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', '#800080'];

  useEffect(() => {
    let filtered = products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );

    if (subcategory) {
      filtered = filtered.filter(product => 
        product.subcategory.toLowerCase() === subcategory.toLowerCase().replace('-', ' ')
      );
    }

    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1] &&
      (filters.colors.length === 0 || filters.colors.some(color => product.colors.includes(color))) &&
      product.rating >= filters.rating
    );

    setFilteredProducts(filtered);
  }, [category, subcategory, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => 
      prev.includes(filterName) 
        ? prev.filter(f => f !== filterName)
        : [...prev, filterName]
    );
  };

  const FilterAccordion = ({ title, name, children }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center"
        onClick={() => toggleFilter(name)}
      >
        <span className="font-semibold">{title}</span>
        {expandedFilters.includes(name) ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {expandedFilters.includes(name) && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{subcategory || category}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            <FilterAccordion title="Subcategories" name="subcategories">
              <ul className="space-y-2">
                {categories[category.toLowerCase()].map((sub) => (
                  <li key={sub}>
                    <Link
                      to={`/category/${category.toLowerCase()}/${sub.toLowerCase().replace(' ', '-')}`}
                      className="text-blue-600 hover:underline"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </FilterAccordion>

            <FilterAccordion title="Price Range" name="priceRange">
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
            </FilterAccordion>

            <FilterAccordion title="Colors" name="colors">
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
            </FilterAccordion>

            <FilterAccordion title="Minimum Rating" name="rating">
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
            </FilterAccordion>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
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

