const EditProfil = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="relative font-lato w-[320px] h-[56px] border border-[rgba(231,227,252,0.23)] text-[rgba(157,158,161,1)] bg-[rgba(34,40,42,1)] mx-5 rounded-lg mt-8 md:w-[642px] md:h-[64px] md:mx-20">
      <label className="block pt-1.5 text-sm md:text-base mx-4">{label}</label>

      <input
        className="w-[85%] text-white border-none outline-none focus:ring-0
        font-lato text-base mx-4 md:text-lg bg-[rgba(34,40,42,1)]"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <img
        className="absolute top-1/2 right-4 -translate-y-1/2 w-4.5 h-4.5 cursor-pointer"
        src="/assets/pensil.png"
        alt="edit"
      />
    </div>
  );
};

export default EditProfil;
