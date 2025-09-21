// Logo.jsx
const Logo = () => {
  return (
    <div>
      <img
        className="absolute w-[24.5px] h-[24.5px] ml-[110px] mt-[27px]
          md:w-[50px] md:h-[44px] md:ml-[183px] md:mt-[35px]"
        src="/assets/movie-open.png"
        alt="Logo"
      />

      <h1
        className="pl-[137px] pt-[18px] font-londrina-solid text-[28px]
        md:pl-[237px] md:pt-[20px] md:text-[50px]"
      >
        CHILL
      </h1>
    </div>
  );
};

export default Logo;
