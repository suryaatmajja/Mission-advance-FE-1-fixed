const HeroBanner = ({ image, title, description, onStart, onMoreInfo }) => {
  return (
    <div className="relative">
      {/* Background */}
      <img
        className="w-screen h-[225px] object-cover md:h-[587px]"
        src={image}
        alt={title}
      />
      <div className="absolute inset-0 h-[225px] bg-gradient-to-t from-[rgba(24,26,28,1)]/100 to-transparent md:h-[587px]"></div>

      {/* Content */}
      <div className="absolute bottom-[20px] left-[22px] top-[67px] text-white font-lato md:bottom-[20px] md:left-[80px] md:top-[274px] md:w-[1280px]">
        <h1 className="text-[24px] font-bold md:text-[48px]">{title}</h1>
        <p className="line-clamp-2 text-[12px] pt-[5px] tracking-wide max-w-[320px] md:line-clamp-none md:text-[18px] md:pt-[20px] md:max-w-[680px] md:max-h-[148px]">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-[8px] mt-[15px]">
          <button
            onClick={onStart}
            className="bg-[rgba(34,40,42,1)] hover:bg-[rgba(15,30,147,1)] w-[55px] h-[25px] rounded-full text-[12px] md:w-[93px] md:h-[45px] md:text-[16px]"
          >
            Mulai
          </button>
          <button
            onClick={onMoreInfo}
            className="bg-[rgba(34,40,42,1)] hover:bg-[rgba(15,30,147,1)] flex items-center gap-1 w-[120px] h-[25px] rounded-full text-[12px] pl-[15px] md:w-[185px] md:h-[45px] md:text-[16px] md:gap-2 md:pl-[25px]"
          >
            <img
              className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]"
              src="/assets/info.png"
              alt="info"
            />
            Selengkapnya
          </button>

          <span className="w-[30px] h-[25px] flex items-center justify-center rounded-full border border-[rgba(193,194,196,1)] text-[12px] md:w-[52px] md:h-[45px] md:text-[18px]">
            18+
          </span>

          <div className="flex ml-auto">
            <span className="w-[25px] h-[25px] flex items-center justify-center rounded-full border border-[rgba(193,194,196,1)] md:w-[44px] md:h-[44px]">
              <img
                className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]"
                src="/assets/volume-off.png"
                alt="vol-off"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
