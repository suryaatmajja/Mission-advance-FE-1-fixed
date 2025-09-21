const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-lato text-[10px] md:text-[18px] mx-[24px] md:mx-[40px]">
        {label}
      </label>

      <input
        className=" text-white pl-[10px] w-[260px] h-[28px] focus:outline-none focus:ring-0 bg-transparent rounded-[12px] border border-[rgba(231,227,252,0.23)] 
        font-lato text-[10px] mx-[24px] mt-[3px]
        md:pl-[20px] md:w-[450px] md:h-[50px] md:rounded-[24px] 
        md:text-[16px] md:mx-[40px] md:mt-[6px]"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
