const MyList = ({ image, alt, topTen, newEpisode }) => {
  return (
    <>
      <div className="relative flex-shrink-0 group">
        {/* Gambar utama */}
        <img
          className="w-[95px] h-full object-cover rounded md:w-[200px]"
          src={image}
          alt={alt}
        />

        {/* Badge Top */}
        {topTen && (
          <span
            className="absolute top-0 right-[5px] w-[14.82px] h-[21.28px] 
          rounded-tr-[1.91px] rounded-bl-[1.91px] 
          px-[1.91px] text-[6.69px] tracking-[0.1px] 
          flex items-center justify-center text-center bg-red-600 text-white
          md:w-[31px] md:h-[48px] md:text-[14px] md:right-[14px] "
          >
            {topTen}
          </span>
        )}

        {/* Badge New Episode */}
        {newEpisode && (
          <span
            className="absolute top-[8px] left-[5px] 
          w-[44px] h-[14px] text-[6px]
          leading-[140%] tracking-[0.1px] py-[2px]
          bg-[#0F1E93] rounded-full text-white flex justify-center align-center
          md:w-[104px] md:h-[28px] md:text-[14px] md:top-[16px] md:left-[16px]"
          >
            {newEpisode}
          </span>
        )}
      </div>
    </>
  );
};

export default MyList;
