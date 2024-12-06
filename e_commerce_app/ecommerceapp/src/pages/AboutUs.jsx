import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
          <p>Founded in 2010, our e-commerce platform has grown from a small startup to a leading online marketplace. We're passionate about connecting customers with high-quality products and exceptional service.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>We strive to provide a seamless shopping experience, offering a wide range of products at competitive prices. Our goal is to become the go-to destination for online shoppers worldwide.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
          <p>Our diverse team of professionals is dedicated to innovation, customer satisfaction, and continuous improvement. We work tirelessly to ensure that every aspect of your shopping experience exceeds expectations.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Sustainability</h2>
          <p>We're committed to reducing our environmental impact. From eco-friendly packaging to partnering with sustainable brands, we're taking steps to create a more sustainable future for e-commerce.</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

