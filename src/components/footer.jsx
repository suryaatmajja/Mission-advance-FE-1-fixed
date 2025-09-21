import { useState } from "react";

export default function Footer() {
  const [openGenre, setOpenGenre] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const genres = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller",
  ];
  const helpMenu = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

  return (
    <footer className="w-full h-full bg-[rgba(24,26,28,1)] text-white">
      {/* Logo */}
      <div className="flex border-t border-[rgba(231,227,252,0.23)] pl-[20px] pt-[20px] gap-0.5 md:pl-[80px] md:pt-[96px]">
        <img
          className="w-[28px] h-[25px] mt-1.5 md:w-[50px] md:h-[45px] md:mt-4"
          src="/assets/movie-open.png"
          alt="Logo"
        />
        <h1 className="font-londrina-solid text-[25px] md:text-[50px]">
          CHILL
        </h1>

        <p className="absolute mt-[40px] text-[12px] font-lato font-light tracking-[0.2px] md:text-[16px] md:mt-[75px]">
          @2023 Chill All Rights Reserved.
        </p>
      </div>

      {/* Menu */}
      <div className="relative font-lato ml-[20px] mt-15 pb-5 md:ml-[546px] md:-mt-[100px] md:pb-[40px] md:flex md:gap-[140px]">
        {/* Genre */}
        <div>
          {/* Judul + toggle (mobile only) */}
          <div
            className="flex justify-between w-[320px] cursor-pointer md:cursor-default md:w-[514px]"
            onClick={() => setOpenGenre(!openGenre)}
          >
            <h2 className="font-semibold">Genre</h2>
            <img
              className={`w-[24px] h-[24px] transform transition-transform duration-200 md:hidden ${
                openGenre ? "rotate-90" : ""
              }`}
              src="/assets/footer-right.png"
              alt="right"
            />
          </div>

          {/* List mobile (collapsible) */}
          {openGenre && (
            <div className="grid grid-rows-5 grid-flow-col gap-1 bg-[rgba(24,26,28,1)] pt-2 pb-5 w-[320px] md:hidden">
              {genres.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs text-lato text-white hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* List desktop (selalu tampil) */}
          <div className="hidden md:grid md:grid-rows-4 md:grid-flow-col md:gap-2 md:mt-2 md:mr-[10px]">
            {genres.map((item, idx) => (
              <span
                key={idx}
                className="text-white hover:text-blue-600 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bantuan */}
        <div>
          {/* Judul + toggle (mobile only) */}
          <div
            className="flex justify-between w-[320px] pt-2 cursor-pointer md:w-[140px] md:cursor-default"
            onClick={() => setOpenHelp(!openHelp)}
          >
            <h2 className="font-semibold">Bantuan</h2>
            <img
              className={`w-[24px] h-[24px] transform transition-transform duration-200 md:hidden ${
                openHelp ? "rotate-90" : ""
              }`}
              src="/assets/footer-right.png"
              alt="right"
            />
          </div>

          {/* List mobile (collapsible) */}
          {openHelp && (
            <div className="grid grid-rows-4 grid-flow-col gap-2 bg-[rgba(24,26,28,1)] pt-2 pb-5 w-[320px] md:hidden">
              {helpMenu.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs text-white hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* List desktop (selalu tampil) */}
          <div className="hidden md:grid md:gap-2 md:mt-2">
            {helpMenu.map((item, idx) => (
              <span
                key={idx}
                className="text-white hover:text-blue-600 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
