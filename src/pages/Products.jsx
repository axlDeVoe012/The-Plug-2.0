import React, { useState, useEffect } from 'react';
import productsData from '../data/products'; // your products array
import ProductModal from '../components/ProductModal';
import '../styles/Products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-5 c-1 text-light min-vh-100" id="product-container">
      <div className="container">

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">🌿 Our Products</h2>
          <p className="text-secondary">
            Browse our premium cannabis, vapes, and accessories.
          </p>
        </div>

        {/* Product Grid */}
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-xl-3" key={product.id}>
              <div className="position-relative product-card-container h-100 d-flex flex-column">

                {/* Product Card */}
                <div className="position-relative card product-card h-100 border-0 shadow-sm overflow-hidden">

                  {/* Optional Badge Tag */}
                  {product.tag && (
                    <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 z-3">
                      {product.tag}
                    </span>
                  )}

                  {/* Image Ratio Container */}
                  <div className="ratio ratio-4x3 position-relative overflow-hidden">
                    <img
                      src={product.mainImage}
                      alt={`${product.name} preview`}
                      className="product-image"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="hover-overlay">
                      <h5 className="fw-bold mb-1">{product.name}</h5>
                      <p className="small mb-0">
                        {product.description || 'Premium cannabis or vape product'}
                      </p>
                    </div>

                    {/* Floating Price Tag */}
                    <div
                      className={`floating-price ${
                        product.price.toLowerCase() === 'coming soon' ? 'coming-soon' : ''
                      }`}
                    >
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  type="button"
                  className="btn btn-outline-success  w-90 mt-3 d-flex align-items-center justify-content-center gap-2 animate-btn rounded-pill"
                  onClick={() => setSelectedProduct(product)}
                >
                  <i className="bi bi-eye"></i> View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Products;
