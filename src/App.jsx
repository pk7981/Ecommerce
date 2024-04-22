import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './Components/Pages/Categories/Categories';
import CategoryPage from './Components/Pages/Categories/CategoryPage';
import Cart from './Components/Cart/Cart'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productName, price, image) => {
    const newCartItem = { productName, price, image };
    setCartItems([...cartItems, newCartItem]);
  };

  const handlePlaceOrder = () => {
    console.log("Order placed!");
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/category/:catName" element={<CategoryPage addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onPlaceOrder={handlePlaceOrder} clearCart={clearCart}/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
