import { products } from '../data/products';

export const fetchProducts = async (category, subcategory) => {
  await new Promise(resolve => setTimeout(resolve, 500));

  try {
    let filteredProducts = products;

    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (subcategory) {
      filteredProducts = filteredProducts.filter(product => 
        product.subcategory && product.subcategory.toLowerCase() === subcategory.toLowerCase()
      );
    }

    return filteredProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductDetails = async (productName) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  try {
    const product = products.find(p => p.title.toLowerCase().replace(/ /g, '-') === productName);
    return product || null;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
};

