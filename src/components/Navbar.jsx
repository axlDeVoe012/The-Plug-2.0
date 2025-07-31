import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';
import '../styles/Navbar.css';
import '../styles/DarkMode.css';  // Import your dark mode CSS here

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (isExpanded) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
          setIsExpanded(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  useEffect(() => {
    const navbar = document.getElementById('navbarNav');
    const handleShowEvent = () => setIsExpanded(true);
    const handleHideEvent = () => setIsExpanded(false);

    navbar?.addEventListener('shown.bs.collapse', handleShowEvent);
    navbar?.addEventListener('hidden.bs.collapse', handleHideEvent);

    return () => {
      navbar?.removeEventListener('shown.bs.collapse', handleShowEvent);
      navbar?.removeEventListener('hidden.bs.collapse', handleHideEvent);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="The Plug Logo" height="30" className="me-2" />
          <span className="name">The Plug</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          title="Toggle navigation"
        >
          <FaBars color="#000" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-middle">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/products', label: 'Products' },
              { to: '/education', label: 'Education' },
              { to: '/sneaker-care', label: 'Sneaker Care' },
              { to: '/services', label: 'Services' },
              { to: '/articles', label: 'Articles' },
              { to: '/pricing', label: 'Pricing' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <Link className="nav-link pill-link" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}

               
                <input
                  className="dark_mode_input"
                  type="checkbox"
                  id="darkmode-toggle"
                  onChange={() => setDarkMode(!darkMode)}
                  checked={darkMode}
                />
                <label className="dark_mode_label" htmlFor="darkmode-toggle">
                  <img src={sunIcon} alt="Sun icon" className="sun" />
                  <img src={moonIcon} alt="Moon icon" className="moon" />
                </label>
              
            <li className="nav-item ms-lg-3 toggle-container">
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
