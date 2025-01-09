import React, { useState, useEffect, useCallback } from 'react';
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../store/slices/productSlice';
import ProductCard from '../components/ProductCard';
import { FaFilter } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

const ProductList = () => {
  const { category, subcategory } = useParams();
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector(state => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsAsync({ category, subcategory }));
  }, [dispatch, category, subcategory]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  const brands = [...new Set(products.map(product => product.brand))];
  const colors = [...new Set(products.flatMap(product => product.colors))];
  const discounts = [10, 20, 30, 40, 50];

  const handlePriceChange = (event) => {
    setPriceRange([0, parseInt(event.target.value)]);
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

  const handleDiscountChange = (discount) => {
    setSelectedDiscounts(prev => 
      prev.includes(discount) ? prev.filter(d => d !== discount) : [...prev, discount]
    );
  };

  const applyFilters = useCallback(() => {
    let filtered = products;
    
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => product.colors.some(color => selectedColors.includes(color)));
    }
    
    if (selectedDiscounts.length > 0) {
      filtered = filtered.filter(product => {
        const productDiscount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        return selectedDiscounts.some(discount => productDiscount >= discount);
      });
    }
    
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    
    setFilteredProducts(filtered);
  }, [products, selectedBrands, selectedColors, selectedDiscounts, priceRange]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters, selectedBrands, selectedColors, selectedDiscounts, priceRange]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8">Error: {error}</div>;
  }

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
                onChange={handlePriceChange}
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
              <h3 className="font-semibold mb-2">Discount</h3>
              {discounts.map(discount => (
                <label key={discount} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedDiscounts.includes(discount)}
                    onChange={() => handleDiscountChange(discount)}
                    className="mr-2"
                  />
                  {discount}% or more
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
            <p className="text-center text-gray-500 mt-8">No products found matching the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

