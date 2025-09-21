const AllMovieSeries = ({ image, alt, topTen, newEpisode, premium }) => {
  return (
    <div className="relative flex-shrink-0 mt-[64px] mr-1 md:w-[234px] md:mr-2.5 md:h-[365px] md:mt-[107px] group">
      {/* Gambar utama */}
      <img
        className="w-[95px] h-full object-cover rounded md:w-[234px]"
        src={image}
        alt={alt}
      />

      {/* Badge Top */}
      {topTen && (
        <span
          className="absolute top-0 right-[5px] w-[14.82px] h-[21.28px] 
          rounded-tr-[1.91px] rounded-bl-[1.91px] 
          px-[10.91px] text-[6.69px] tracking-[0.1px] 
          flex items-center justify-center text-center bg-red-600 text-white
          md:w-[31px] md:h-[48px] md:text-[14px] md:right-[14px] "
        >
          {topTen}
        </span>
      )}

      {/* Badge New Episode */}
      {newEpisode && (
        <span
          className="absolute top-[10px] left-[8px] 
          w-[44px] h-[14px] text-[6px]
          leading-[140%] tracking-[0.1px] py-[2px]
          bg-[#0F1E93] rounded-full text-white flex justify-center align-center
          md:w-[104px] md:h-[28px] md:text-[14px] md:top-[16px] md:left-[16px]"
        >
          {newEpisode}
        </span>
      )}

      {/* Badge Premium */}
      {premium && (
        <span
          className="absolute top-[10px] left-[8px]
        w-[37px] h-[14px] text-[6px] 
        leading-[140%] tracking-[0.1px] py-[2px] 
        bg-[rgba(183,162,7,1)] rounded-full text-white flex justify-center align-center
        md:w-[78px] md:h-[28px] md:text-[14px] md:top-[16px] md:left-[16px]"
        >
          {premium}
        </span>
      )}
    </div>
  );
};

export default AllMovieSeries;
