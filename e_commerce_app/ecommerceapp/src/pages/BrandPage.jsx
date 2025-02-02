import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import Breadcrumb from '../components/Breadcrumb';
import { FaFilter } from 'react-icons/fa';

const BrandPage = () => {
  const { brand } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (brand) {
      const brandProducts = products.filter(product => product.brand && product.brand.toLowerCase() === brand.toLowerCase());
      setFilteredProducts(brandProducts);
    }
  }, [brand]);

  const categories = [...new Set(filteredProducts.map(product => product.category))];
  const colors = [...new Set(filteredProducts.flatMap(product => product.colors || []))];

  const handlePriceChange = (event) => {
    setPriceRange([0, parseInt(event.target.value)]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const applyFilters = useCallback(() => {
    let filtered = products.filter(product => product.brand && product.brand.toLowerCase() === brand.toLowerCase());
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => product.colors && product.colors.some(color => selectedColors.includes(color)));
    }
    
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    
    setFilteredProducts(filtered);
  }, [brand, selectedCategories, selectedColors, priceRange]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb brand={brand} />
      <h1 className="text-3xl font-bold mb-6 capitalize">{brand}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-4">
          <button
            className="md:hidden mb-4 bg-gray-200 px-4 py-2 rounded-md flex items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <div className="flex justify-between">
                <span>₹0</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Categories</h3>
              {categories.map(category => (
                <label key={category} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Colors</h3>
              <div className="flex flex-wrap">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full m-1 border-2 ${
                      selectedColors.includes(color) ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">No products found for this brand with the selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;

