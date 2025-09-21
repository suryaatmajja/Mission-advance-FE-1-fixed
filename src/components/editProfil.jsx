const EditProfil = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="font-lato w-[320px] h-[56px] border border-[rgba(231,227,252,0.23)] text-[rgba(157,158,161,1)] bg-[rgba(34,40,42,1)] mx-5 rounded-lg mt-8 md:w-[642px] md:h-[64px] md:mx-20 ">
      <label className="block pt-1.5 text-sm md:text-base mx-4">{label}</label>

      <input
        className="w-[256px] text-white border-none outline-none focus:ring-0 focus:border-none
        font-lato text-base mx-4 md:text-lg bg-[rgba(34,40,42,1)]"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <img
        className="absolute w-4.5 h-4.5 -mt-7.5 ml-71 md:-mt-9 md:ml-150.5 cursor-pointer"
        src="/assets/pensil.png"
        alt="edit"
      />
    </div>
  );
};

export default EditProfil;
