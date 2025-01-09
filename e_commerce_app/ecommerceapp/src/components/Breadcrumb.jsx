import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ category, subcategory, product, brand }) => {

  return (
    <nav className="text-sm breadcrumbs mb-4">
      <ol className="flex items-center">
        <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
        {brand && (
          <>
            <span className="mx-2">/</span>
            <li>
              <Link to={`/brand/${brand.toLowerCase()}`} className="text-blue-500 hover:underline">
                {brand}
              </Link>
            </li>
          </>
        )}
        {category && (
          <>
            <span className="mx-2">/</span>
            <li>
              <Link to={`/category/${category.toLowerCase()}`} className="text-blue-500 hover:underline">
                {category}
              </Link>
            </li>
          </>
        )}
        {subcategory && (
          <>
            <span className="mx-2">/</span>
            <li>
              <Link to={`/category/${category.toLowerCase()}/${subcategory.toLowerCase()}`} className="text-blue-500 hover:underline">
                {subcategory}
              </Link>
            </li>
          </>
        )}
        {product && (
          <>
            <span className="mx-2">/</span>
            <li>
              <span className="text-gray-500">{product}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

