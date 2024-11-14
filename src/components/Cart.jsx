// src/components/Cart.jsx
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, decreaseQuantity, increaseQuantity, clearCart } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-4 border-b"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                  >
                    +
                  </button>
                  <span className="text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-6">Total: ${totalAmount.toFixed(2)}</h3>
          <div className="flex mt-6 gap-4">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full"
            >
              Clear Cart
            </button>
            <Link to="/checkout">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
