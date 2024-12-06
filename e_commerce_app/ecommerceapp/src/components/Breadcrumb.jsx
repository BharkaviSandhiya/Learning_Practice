import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ category, subcategory, product }) => {
return (
  <nav className="text-sm breadcrumbs mb-4">
    <ol className="flex items-center">
      <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
      {category && (
        <>
          <span className="mx-2">/</span>
          <li><Link to={`/category/${category.toLowerCase()}`} className="text-blue-500 hover:underline">{category}</Link></li>
        </>
      )}
      {subcategory && (
        <>
          <span className="mx-2">/</span>
          <li><Link to={`/category/${category.toLowerCase()}/${subcategory.toLowerCase()}`} className="text-blue-500 hover:underline">{subcategory}</Link></li>
        </>
      )}
      {product && (
        <>
          <span className="mx-2">/</span>
          <li className="text-gray-600">{product}</li>
        </>
      )}
    </ol>
  </nav>
);
};

export default Breadcrumb;

