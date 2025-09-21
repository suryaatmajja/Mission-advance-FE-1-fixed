import { useState } from "react";

const InputPassword = ({ label, name, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4 relative">
      <label className="block font-lato text-[10px] md:text-[18px] mx-[24px] md:mx-[40px]">
        {label}
      </label>
      <input
        className="pl-[10px] w-[260px] h-[28px] rounded-[12px] border border-[rgba(231,227,252,0.23)] 
        font-lato text-[10px] mx-[24px] mt-[3px]
        md:pl-[20px] md:w-[450px] md:h-[50px] md:rounded-[24px] 
        md:text-[16px] md:mx-[40px] md:mt-[6px]"
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <img
        className="absolute w-[12px] h-[12px] -mt-[20px] mx-[260px] cursor-pointer
            md:w-[20px] md:h-[20px] md:-mt-[35px] md:mx-[450px]"
        src={showPassword ? "/assets/eye-open.png" : "/assets/eye-off.png"}
        alt="Toggle Password"
        onClick={togglePassword}
      />
    </div>
  );
};

export default InputPassword;
