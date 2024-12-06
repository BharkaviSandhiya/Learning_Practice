import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q');

  const filterProducts = useCallback(() => {
    return productsData.products.filter(product =>
      product.title.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery?.toLowerCase())
    );
  }, [searchQuery]);

  useEffect(() => {
    const filteredProducts = filterProducts();
    setResults(filteredProducts);
  }, [filterProducts]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for &quot;{searchQuery}&quot;</h1>
      {results.length === 0 ? (
        <p>No results found for your search query.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;

