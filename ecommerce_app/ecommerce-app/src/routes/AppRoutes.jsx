import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/shop" element={<Shop/>} />
      <Route path="/contact" element={<Contact/>} /> */}
    </Routes>
  );
};

export default AppRoutes;
