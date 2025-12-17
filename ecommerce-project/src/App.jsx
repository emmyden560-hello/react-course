import { Routes, Route } from 'react-router';
import { HomePage } from './pages/homepage'
import { CheckoutPage } from './pages/checkoutpage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
  ); 
}

export default App
