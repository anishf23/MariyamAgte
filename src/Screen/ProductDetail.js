import React from 'react';
import { useLocation, useParams } from 'react-router-dom'; // To get the product id from the URL
import bottomBanner from '../images/wholesalebanner.png';
import { mainColor } from '../utils';
const ProductDetail = () => {
  // Sample product data (this could be fetched from an API based on the product ID)
    const { id } = useParams(); // Get the product ID from the URL
    const location = useLocation();
    const product = location.state?.product; // Get the product ID from the URL
  // const product = {
  //   id: productId,
  //   name: 'Product Name',
  //   description: 'This is a detailed description of the product.',
  //   price: '199.99',
  //   image: 'https://via.placeholder.com/800x500',
  //   paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer'],
  // };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img src={product.photo} alt={product.name} className="img-fluid" />
        </div>
  
        {/* Product Details */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="lead">{product.short_description}</p>
          {/* className="text-danger" */}
          <div className="d-flex justify-content-between align-items-center">
                <p className="card-text">
                    <span className="text-muted" style={{ textDecoration: 'line-through' }}>
                    Rs.{product.discountprice}
                    </span>
                    <span style={{color: mainColor}} className="ms-2">Rs.{product.price}</span>
                </p>
            </div>

          {/* Quantity Selection */}
          <div className="mt-4">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input
              type="number"
              id="quantity"
              className="form-control"
              min="1"
              defaultValue="1"
              //onChange={(e) => setQuantity(e.target.value)} // If using state to manage quantity
            />
          </div>
  
          {/* Payment Methods */}
          {/* <div className="mt-4">
            <h5>Payment Methods:</h5>
            <ul>
              {product.paymentMethods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div> */}
  
          {/* Add to Cart Button */}
          <button 
          onClick={() => window.open("https://wa.me/+917016256342?text=Hello%2C%20I%20am%20a%20wholesaler%20of%20stone%20and%20crystal%20products.%20I%20would%20like%20to%20share%20our%20catalogue%20and%20pricing%20with%20you.%20Please%20let%20me%20know%20if%20you%27re%20interested.", "_blank")}
          className="btn custom-btn" style={{ marginTop: '26px' }}>Enquire Now</button>

        </div>
      </div>
  
      {/* Full Description Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h4>Full Description</h4>
          <p className="text-muted">
            {product.description || 'No additional description available.'}
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default ProductDetail;
