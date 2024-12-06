import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import { products } from '../data/products';
import { FaFilter } from 'react-icons/fa';

const ProductList = () => {
  const { category, subcategory } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (subcategory) {
      filtered = filtered.filter(p => p.subcategory.toLowerCase() === subcategory.toLowerCase().replace('-', ' '));
    }
    setFilteredProducts(filtered);
  }, [category, subcategory]);

  const brands = [...new Set(filteredProducts.map(product => product.brand))];
  const colors = [...new Set(filteredProducts.flatMap(product => product.colors))];

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const applyFilters = () => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (subcategory) {
      filtered = filtered.filter(p => p.subcategory.toLowerCase() === subcategory.toLowerCase().replace('-', ' '));
    }
    
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => product.colors.some(color => selectedColors.includes(color)));
    }
    
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(product => selectedRatings.includes(Math.floor(product.rating)));
    }
    
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [priceRange, selectedBrands, selectedColors, selectedRatings, category, subcategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb category={category} subcategory={subcategory} />
      <h1 className="text-3xl font-bold mb-6 capitalize">{subcategory || category}</h1>
      <div className="flex flex-col md:flex-row">
        <button
          className="md:hidden mb-4 bg-gray-200 px-4 py-2 rounded-md flex items-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter className="mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <div className={`w-full md:w-1/4 pr-0 md:pr-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, [0, parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                <span>₹0</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Brands</h3>
              {brands.map(brand => (
                <label key={brand} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              ))}
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Colors</h3>
              <div className="flex flex-wrap">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`w-8 h-8 rounded-full m-1 border-2 ${
                      selectedColors.includes(color) ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Ratings</h3>
              {[5, 4, 3, 2, 1].map(rating => (
                <label key={rating} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => handleRatingChange(rating)}
                    className="mr-2"
                  />
                  {rating} Stars & Above
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No products found for this category with the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

