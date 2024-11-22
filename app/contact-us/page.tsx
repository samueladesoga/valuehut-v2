"use client";
import React from "react";
import { OfficeMap } from "./OfficeMap";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import ContactForm from "../components/ContactUsPage/contactForm/ContactForm";
import AddressCard from "../components/ContactUsPage/AddressCard/AddressCard";
import { heroData } from "../data/contact-us/heroSection";
import { addressData } from "../data/contact-us/address";

const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] ">
      <HeroComponent
        title={heroData.title}
        subtitle={heroData.subtitle}
        backgroundImage={heroData.backgroundImage}
      />
      <div className="container px-1 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-44 ">
          <div>
            <ContactForm
              onSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-primary font-bold mb-6">
              Our offices
            </h2>
            <p className="text-sm font-secondary mb-4">
              Please fill out the form below and one of us will contact you
              within 24hrs. Or, contact us by email or phone number listed
              below.
            </p>
            <div className="space-y-4">
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
      <div className="py-10">
        <OfficeMap />
      </div>
    </div>
  );
};

export default ContactUsPage;
