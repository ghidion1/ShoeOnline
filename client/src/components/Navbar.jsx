import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/apiProductService.js';  // presupunem că ai un serviciu care returnează produsele

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch produse din API sau dintr-o sursă locală
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data); // La început, toate produsele sunt afișate
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Filtrarea produselor după nume
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <nav className="bg-gradient-to-r from-lime-600 to-lime-500 px-8 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img 
          src="vite.svg" 
          alt="Logo" 
          className="w-12 h-12 rounded-full border-2 border-white p-1 hover:scale-110 transition-all duration-300" 
        />
        <Link to="/" className="text-3xl font-extrabold text-white hover:text-lime-100 transition duration-300">
          Online Shop
        </Link>
      </div>

      {/* Links */}
      <div className="flex space-x-8">
        <Link 
          to="/" 
          className="text-white py-2 px-4 rounded-lg hover:bg-lime-700 hover:text-white transition duration-300 text-lg font-medium">
          Home
        </Link>
        <Link 
          to="/products" 
          className="text-white py-2 px-4 rounded-lg hover:bg-lime-700 hover:text-white transition duration-300 text-lg font-medium">
          Products
        </Link>
        <Link 
          to="/new-product" 
          className="text-white py-2 px-4 rounded-lg hover:bg-lime-700 hover:text-white transition duration-300 text-lg font-medium">
          New Product
        </Link>
 
      </div>

      {/* Search */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="px-4 py-2 rounded-lg text-gray-700 w-64 outline-none focus:ring-2 focus:ring-lime-700 transition duration-300 focus:border-lime-600"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-lime-600 transition duration-300"
          onClick={handleSearch}
        >
          🔍
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
