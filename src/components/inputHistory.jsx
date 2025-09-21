const InputHistory = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-lato text-[10px] md:text-[16px] mx-[24px] md:mx-[30px] md:mt-8">
        {label}
      </label>

      <input
        className=" text-white pl-[10px] w-[260px] h-[28px] focus:outline-none focus:ring-0 bg-transparent rounded-[12px] border border-[rgba(231,227,252,0.23)] 
        font-lato text-[10px] ml-2.5 mt-1.5
        md:pl-[20px] md:w-[350px] md:h-[40px] md:rounded-[24px] 
        md:text-[14px] md:mx-[25px] md:mt-[8px]"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputHistory;
