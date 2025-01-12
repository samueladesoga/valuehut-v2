"use client";
import React from "react";
import { OfficeMap } from "@/components/ContactUsPage/Map/OfficeMap";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import ContactForm from "@/components/ContactUsPage/contactForm/ContactForm";
import AddressCard from "@/components/ContactUsPage/AddressCard/AddressCard";
import { heroData } from "@/data/contact-us/heroSection";
import { addressData } from "@/data/contact-us/address";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5]  ">
      <HeroComponent
        title={heroData.title}
        subtitle={heroData.subtitle}
        backgroundImage={heroData.backgroundImage}
      />
      <div className="container mx-auto w-full  flex justify-center sm:py-20  ">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 xl:gap-52 w-full px-0 sm:px-10 lg:px-0 ">
          <div>
            <ContactForm />
          </div>
          <div className=" md:px-0 py-7 w-full sm:max-w-[557px] px-4 ">
            <div>
              <h2 className="text-3xl font-primary font-normal mb-6 ">
                Our offices
              </h2>
              <p className="text-sm font-secondary mb-4 font-medium">
                Please fill out the form below and one of us will contact you
                within 24hrs. Or, contact us by email or phone number listed
                below.
              </p>
            </div>
            <div className="space-y-4 w-full">
              {addressData.map((address) => (
                <AddressCard
                  key={address.phone}
                  address={address.address}
                  phone={address.phone}
                  state={address.state}
                  email={address.email}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 sm:py-16 xl:px-0">
        <OfficeMap />
      </div>
    </div>
  );
};

export default ContactUs;
