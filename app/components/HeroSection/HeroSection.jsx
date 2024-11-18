import React from 'react';

const HeroSection = ({
 
  title = "Redefine the way you work.",
  subtitle = "Helping Organisations transform into a network of interdependent product teams across different",
  buttonText = "Get Started Now",
  buttonLink = "#",
  showRating = true,
  ratingText = "Excellent ⭐⭐⭐⭐⭐",
  ratingDetails = "4.78 out of 5 based on 34 reviews",
}) => {
  return (
    <section
      className="relative h-screen flex items-end text-white bg-cover bg-center"
      
        style={{ backgroundImage: "url('/images/hero.png')" }}
       
      
    >
      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl mb-10">
        <div className="w-full md:w-1/2 p-6 rounded-lg">
          <h1 className="text-5xl font-bold leading-tight mb-6">{title}</h1>
          <p className="text-lg mb-8">{subtitle}</p>
          <a href={buttonLink}>
            <button className="bg-[#FF9F5A] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#FF9F5A]/90">
              {buttonText}
            </button>
          </a>
        </div>

        {showRating && (
          <div className="absolute bottom-5 right-5 text-white text-sm p-2 rounded-lg hidden md:block">
            <p className="font-semibold">{ratingText}</p>
            <p>{ratingDetails}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
