import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  const [cartItems] = useState([]);

  return (
    <div className="min-h-screen">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartCount={cartItems.length} />
      <Banner />
    </div>
  );
}

export default App;
