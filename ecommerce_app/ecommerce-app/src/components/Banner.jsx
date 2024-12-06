import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
};

const Banner = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Decommerce%2Bbanner&psig=AOvVaw3V1JDNNIome7bq1FOIquqr&ust=1731736804258000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJC3j_XU3YkDFQAAAAAdAAAAABAJ)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Our eCommerce Store</h1>
          <p className="text-xl mb-6">Browse our latest products and offers</p>
          <Button text="Shop Now" onClick={handleButtonClick} className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Banner;




// import React from 'react';
// import Button from './Button'; 

// const Banner = () => {
//   const handleButtonClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <section className="banner" style={{ backgroundImage: 'url(https://www.example.com/banner-image.jpg)' }}>
//       <div className="banner-overlay"></div>
//       <div className="banner-content">
//         <div>
//           <h1 className="text-4xl font-bold mb-4">Welcome to Our eCommerce Store</h1>
//           <p className="text-xl mb-6">Browse our latest products and offers</p>
//           <Button text="Shop Now" onClick={handleButtonClick} className="mt-4" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
