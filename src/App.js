import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';
import Category from './pages/Category';
import Home from './pages/Home';
import Product from './pages/Product';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Category />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
