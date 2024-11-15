import React from "react";

interface CTAHeadingProps {
  text: string;
}

interface CTASubheadingProps {
  headline: string;
  description: string;
}

interface CTAButtonProps {
  label: string;
}

interface CTAImageProps {
  src: string;
  alt: string;
}

const TalentMatchingCTA: React.FC = () => {
  return (
    <div className="talent-matching-cta bg-dark text-white p-12 flex justify-between items-center">
      <div>
        <CTAHeading text="We help you find the right talent, fast." />
        <CTASubheading
          headline="Headline one"
          description="Established product delivery teams often face challenges related to adoption"
        />
        <CTASubheading
          headline="Headline two"
          description="Established product delivery teams often face challenges related to adoption"
        />
        <CTAButton label="Get started now" />
      </div>
      <CTAImage src="/path/to/image.jpg" alt="Talent Matching Professional" />
    </div>
  );
};

const CTAHeading: React.FC<CTAHeadingProps> = ({ text }) => (
  <h2 className="cta-heading text-4xl font-bold mb-4">{text}</h2>
);

const CTASubheading: React.FC<CTASubheadingProps> = ({
  headline,
  description,
}) => (
  <div className="cta-subheading my-2">
    <h3 className="text-2xl">{headline}</h3>
    <p>{description}</p>
  </div>
);

const CTAButton: React.FC<CTAButtonProps> = ({ label }) => (
  <button className="cta-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {label}
  </button>
);

const CTAImage: React.FC<CTAImageProps> = ({ src, alt }) => (
  <img className="cta-image w-1/3 rounded-lg shadow-lg" src={src} alt={alt} />
);

export default TalentMatchingCTA;
