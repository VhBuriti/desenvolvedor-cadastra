import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import ProductGallery from './components/molecules/ProductGallery';
import PLP from './components/organisms/PLP';
import './scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <PLP />
    <Footer/>
  </React.StrictMode>
);
