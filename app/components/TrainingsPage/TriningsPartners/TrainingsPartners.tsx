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
  width: number;
  height: number;
}

const imageData: imageDataProps[] = [
  { id: 3, src: pacemkv, alt: "Pacemkv Image", width: 123, height: 7 },
  { id: 1, src: Layer, alt: "Frame Image", width: 187, height: 40 },
  { id: 2, src: Frame, alt: "Layer Image", width: 122, height: 40 },
  { id: 4, src: Logo, alt: "Logo", width: 44, height: 40 },
];

function TrainingsPartners() {
  return (
    <div className=" flex flex-col justify-between items-center gap-8 lg:gap-5">
      <h3 className="text-sm text-[#141834] font-medium font-secondary">
        Our trusted partners
      </h3>

      <div className="flex gap-2 lg:gap-7 justify-center flex-wrap">
        {imageData.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-contain px-2 sm:px-0"
          />
        ))}
      </div>
    </div>
  );
}

export default TrainingsPartners;
