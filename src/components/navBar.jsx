import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ menuItems, logo }) => {
  const [open, setOpen] = useState(false);
  const [profileImg, setProfileImg] = useState("/assets/profil.png");

  // Ambil foto profil dari localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.photo) {
      setProfileImg(savedUser.photo);
    }
  }, []);

  // perubahan localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser?.photo) {
        setProfileImg(savedUser.photo);
      } else {
        setProfileImg("/assets/profil.png");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav className="relative z-20 bg-[rgba(24,26,28,1)] bg-cover bg-center h-[56px] text-white flex items-center px-4 md:px-[80px] md:h-[94px]">
      {/* Logo */}
      <Link to="/beranda">
        <div className="flex items-center">
          <img
            className="mr-[15px] w-[20px] h-[18px] md:mr-[4.5px] md:w-[25px] md:h-[26px]"
            src={logo || "/assets/movie-open.png"}
            alt="logo"
          />
          <h1 className="hidden md:block md:font-londrina-solid md:text-[32px] md:mr-[80px] ">
            CHILL
          </h1>
        </div>
      </Link>

      {/* Menu */}
      <ul className="flex space-x-[12px] text-[10px] tracking-[0.2px] items-center font-lato md:space-x-[80px] md:text-[18px]">
        {menuItems?.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="cursor-pointer hover:text-blue-500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex-grow" />

      {/* Profile */}
      <div className="relative flex items-center">
        <img
          className="w-[20px] h-[20px] mr-[2px] md:w-[40px] md:h-[40px] rounded-full object-cover"
          src={profileImg}
          alt="profil"
        />

        {/* Arrow */}
        <img
          onClick={() => setOpen(!open)}
          className="w-[16px] h-[16px] md:w-[28px] md:h-[28px]"
          src="/assets/Arrow-down.png"
          alt="dropdown"
        />

        {open && (
          <div className="absolute right-[2px] top-[20px] mt-2 w-[113px] text-white rounded-md shadow-lg md:right-[2px] md:top-[40px] md:mt-2 md:w-[156px]">
            <ul className="py-1">
              <li className="flex items-center bg-[rgba(24,26,28,1)] w-[113px] h-[32px] text-lato text-[10px] hover:bg-[rgba(40,40,40,1)] hover:text-[rgba(50,84,255,1)] cursor-pointer md:w-[156px] md:h-[40px] md:text-[14px]">
                <img
                  className="w-[16px] h-[16px] mr-[4px] ml-[12px] md:w-[24px] md:h-[24px]"
                  src="/assets/account.png"
                  alt="profil"
                />
                <Link to="/profil">Profil Saya</Link>
              </li>

              <li className="flex items-center bg-[rgba(24,26,28,1)] w-[113px] h-[32px] text-lato text-[10px] hover:bg-[rgba(40,40,40,1)] hover:text-[rgba(50,84,255,1)] cursor-pointer md:w-[156px] md:h-[40px] md:text-[14px]">
                <img
                  className="w-[16px] h-[16px] mr-[4px] ml-[12px] md:w-[24px] md:h-[24px]"
                  src="/assets/star.png"
                  alt="premium"
                />
                <span>Ubah Premium</span>
              </li>

              <li className="flex items-center bg-[rgba(24,26,28,1)] w-[113px] h-[32px] text-lato text-[10px] hover:bg-[rgba(40,40,40,1)] hover:text-[rgba(50,84,255,1)] cursor-pointer md:w-[156px] md:h-[40px] md:text-[14px]">
                <img
                  className="w-[16px] h-[16px] mr-[4px] ml-[12px] md:w-[24px] md:h-[24px]"
                  src="/assets/login-variant.png"
                  alt="keluar"
                />
                <a href="/login"> Keluar</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
