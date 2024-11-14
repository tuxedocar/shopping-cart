import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext'; // Import the CartProvider
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    // Ensure that CartProvider wraps the app
    <CartProvider>
      <Router>
        <div className="bg-gray-800 p-4">
          <nav className="max-w-7xl mx-auto flex justify-between">
            <Link to="/" className="text-white text-2xl font-semibold">Shop</Link>
            <div className="relative">
              {/* Cart icon with quantity bubble */}
              <Link to="/cart" className="text-gray-300 hover:text-white flex items-center gap-2">
                <span className="text-white text-lg">
                  🛒
                </span>
                <div className="absolute top-0 right-0 text-xs font-semibold text-white bg-red-500 rounded-full px-2 py-1">
                  {/* Show total number of items in the cart */}
                  <span>0</span> {/* Replace with dynamic value */}
                </div>
              </Link>
            </div>
          </nav>
        </div>
        <div className="bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider> // Ensure CartProvider wraps all routes and components
  );
}

export default App;
