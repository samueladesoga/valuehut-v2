import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
  border?: boolean;
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  btnText?: string | React.ReactNode;
  rounded?: "sm" | "md" | "lg" | "full";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  bgColor = "white",
  textColor = "Primary",
  border = false,
  size = "medium",
  icon,
  rounded = "md",
  onClick,
}) => {
  const sizeClasses = {
    small: "py-2 px-5 text-sm ",
    medium: "py-3 px-6 text-base ",
    large: "py-4 px-[25px] text-lg",
  };

  const borderClass = border ? "border border-Primary" : "";

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <>
      <button
        onClick={onClick}
        className={`flex items-center gap-2 justify-between bg-${bgColor} text-${textColor} ${borderClass} ${sizeClasses[size]} ${roundedClasses[rounded]} ${className} font-medium transition duration-300 ease-in-out hover:opacity-80 focus:outline-none`}
      >
        {children}
        {icon && <span>{icon}</span>}
      </button>
    </>
  );
};

export default Button;
