import React from "react";

interface AddressCardProps {
  address: string;
  phone: string;
  state: string;
  email: string;
}

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  phone,
  state,
  email,
}) => {
  return (
    <>
      <div className="bg-[hsla(201,38%,88%,1)] p-4 rounded-md">
        <h3 className="text-xl font-primary font-semibold mb-2">{state}</h3>
        <p className="text-sm font-secondary mb-1">{address}</p>
        <p className="text-sm font-secondary mb-1">{phone}</p>
        <p className="text-sm font-secondary">{email}</p>
      </div>
    </>
  );
};

export default AddressCard;
