import { Routes, Route } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/home/homepage'
import { CheckoutPage } from './pages/checkout/checkoutpage';
import { OrderPage } from './pages/order/orderpage';
import { TrackingPage } from './pages/tracking/trakingpage';
import './App.css'


function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('http://localhost:3000/api/cart-items?expand=product');
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();    
  }, []);

  return (

    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path='orders' element={<OrderPage cart={cart} />} />
      <Route path='tracking' element={<TrackingPage />} />
    </Routes>
  );
}

export default App
