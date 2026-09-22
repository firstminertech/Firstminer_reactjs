import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="testimonials" className="wow fadeInUp">
      <div className="col-12">
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-float-anim" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="testimonial-item-carousel">
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
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .testimonials-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          justify-content: center;
          align-items: stretch;
        }
        .testimonial-float-anim {
          animation: floatCard 3.2s ease-in-out infinite;
          will-change: transform;
          display: flex;
          flex: 1 1 320px;
          min-width: 280px;
          max-width: 340px;
          height: 450px;
        }
        @keyframes floatCard {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .testimonial-item-carousel {
          background: #fff;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
          border: 2px solid #e0e7ef;
          width: 100%;
          height: 100%;
          text-align: center;
          color: #333;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          transition: box-shadow 0.35s, background 0.35s, color 0.35s, border 0.35s, transform 0.25s cubic-bezier(.25,1.5,.5,1.1);
          perspective: 800px;
        }
        .testimonial-item-carousel:hover {
          box-shadow: 0 12px 36px rgba(25, 118, 210, 0.18), 0 4px 16px rgba(0,0,0,0.12);
          border: 2.5px solid #7ecbff;
          transform: scale(1.09) perspective(800px) translateY(-8px) rotateX(2deg) rotateY(-2deg);
          background: #f5fbff;
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
        @media (max-width: 1200px) {
          .testimonials-grid {
            gap: 24px;
          }
          .testimonial-item-carousel {
            min-width: 240px;
            max-width: 300px;
            height: 400px;
          }
        }
        @media (max-width: 900px) {
          .testimonials-grid {
            flex-direction: column;
            align-items: center;
            gap: 28px;
          }
          .testimonial-item-carousel {
            width: 90%;
            max-width: 420px;
            min-width: 220px;
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
