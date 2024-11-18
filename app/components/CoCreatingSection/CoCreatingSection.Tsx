import React from 'react';
import {IServicesSection} from './../../data/Home/Services'


const CoCreatingSection = ({
  title,
  subtitle,
  statistics,
  cards
}:IServicesSection) => {
  return (
    <section className="bg-white py-16 px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl text-gray-900 ">
            {title.split(" ").map((word, index) => (
              <React.Fragment key={index}>
                {word} {index === 2 || index === 5 ? <br /> : " "}
              </React.Fragment>
            ))}
          </h2>
        </div>

        <div>
          <p className="text-lg text-gray-700 mb-6">
            {subtitle}
          </p>
          <div className="flex space-x-12">
            {statistics.map((stat, index) => (
              <div key={index} className="text-left">
                <p className="text-3xl  text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-6 rounded-lg text-white shadow-md flex flex-col justify-between`}
            style={{ minHeight: '300px' }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-base mb-6">{card.description}</p>
            </div>
            <a
              href={card.buttonLink}
              className="w-auto inline-block px-4 py-2 border border-white text-white rounded-[20px] hover:bg-white hover:text-gray-900 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {card.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoCreatingSection;
