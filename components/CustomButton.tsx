'use client'

import { CustomButtonProps } from "@/types"
import Image from "next/image"


const Button = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  isDisabled,
  rightIcon,
  textStyles,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon" fill />
        </div>
      )}
    </button>
  );
};

export default Button