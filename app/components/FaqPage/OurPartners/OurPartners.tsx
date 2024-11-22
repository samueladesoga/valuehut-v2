import React from "react";
import Frame from "@/images/Frame.png";
import Layer from "@/images/Layer.png";
import pacemkv from "@/images/pacemkv.png";
import Logo from "@/images/logo-01.png";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface imageDataProps {
  id: number;
  src: StaticImageData;
  alt: string;
}

const imageData: imageDataProps[] = [
  { id: 3, src: pacemkv, alt: "Pacemkv Image" },
  { id: 1, src: Frame, alt: "Frame Image" },
  { id: 2, src: Layer, alt: "Layer Image" },
  { id: 4, src: Logo, alt: "Logo" },
];

function OurPartners() {
  return (
    <div className="max-w-[898px] mx-auto px-4 py-12 flex flex-col gap-8 sm:gap-10 justify-center items-center xl:px-0">
      <p className="hidden sm:flex max-w-[314px] mx-auto text-sm text-center font-medium font-secondary">
        We maintain strong, collaborative relationships with our key partners.
      </p>
      <h3 className="flex justify-center items-center w-full sm:hidden pt-16 pb-10 px-6 text-base text-[#141834] font-medium font-secondary">
        Our trusted partners
      </h3>

      <div className="flex justify-center flex-wrap gap-2 md:gap-16">
        {imageData.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="object-contain px-2 sm:px-0"
          />
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
