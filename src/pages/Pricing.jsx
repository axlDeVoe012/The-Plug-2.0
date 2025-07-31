import React from 'react';
import '../styles/Pricing.css';
import '../index.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container py-5 text-light text-center">
        <h2 className="fw-bold mb-4">Our Pricing</h2>
        <p className="lead mb-5 text-success">
          Fair prices. Great vibes. Powered by the community 🌿
        </p>

        <div className="row justify-content-center gap-4">

          {/* 🌿 Cannabis Products */}
          <div className="col-md-4 pricing-card blue-card">
            <div className="pricing-header">
              <h4 className="mb-2">🌿 Cannabis Products</h4>
              <p className="subtitle">Premium quality — grown with love</p>
            </div>
            <hr className="divider" />
            <ul className="list-unstyled text-start">
              <li><strong>Pre-Rolls:</strong> R40 – R60</li>
              <li><strong>Edibles:</strong> R40 – R50</li>
              <li><strong>Buds (per gram):</strong> R60 – R100</li>
              <li><strong>Delivery:</strong> Free on orders over 5g and R250.00.<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;A delivery fee applies if you’re more than 20km away.</li>
              <li><strong>Grinders & Rollers:</strong> From R30</li>
              <li><strong>Accessories:</strong> R10 – R60</li>
            </ul>
          </div>

          {/* 🛠️ Lifestyle Services */}
          <div className="col-md-4 pricing-card black-card">
            <div className="pricing-header">
              <h4 className="mb-2">🛠️ Lifestyle Services</h4>
              <p className="subtitle">For your car, kicks & cannabis lifestyle</p>
            </div>
            <hr className="divider" />
            <ul className="list-unstyled text-start">
              <li><strong>Car Wash:</strong> R70</li>
              <li><strong>Engine Clean:</strong> R180</li>
              <li><strong>Sneaker Care:</strong> R100</li>
              <li>
                <strong>Cannabis Hair Salon:</strong>
                <span className="coming-soon-tag ms-2">Coming Soon!</span>
              </li>
              <li><strong>Ad Spaces:</strong> R100 – R500</li>
            </ul>
          </div>

          {/* 💨 Vapes & Hubbly */}
          <div className="col-md-4 pricing-card green-card">
            <div className="pricing-header">
              <h4 className="mb-2">💨 Vapes & Hubbly</h4>
              <p className="subtitle">Smooth. Flavourful. Shared joy.</p>
            </div>
            <hr className="divider" />
            <ul className="list-unstyled text-start">
              <li><strong>Hubbly Rentals:</strong> R100/hr</li>
              <li><strong>Vapes:</strong> R60 – R350</li>
              <li><strong>Coils & Riffils:</strong> R10 – R150</li>

              <li className="subheading mt-3">✨ Flavours</li>
              <li>Amaren • Nareen • Nakhla  • Richman • Golden Barzz</li>

              <li className="subheading mt-3">🔥 Charcoal</li>
              <li>Quick Light: R2 – R10<br/></li>

              <li className="subheading mt-3">🧪 Add-ons</li>
              <li>Ice Hose: R30 • Extra Bowl: R25</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
