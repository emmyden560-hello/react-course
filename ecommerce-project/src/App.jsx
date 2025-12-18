import { Routes, Route } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/homepage'
import { CheckoutPage } from './pages/checkoutpage';
import { OrderPage } from './pages/orderpage';
import { TrackingPage } from './pages/trakingpage';
import './App.css'


function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cart-items?expand=product').then((response) => {
      setCart(response.data);
    });
  }, [])
  return (

    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrderPage cart={cart} />} />
      <Route path='tracking' element={<TrackingPage />} />
    </Routes>
  );
}

export default App
