import React from "react";

interface TestimonialProps {
  name: string;
  date: string;
  review: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Demi Adeniji",
      date: "May 20, 2024",
      review:
        "The sessions were engaging and enlightening! I particularly enjoyed how our trainer was able to draw examples from real life scenarios making it easier to understand the concepts taught.",
      rating: 4.9,
    },
  ];

  return (
    <div className="container testimonials-container">
      <h2>What our clients say</h2>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
      <TestimonialNavigation />
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  date,
  review,
  rating,
}) => (
  <div className="testimonial-card">
    <h3>{name}</h3>
    <p>{review}</p>
    <footer>
      <div>{`Rated ${rating} stars`}</div>
      <div>{date}</div>
    </footer>
  </div>
);

const TestimonialNavigation: React.FC = () => (
  <div className="testimonial-navigation">
    <button>{"<"}</button>
    <button>{">"}</button>
  </div>
);

export default Testimonials;
