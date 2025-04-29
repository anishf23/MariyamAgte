import React from 'react';
import '../styles/CategoriesList.css'; // Import CSS for styling
import { Link } from 'react-router-dom';
import bottomBanner from '../images/wholesalebanner.png';
const categories = [
  { id: 1, name: 'Fashion', image: 'https://via.placeholder.com/300x200?text=Fashion' },
  { id: 2, name: 'Electronics', image: 'https://via.placeholder.com/300x200?text=Electronics' },
  { id: 3, name: 'Home & Kitchen', image: 'https://via.placeholder.com/300x200?text=Home+%26+Kitchen' },
  { id: 4, name: 'Sports', image: 'https://via.placeholder.com/300x200?text=Sports' },
  { id: 5, name: 'Beauty', image: 'https://via.placeholder.com/300x200?text=Beauty' },
  { id: 6, name: 'Toys', image: 'https://via.placeholder.com/300x200?text=Toys' },
];

const CategoriesList = () => {
  return (
    <div className="categories-container">
      <h2 className="categories-header">Trending Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link to={`/itemlist`} key={category.id} className="category-card">
            <img src={bottomBanner} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </Link>
        ))}
      </div>
      <h2 className="categories-header-new">Regular Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link to={`/itemlist`} key={category.id} className="category-card">
            <img src={bottomBanner} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
