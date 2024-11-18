import React from "react";
import {
  coCreatingData,
  IServicesSection,
} from "./../../../data/Home/Services";
import Button from "../../Button/Button";

interface ServicesSectionProps {
  data?: IServicesSection;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  data = coCreatingData,
}) => {
  const { title, subtitle, statistics, cards } = data;
  return (
    <section className="py-16 px-8 mx-auto w-auto">
      <div className="grid grid-cols-1 font-primary font-medium  md:grid-cols-2 gap-10 items-start mb-16">
        <div>
          <h2 className="text-9xl md:text-7xl text-main ">
            {title.split(" ").map((word, index) => (
              <React.Fragment key={index}>
                {word} {index === 2 || index === 5 ? <br /> : " "}
              </React.Fragment>
            ))}
          </h2>
        </div>
        <div>
          <p className=" text-main mb-6 font-secondary text-2xl font-medium">
            {subtitle}
          </p>
          <div className="flex space-x-12">
            {statistics.map((stat, index) => (
              <div key={index} className="text-left">
                <p className="  text-gray-900 font-primary text-8xl ">
                  {stat.value}
                </p>
                <p className="text-accentMain font-secondary text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-6 rounded-lg font-primary text-white shadow-md flex flex-col justify-between items-start`}
            style={{ minHeight: "300px" }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2  ">{card.title}</h3>
              <p className="text-sm mb-6 font-secondary ">{card.description}</p>
            </div>
            {/* <a
              href={card.buttonLink}
              className="w-auto inline-block px-4 py-2 border border-white text-white rounded-[20px] hover:bg-white hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {card.buttonText}
            </a> */}

            <Button
              size="medium"
              rounded="full"
              className="bg-transparent border border-white"
            >
              Explore Courses
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
