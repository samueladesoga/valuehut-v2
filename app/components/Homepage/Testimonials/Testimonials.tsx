import React from "react";
import TrustBox from "@/components/TrustBox/TrustBox";

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4 xl:px-0 text-center">
      <h2 className="font-primary text-9xl font-medium mb-8">
        What our clients say
      </h2>
      <div>
        <TrustBox />
      </div>
    </div>
  );
};

export default Testimonials;
