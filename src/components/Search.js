"use client";

import { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8000/search_and_store/${encodeURIComponent(searchQuery)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="container">
      {/* Heading and Search Bar */}
      <div className="header-search">
        <h1>Amazon Product Search</h1>
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Products Table */}
      {products.length > 0 && (
        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      {product.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Search;
