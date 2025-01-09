import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import 'swiper/css';
import 'swiper/css/navigation';

const RecommendedProducts = () => {
  const recommendedProducts = products.slice(0, 8); // Get first 8 products for demo

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="recommended-products-slider"
      >
        {recommendedProducts.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProducts;

