const LanjutTonton = ({ image, title, rating }) => {
  return (
    <div className="relative w-[309px] h-[151px] mt-[64px] flex-shrink-0 mr-[8px] md:w-[302px] md:h-[162px] md:mt-[107px]">
      <img
        className="w-[309px] h-full object-cover rounded md:w-[302px]"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-[17px] right-[20px] flex items-center z-10">
        <img className="mr-1 w-4 h-4" src="/assets/star.png" alt="star" />
        <span className="text-white text-xs md:text-lg">{rating}</span>
      </div>
      <p className="absolute text-white font-medium bottom-[17px] left-[15px] z-10 text-xs md:text-lg">
        {title}
      </p>
    </div>
  );
};

export default LanjutTonton;
