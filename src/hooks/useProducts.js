import { useEffect, useState } from 'react';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return { products: filteredProducts, setSearch };
};
