import React from 'react';
import '../styles/Services.css';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Images
import car1 from '../assets/products/gti.png';
import car2 from '../assets/products/car1.png';
import car3 from '../assets/products/car3.png';
import cannabis1 from '../assets/products/cannprod1.png';
import cannabis2 from '../assets/products/cannprod2.png';
import cannabis3 from '../assets/products/cannprod3.png';
import ads1 from '../assets/products/advert.png';
import ads2 from '../assets/products/advert2.jpeg';
import ads3 from '../assets/products/advert3.jpeg';
import hair1 from '../assets/products/hair1.png';
import hair2 from '../assets/products/hair2.png';
import hair3 from '../assets/products/hair3.png';

const serviceData = [
  {
    title: '🚗 Car Wash',
    text: 'Premium car cleaning and detailing services. Come relax while we restore your whip.',
    images: [car1, car2, car3],
    reverse: false,
    comingSoon: false,
  },
  {
    title: '🌿 Cannabis Products & Education',
    text: 'High-quality cannabis, infused edibles, and education on responsible usage—by the community, for the community.',
    images: [cannabis1, cannabis2, cannabis3],
    reverse: true,
    comingSoon: false,
  },
  {
    title: '📣 Advertising for Local Businesses',
    text: 'Boost your brand! We offer ad space across our site and at community events to uplift township entrepreneurs.',
    images: [ads1, ads2, ads3],
    reverse: false,
    comingSoon: false,
  },
  {
    title: '💇‍♀️ Cannabis Hair Salon',
    text: 'We’re launching a unique cannabis-infused hair salon using natural, plant-based treatments for growth, shine, and scalp health.',
    images: [hair1, hair2, hair3],
    reverse: true,
    comingSoon: true,
    extra: 'Powered by cannabis oils and care, this future service blends beauty and wellness the township way 🌿.',
  },
];

const ServiceCard = ({ service }) => (
  <article
    className={`service-card ${service.reverse ? 'reverse' : ''} ${service.comingSoon ? 'coming-soon-card' : ''}`}
  >
    <div className="service-carousel">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop
        className="carousel"
      >
        {service.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`${service.title} image ${i + 1}`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="service-text">
      <h5>
        {service.title}{' '}
        {service.comingSoon && (
          <span className="coming-soon-tag">Coming Soon!</span>
        )}
      </h5>
      <p>{service.text}</p>
      {service.extra && <p>{service.extra}</p>}
    </div>
  </article>
);

const Services = () => (
  <section className="services-section" id='serv'>
    <div className="container-serv py-5">
      <div className="text-center mb-5">
        <p className="fw-bold text-success mb-2">Our Services</p>
        <h3 className="fw-bold">What we can do for you</h3>
      </div>

      {serviceData.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}

      <div className="text-center mt-5">
        <a href="/contact" className="btn btn-success btn-lg">
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default Services;
