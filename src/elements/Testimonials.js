import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    img: 'assets/img/1833.jpg',
    name: 'Akash Rathore',
    text: 'Partnering with FirstMinerTech was the best decision for our business. Their tailored approach and attention to detail made all the difference. We felt supported throughout the entire process, and the results speak for themselves.'
  },
  {
    img: 'assets/img/224.jpg',
    name: 'Swapnil lanjewar',
    text: 'Vivaan, a valued client of Firstminer Tech, entrusted us with the development of his app and website. By understanding his vision and incorporating innovative solutions, we delivered a project that reflects both functionality and design excellence. Harish\'s collaboration highlights our ability to bring ideas to life with precision and dedication.'
  },
  {
    img: 'assets/img/1834.jpg',
    name: 'Ashish Dewedi',
    text: 'Partnered with Firstminer Tech for app and website development to bring his innovative ideas to reality. Through our detailed approach and expert execution, we delivered a solution tailored to his specific needs. Working with Anik was a rewarding experience, showcasing our dedication to quality and client satisfaction.'
  },
  {
    img: 'assets/img/1831.jpg',
    name: 'Kavya',
    text: 'The FirstMinerTech team truly understands the tech industry. Their solutions were cutting-edge, and their customer service was outstanding. We are excited to work with them again on future projects.'
  },
  {
    img: 'assets/img/1832.jpg',
    name: 'Divya',
    text: 'FirstMinerTech turned our vision into reality. Their team was responsive, innovative, and delivered on every promise. We\'re grateful for their partnership and expertise in bringing our project to life.'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="wow fadeInUp">
      <div className="col-12">
        <div className='flex-container'>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            grabCursor={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1800, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={900}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            onSwiper={swiper => setActiveIndex(swiper.realIndex)}
            style={{ maxWidth: '900px', margin: '0 auto' }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`testimonial-item-carousel${activeIndex === idx ? ' active' : ''}${Math.abs(activeIndex - idx) === 1 ? ' semi-active' : ''}`}
                >
                  <img
                    src={t.img}
                    className="testimonial-img rounded-circle mb-3"
                    alt=""
                  />
                  <h3>{t.name}</h3>
                  <div className="scrollable-text-container">
                    <p>{t.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>{`
        .testimonial-item-carousel {
          background: #fff;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
          height: 450px;
          text-align: center;
          transition: transform 0.5s cubic-bezier(.4,2,.6,1), box-shadow 0.5s, background 0.5s, color 0.5s;
          opacity: 0.6;
          filter: blur(1px) grayscale(0.2);
          transform: scale(0.92);
          color: #333;
        }
        .testimonial-item-carousel.semi-active {
          background: #e3f0ff;
          opacity: 0.85;
          filter: blur(0.5px) grayscale(0.1);
          transform: scale(0.98);
          color: #333;
        }
        .testimonial-item-carousel.active {
          background: linear-gradient(135deg,rgb(66, 143, 191) 0%,rgb(64, 144, 202) 100%);
          color: #fff;
          box-shadow: 0 8px 32px rgba(106,17,203,0.18), 0 2px 8px rgba(158, 90, 213, 0.12);
          opacity: 1;
          filter: none;
          transform: scale(1.08);
          z-index: 2;
        }
        .testimonial-item-carousel.active h3,
        .testimonial-item-carousel.active p,
        .testimonial-item-carousel.active .scrollable-text-container {
          color: #fff !important;
        }
        .testimonial-item-carousel .testimonial-img {
          border: 4px solid #fff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          width: 120px;
          height: 120px;
          object-fit: cover;
          margin-bottom: 20px;
          transition: transform 0.3s, border 0.3s;
        }
        .testimonial-item-carousel.active .testimonial-img {
          border: 4px solid #2575fc;
          box-shadow: 0 8px 24px rgba(218, 223, 233, 0.18);
        }
        .testimonial-item-carousel h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 20px;
          color: #333;
        }
        .testimonial-item-carousel .scrollable-text-container {
          max-height: 150px;
          overflow: auto;
          scrollbar-width: none;
          msOverflowStyle: none;
        }
        .testimonial-item-carousel .scrollable-text-container::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 900px) {
          .testimonial-item-carousel { height: 400px; padding: 20px; }
        }
        @media (max-width: 600px) {
          .testimonial-item-carousel { height: 350px; padding: 10px; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
