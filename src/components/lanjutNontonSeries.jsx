const LanjutTontonSeries = ({ image, title, rating, newepisode }) => {
  return (
    <div className="relative w-[309px] h-[151px] mt-[64px] flex-shrink-0 mr-[8px] md:w-[302px] md:h-[162px] md:mt-[107px]">
      <img
        className="w-[309px] h-full object-cover rounded md:w-[302px]"
        src={image}
        alt={title}
      />

      <div className="absolute bottom-[17px] right-[20px] flex items-center justify-center z-10">
        <img className="mr-1 w-4 h-4" src="/assets/star.png" alt="star" />
        <span className="text-white text-xs md:text-lg">{rating}</span>
      </div>

      {newepisode && (
        <div className="absolute top-4 left-4 z-10">
          <span className="flex justify-center items-center bg-[rgba(15,30,147,1)] rounded-full text-white text-xs w-[93px] h-[25px] md:w-[104px] md:h-7 md:text-sm">
            {newepisode}
          </span>
        </div>
      )}

      <p className="absolute text-white font-medium bottom-[17px] left-[15px] z-10 text-xs md:text-lg">
        {title}
      </p>
    </div>
  );
};

export default LanjutTontonSeries;
