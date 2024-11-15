import React from "react";

interface BookACallCTAProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const BookACallCTA: React.FC<BookACallCTAProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="container book-a-call-cta bg-orange-200 flex justify-between items-center p-8 rounded-lg">
      <div className="text-container">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
      <div className="image-container">
        <img
          src={imageUrl}
          alt="Consultant ready to help"
          className="rounded-full w-48"
        />
      </div>
    </div>
  );
};

export default BookACallCTA;
