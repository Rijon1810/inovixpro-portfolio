import React from 'react'
import'./index.css';

const data = [
  {
    image: '/Frame 1000006187.png',
    name: 'Kola',
    designation: 'CEO - Ram Enterprise',
    description:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    stars: '/stars.png',
  },
  {
    image: '/Frame 1000006187.png',
    name: 'John Doe',
    designation: 'Manager',
    description: 'Excellent Amazing products, very satisfied with the results and customer service. Will definitely be returning for more! Amazing products, very satisfied with the results and customer service.recommended.',
    stars: '/stars.png',
  },
  {
    image: '/Frame 1000006187.png',
    name: 'Jane Smith',
    designation: 'CTO',
    description:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    stars: '/stars.png',
  },
  {
    image: '/Frame 1000006187.png',
    name: 'Zahid',
    designation: 'CEO - Ram Enterprise',
    description:
      'Amazing products, very satisfied with the results and customer service. Will definitely be returning for more! Amazing products, very satisfied with the results and customer service. Will definitely be returning for more!',
    stars: '/stars.png',
  },
  {
    image: '/Frame 1000006187.png',
    name: 'John Doe',
    designation: 'Manager',
    description: 'Amazing products, very satisfied with the results and customer service. Will definitely be returning for more! Amazing products, very satisfied with the results and customer service.',
    stars: '/stars.png',
  },
  {
    image: '/Frame 1000006187.png',
    name: 'Jane Smith',
    designation: 'CTO',
    description:
      'Amazing products, very satisfied with the results and customer service. Will definitely be returning for more!',
    stars: '/stars.png',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-header">
        <h3 className="testimonials-subtitle">Testimonials</h3>
        <h2 className="testimonials-title">LOVED BY BUSINESSES WORLDWIDE</h2>
      </div>
      
      <div className="testimonials-grid">
        {data.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <img src={testimonial.stars} alt="Rating" className="testimonial-stars" />
              <p className="testimonial-description">{testimonial.description}</p>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-info">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-designation">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
