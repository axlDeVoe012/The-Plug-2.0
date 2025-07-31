const Footer = () => (
  <footer className="bg-dark text-white text-center py-4 mt-5">
    <div className="mb-3">
      <a
        href="https://www.instagram.com/the_plug511?igsh=eTRrcmNiMGNvenVk"  // ← Replace with your actual link
        className="text-white me-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram fa-lg"></i>
        <span className="visually-hidden">Instagram</span>
      </a>
      <a
        href="https://wa.me/27720615124" // ← Replace with your WhatsApp number like 27721234567
        className="text-white me-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp fa-lg"></i>
         <span className="visually-hidden">WhatsApp</span>
      </a>
    </div>
    <p className="mb-0">&copy; {new Date().getFullYear()} The Plug. All rights reserved.</p>
  </footer>
);

export default Footer;
