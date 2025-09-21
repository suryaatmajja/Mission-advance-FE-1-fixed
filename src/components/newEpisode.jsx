const NewEpisode = ({newEpisode }) => {
    return(
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
    </div>
    )
};

export default NewEpisode; 
