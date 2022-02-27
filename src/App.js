import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';
import Category from './pages/Category';
import Home from './pages/Home';
import ProductPage from './pages/Products';
import './App.css';
import { Header } from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
