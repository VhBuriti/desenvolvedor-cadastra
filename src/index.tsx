import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import ProductGallery from './components/organisms/ProductGallery';
import './scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ProductGallery />
    <Footer/>
  </React.StrictMode>
);
