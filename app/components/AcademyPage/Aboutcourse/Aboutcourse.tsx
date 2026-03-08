import Image from "next/image";
import React from "react";
interface IAboutcourse {
  description: string;
  logo: string;
}

function Aboutcourse({ description, logo }: IAboutcourse) {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-5 md:gap-40 ">
      <div className="flex flex-col gap-3">
        <h2 className="text-6xl font-medium text-main font-primary">
          About this course
        </h2>
        <p className="text-sm font-secondary font-medium text-body">
          {description}
        </p>
      </div>
      <Image src={logo} width={150} height={150} alt="image" />
    </div>
  );
}

export default Aboutcourse;
