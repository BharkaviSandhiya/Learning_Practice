import React from 'react';
import { useSelector } from 'react-redux';
import BannerSlider from '../components/BannerSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandShowcase from '../components/BrandShowcase';
import CouponDisplay from '../components/CouponDisplay';
import { products } from '../data/products';
import brands from '../data/brand';

const Home = () => {
  // const wishlistItems = useSelector((state) => state.wishlist);

  const banners = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3",
      title: "Summer Sale",
      description: "Up to 50% off on summer collection",
      link: "/category/summer-sale"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
      title: "New Arrivals",
      description: "Check out our latest collection",
      link: "/category/new-arrivals"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
      title: "Exclusive Deals",
      description: "Special offers on premium brands",
      link: "/category/exclusive-deals"
    }
  ];

  const coupons = [
    {
      id: 1,
      code: "FIRSTORDER",
      discount: "20% OFF",
      description: "Get 20% off on your first order"
    },
    {
      id: 2,
      code: "SUMMER2023",
      discount: "15% OFF",
      description: "Summer special: 15% off on selected items"
    }
  ];

  return (
    <div className="min-h-screen">
      <BannerSlider banners={banners} />
      
      <div className="container mx-auto px-4 py-8">
        <CouponDisplay coupons={coupons} />
        
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <FeaturedProducts products={products.filter(product => product.featured)} />
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Brands</h2>
          <BrandShowcase brands={brands} />
        </div>
      </div>
    </div>
  );
};

export default Home;

