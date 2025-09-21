// Button.jsx
const Button = ({ text, type = "button", icon }) => {
  return (
    <button
      type={type}
      className="bg-transparant hover:bg-[rgba(231,227,252,0.23)] 
      font-lato text-[10px] font-semibold border border-[rgba(231,227,252,0.23)] 
      rounded-[14px] w-[258px] h-[30px] mx-[24px] mt-[10px]
      md:text-[16px] md:rounded-[24px] md:w-[450px] md:h-[50px] md:mx-[40px]"
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="inline w-[14px] h-[14px] mr-2 md:w-[18px] md:h-[18px]"
        />
      )}
      {text}
    </button>
  );
};

export default Button;
