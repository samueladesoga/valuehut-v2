// import React from "react";

// interface BookACallCTAProps {
//   title: string;
//   description: string;
//   buttonText: string;
//   imageUrl: string;
// }

// const BookACallCTA: React.FC<BookACallCTAProps> = ({
//   title,
//   description,
//   buttonText,
//   imageUrl,
// }) => {
//   return (
//     <div className="container book-a-call-cta bg-orange-200 flex justify-between items-center p-8 rounded-lg">
//       <div className="text-container">
//         <h2 className="text-3xl font-bold">{title}</h2>
//         <p className="text-lg">{description}</p>
//         <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           {buttonText}
//         </button>
//       </div>
//       <div className="image-container">
//         <img
//           src={imageUrl}
//           alt="Consultant ready to help"
//           className="rounded-full w-48"
//         />
//       </div>
//     </div>
//   );
// };

// export default BookACallCTA;

import Image from "next/image";
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
    <div className="container book-a-call-cta bg-orange-200 flex flex-col md:flex-row px-[60px] justify-between items-center sm:rounded-[30px] ">
      <div className="text-container mt-10 md:mt-0 ">
        <h2 className="text-[47px] sm:[text-[60px] font-semibold leading-[61px] sm:leading-[78px]">
          {title}
        </h2>
        <p className="text-[19px] leading-[28px] mt-2 w-full sm:max-w-[70%] font-normal">
          {description}
        </p>
        <div className="mt-10">
          <button className="bg-[#032432] font-secondary h-auto px-6 py-3 rounded-full text-white text-main text-sm font-medium ">
            {buttonText}
          </button>
        </div>
      </div>
      <div className="image-container">
        <Image
          src={imageUrl}
          alt="Consultant ready to help"
          width={400}
          height={0}
          objectFit="cover"
          className="bg-no-repeat rounded-md mt-20 lg:mt-[-40px]"
        />
      </div>
    </div>
  );
};

export default BookACallCTA;
