import React from 'react';
import './TestimonialPage.css';

 const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Great food and excellent service! Will definitely order again.',
    rating: 5, // You can use this rating to display star ratings if needed
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'The pasta was delicious and delivered on time. Highly recommend!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    comment: 'Amazing burgers! Loved every bite of it.',
    rating: 5,
  },
];

 

const TestimonialPage = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.comment}</p>
            {/* Optionally, you can display star ratings */}
            
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
