
import '../styles/Home.css';
import landingImage from '../assets/landing.svg';
import '../index.css';


const Home = () => (
  <div
    className="home-landing d-flex align-items-center justify-content-center text-white text-center"
    style={{ backgroundImage: `url(${landingImage})` }}
  >
    <div className="overlay"></div>
    <div className="content animate__animated animate__fadeInUp">
      <h1 className="display-4 fw-bold">
        Welcome to <span className="text-success">The Plug</span>
      </h1>
      <p className="lead">
        Your one-stop shop for premium cannabis products, sneaker care, and more.
      </p>
      <a href="/products" className="btn btn-success btn-lg mt-3">
        Explore Our Products
      </a>
    </div>
  </div>
);

export default Home;
