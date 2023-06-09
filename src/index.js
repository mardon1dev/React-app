import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Procuct from './Product/Product';
import AllProducts from './Allproducts/Allproducts';
import Offer from './Offer/Offer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Header/>
    <Procuct/>
    <AllProducts/>
    <Offer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
