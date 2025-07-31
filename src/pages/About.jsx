import React from 'react';
import logo from '../assets/logo1.png';  // Your logo image path
import '../styles/About.css';
import '../index.css';

const About = () => (
  
  <div className="about-container py-4" id='about'>
    <div className="text-center mb-4">
      <img src={logo} alt="Logo" className="animated-leaf" />
      <h1 className="mb-1">🌿 About The Plug</h1>
      <p className="muted">High quality cannabis. Township-rooted. Community-driven.</p>
    </div>

    <section className="about-theplug mb-4">
      <h4>📍 Founder Information</h4>
      <p>
        <strong>Rethabile Moloi</strong> (aka <em>The Witch</em>)<br />
        📞 072-061-5124<br />
        🏠 20511 Tugela & Indus Street, Protea Glen Ext 20, Soweto
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>🌱 Executive Summary</h4>
      <p>
        The Plug is a proudly local cannabis dispensary and lounge based in a privately permitted residence in Soweto. While the lounge is still in the pipeline, the dispensary already provides high-quality products for both recreational and wellness-focused consumers. We’re self-funded, aiming to grow through support from investors and government initiatives. Our bold vision: to become the number one supplier of affordable, reliable cannabis in townships.
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>🌿 Business Description</h4>
      <p>
        At The Plug, we offer premium flower, edibles, and pre-rolls—all served in a safe, private environment. We’re permitted to operate on private property, giving us the flexibility and affordability to focus on customer needs. Our future plans include expanding with franchises throughout Soweto and Vosloorus, offering convenient pricing and delivery. We also aim to serve hospitals and medical patients directly.
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>📊 Market Analysis</h4>
      <p>
        The demand for legal cannabis and safe lounges is booming. We target local adult users, but expansion plans include tourists and medical patients. Our residential location makes it easy and discreet for customers to visit.
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>🛍️ Products & Services</h4>
      <ul>
        <li><strong>Retail:</strong> Flower, edibles, pre-rolls, accessories</li>
        <li><strong>Lounge (Coming Soon):</strong> A safe space for on-site cannabis use</li>
        <li><strong>Future Offerings:</strong> Food collabs, events, and workshops</li>
      </ul>
    </section>

    <section className="about-theplug mb-4">
      <h4>🛠️ Operations Plan</h4>
      <p>
        Our current operation runs from a permitted private home with a hands-on approach. Plans are in motion to hire staff as demand grows. Compliance and community safety remain top priorities.
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>📜 Legal & Compliance</h4>
      <p>
        All necessary permits have been secured. We’re continually improving to meet legal requirements for zoning, retail licensing, and safe cannabis sales.
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>📣 Marketing & Sales</h4>
      <p>
        We engage the community through social platforms, loyalty rewards, cannabis-friendly collaborations, and private events. It’s about more than sales—it’s about uplifting the township.
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>💸 Financial Plan</h4>
      <p>
        The business is currently bootstrapped using the founder’s salary. We’re actively seeking investors and grant opportunities. Main income sources: retail products, lounge access (once launched), and events.
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>🛡️ Risk Management</h4>
      <p>
        We prioritize secure operations, regulatory compliance, and community relationships to reduce legal and social risk.
      </p>
    </section>

    <section className="about-theplug mb-4">
      <h4>🚀 Future Outlook</h4>
      <p>
        The Plug is set to evolve into a township-grown cannabis lifestyle brand—trusted, accessible, and community-centered. Expansion, education, and empowerment are our next steps.
      </p>
    </section>
  </div>
);

export default About;
