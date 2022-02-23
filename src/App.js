import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { NotFound } from './components/NotFound/NotFound';
import Category from './pages/Category';
import Home from './pages/Home';
import Product from './pages/Product';

export default function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}
