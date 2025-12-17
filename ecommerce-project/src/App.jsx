import { Routes, Route } from 'react-router';
import { HomePage } from './pages/homepage'
import { CheckoutPage } from './pages/checkoutpage';
import { OrderPage } from './pages/orderpage';
import { TrackingPage } from './pages/trakingpage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<OrderPage />} />
      <Route path='tracking' element={<TrackingPage />} />
    </Routes>
  ); 
}

export default App
