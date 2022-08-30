import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoinDetail from '../components/pages/CoinDetail';
import Home from '../components/pages/Home';

const Routers = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="coinDetail/:id" element={<CoinDetail />} />

  </Routes>
);

export default Routers;
