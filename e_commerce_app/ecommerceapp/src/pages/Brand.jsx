import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const BrandPage = () => {
  const { brand } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (brand) {
      const brandProducts = products.filter(product => product.brand && product.brand.toLowerCase() === brand.toLowerCase());
      setFilteredProducts(brandProducts);
    }
  }, [brand]);

  const categories = [...new Set(filteredProducts.map(product => product.category))];

  const handlePriceChange = (event) => {
    setPriceRange([0, parseInt(event.target.value)]);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const applyFilters = useCallback(() => {
    let filtered = products.filter(product => product.brand && product.brand.toLowerCase() === brand.toLowerCase());
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    
    setFilteredProducts(filtered);
  }, [brand, selectedCategories, priceRange]);

  useEffect(() => {
    applyFilters();
  }, [priceRange, selectedCategories, brand, applyFilters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{brand}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-4">
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
        </div>
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No products found for this brand with the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;

