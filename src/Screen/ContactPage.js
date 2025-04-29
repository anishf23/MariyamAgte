import React, { useState } from 'react';
import '../styles/ContactPage.css'; // Import custom CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to a server or API)
    console.log('Form Data Submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      name: '',
      mobile: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      {/* onSubmit={handleSubmit} */}
      <form  className="contact-form"> 
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
  <label htmlFor="mobile">Mobile Number</label>
  <input
    type="tel"
    id="mobile"
    name="mobile"
    value={formData.mobile}
    onChange={handleInputChange}
    placeholder="Enter your mobile number"
    required
  />
</div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn custom-btn"
          onClick={() => window.open("https://wa.me/+917016256342?text=Hello%2C%20I%20am%20a%20wholesaler%20of%20stone%20and%20crystal%20products.%20I%20would%20like%20to%20share%20our%20catalogue%20and%20pricing%20with%20you.%20Please%20let%20me%20know%20if%20you%27re%20interested.", "_blank")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
