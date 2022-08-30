import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';

const Routers = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
  </Routes>
);

export default Routers;
