import React from "react";

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Delivery Management",
      description:
        "Developing Organisation agility capabilities is a complex journey of Learning and Unlearning.",
    },
    {
      id: 2,
      title: "Consulting",
      description:
        "Developing Organisation agility Capabilities is a complex journey of Learning and Unlearning.",
    },
  ];

  return (
    <div className="container services-overview py-12">
      <ServicesTitle title="Take your business to the next level" />
      <div className="service-cards-wrapper flex justify-center items-center gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesTitle = ({ title }: { title: string }) => (
  <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
);

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="service-card bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
    <h3 className="font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServicesOverview;
