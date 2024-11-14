import { useProducts } from '../hooks/useProducts';
import { useCart } from '../contexts/CartContext';

const ProductList = () => {
  const { products, setSearch } = useProducts();
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Product List</h2>
      <input
        type="text"
        placeholder="Search products"
        className="p-2 border border-gray-300 rounded mb-6 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded" />
            <h4 className="text-lg font-semibold mt-4">{product.title}</h4>
            <p className="text-gray-500 mt-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
