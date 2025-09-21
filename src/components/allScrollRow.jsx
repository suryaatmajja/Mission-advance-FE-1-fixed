import React, { useRef } from "react";

const AllScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -700, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 700, behavior: "smooth" });
  };

  return (
    <div className="relative md:w-[1250px] md:mx-[80px]">
      {/* Tombol kiri */}
      <img
        onClick={scrollLeft}
        src="/assets/left-icon.png"
        alt="scroll left"
        className="hidden md:block md:absolute md:left-0 md:bottom-1/3 md:-ml-[30px] md:w-[44px] md:h-[44px] md:cursor-pointer md:z-10"
      />

      {/* Tombol kanan */}
      <img
        onClick={scrollRight}
        src="/assets/right-icon.png"
        alt="scroll right"
        className="hidden md:block md:absolute md:left-0 md:bottom-1/3 md:ml-[1236px] md:w-[44px] md:h-[44px] md:cursor-pointer md:z-10"
      />

      {/* Container scrollable */}
      <div
        ref={scrollRef}
        className="flex items-center overflow-x-auto scrollbar-hide gap-2 md:gap-3 md:-mr-2"
      >
        {children}
      </div>
    </div>
  );
};

export default AllScroll;
