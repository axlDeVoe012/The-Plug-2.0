import React, { useState, useEffect } from 'react';
import '../styles/ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Reset selected index when product changes
    setSelectedIndex(0);
  }, [product]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Match this with CSS transition duration
  };

  if (!product) return null;

  return (
    <div 
      className={`modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`modal-content bg-dark text-light rounded-4 p-4 shadow-lg position-relative ${isClosing ? 'scale-down' : 'scale-up'}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          onClick={handleClose}
          aria-label="Close modal"
        />

        {/* Title */}
        <h4 id="modal-title" className="fw-bold text-success mb-3">
          {product.name}
        </h4>

        {/* Main Image */}
        {product.images && product.images.length > 0 && (
          <div className="modal-main-image-container mb-3">
            <img
              src={product.images[selectedIndex]}
              alt={`${product.name} - View ${selectedIndex + 1}`}
              className="modal-main-image img-fluid"
              loading="lazy"
            />
          </div>
        )}

        {/* Thumbnails */}
        {product.images && product.images.length > 1 && (
          <div className="modal-thumbnails d-flex gap-2 mb-3 justify-content-center flex-wrap" role="list">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`modal-thumbnail-btn ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={() => setSelectedIndex(idx)}
                aria-label={`View ${product.name} image ${idx + 1}`}
                aria-current={idx === selectedIndex}
              >
                <img
                  src={img}
                  alt=""
                  className="modal-thumbnail"
                  loading="lazy"
                  role="presentation"
                />
              </button>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="modal-description mb-3">
          {product.description}
        </div>

        {/* Price */}
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-bold text-warning fs-5 mb-0">{product.price}</p>
        
        </div>
      </div>
    </div>
  );
};

export default ProductModal;