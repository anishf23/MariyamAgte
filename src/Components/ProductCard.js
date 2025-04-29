import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import bottomBanner from '../images/wholesalebanner.png';
const ProductCard = ({ product }) => (
  <div className="col-md-3 mb-4">
    <div className="card h-100 shadow-sm">
        <img src={product.photo} className="card-img-top" alt={product.name} />
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <div className="d-flex justify-content-between align-items-center">
                <p className="card-text">
                    <span className="text-muted" style={{ textDecoration: 'line-through' }}>
                    Rs.{product.discountprice}
                    </span>
                    <span className="ms-2">Rs.{product.price}</span>
                </p>
            </div>
            <Link to={`/product/${product.id}`} state={{ product }} className="btn custom-btn">View Details</Link>
        </div>
    </div>
</div>
);

export default ProductCard;
