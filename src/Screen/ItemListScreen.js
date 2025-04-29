import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../Components/ProductCard';
import '../styles/NewArrivalScreen.css';
const ItemListScreen = () => {
  const newArrivals = [
    { id: 1, name: 'Stylish Jacket', price: '120', image: 'https://via.placeholder.com/300x300' },
    { id: 2, name: 'Casual Shoes', price: '85', image: 'https://via.placeholder.com/300x300' },
    { id: 3, name: 'Sunglasses', price: '60', image: 'https://via.placeholder.com/300x300' },
    { id: 4, name: 'Leather Wallet', price: '30', image: 'https://via.placeholder.com/300x300' },
    { id: 5, name: 'Denim Jeans', price: '100', image: 'https://via.placeholder.com/300x300' },
    { id: 6, name: 'Smart Watch', price: '250', image: 'https://via.placeholder.com/300x300' },
  ];

  return (
    <div className="container mt-4">
      {/* 🛍️ Title */}
      {/* <h2 className="text-center mb-4">🆕 New Arrivals</h2> */}
      
      {/* 📦 Product Grid */}
      <div className="row">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListScreen;
