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
      <div className="bg-[#D5E4EC] p-4 rounded-md">
        <h3 className="text-xl font-secondary font-semibold mb-2">{state}</h3>
        <p className="text-sm font-secondary text-main mb-1">{address}</p>
        <p className="text-sm font-secondary text-main mb-1">{phone}</p>
        <p className="text-sm font-secondary text-main mb-1">{email}</p>
      </div>
    </>
  );
};

export default AddressCard;
