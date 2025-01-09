import React from 'react';
import BannerSlider from '../components/BannerSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandShowcase from '../components/BrandShowcase';
import CouponDisplay from '../components/CouponDisplay';
import TopStories from '../components/TopStories';
import { products } from '../data/products';
import brands from '../data/brands';

const Home = () => {
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

  const topStories = [
    {
      id: 1,
      title: "Summer Fashion Trends",
      description: "Discover the hottest styles for this season",
      image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/blog/summer-fashion-trends"
    },
    {
      id: 2,
      title: "Tech Gadgets for 2023",
      description: "The latest and greatest in technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/blog/tech-gadgets-2023"
    },
    {
      id: 3,
      title: "Home Decor Ideas",
      description: "Transform your living space with these tips",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/blog/home-decor-ideas"
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

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Top Stories</h2>
          <TopStories stories={topStories} />
        </div>
      </div>
    </div>
  );
};

export default Home;

