import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert('Payment Successful!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex items-center justify-between py-4 border-b">
              <span>{item.title}</span>
              <span className="text-gray-500">x{item.quantity}</span>
              <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-6">Total Payment: ${totalAmount.toFixed(2)}</h3>
        <div className="flex mt-6 gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
