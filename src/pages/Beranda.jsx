import NavBar from "../components/navBar";
import HeroBaner from "../components/heroBaner";
import LanjutTonton from "../components/lanjutTonton";
import ScrollRow from "../components/scrollRow";
import AllScroll from "../components/allScrollRow";
import AllMovie from "../components/allMovie";
import Footer from "../components/footer";

const Beranda = () => {
  const menuItems = [
    { name: "Series", path: "/series" },
    { name: "Film", path: "/film" },
    { name: "Daftar Saya", path: "/daftar-saya" },
  ];
  return (
    <>
      <NavBar menuItems={menuItems} />

      <HeroBaner
        image="/assets/Duty-after-hb.png"
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
      />

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[309px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Melanjutkan Tonton Film
        </h1>
        <div className="overflow-hidden mx-[20px]">
          <ScrollRow>
            <LanjutTonton
              image="/assets/Dont-look-up-1.png"
              title="Don't Look up"
              rating="4.5/5"
            />
            <LanjutTonton
              image="/assets/All-of-us-1.png"
              title="The Batman"
              rating="4.2/5"
            />
            <LanjutTonton
              image="/assets/Blue-lock-1.png"
              title="Blue Lock"
              rating="4.6/5"
            />
            <LanjutTonton
              image="/assets/A-man-called-1.png"
              title="A Man Called Otto"
              rating="4.4/5"
            />
            <LanjutTonton
              image="/assets/Dont-look-up-1.png"
              title="Don't Look up"
              rating="4.5/5"
            />
            <LanjutTonton
              image="/assets/All-of-us-1.png"
              title="The Batman"
              rating="4.2/5"
            />
            <LanjutTonton
              image="/assets/Blue-lock-1.png"
              title="Blue Lock"
              rating="4.6/5"
            />
            <LanjutTonton
              image="/assets/A-man-called-1.png"
              title="A Man Called Otto"
              rating="4.4/5"
            />
          </ScrollRow>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Top Rating Film dan Series Hari ini
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovie
              image="/assets/Suzume.png"
              alt="Top 1"
              newEpisode="Episode Baru"
            />
            <AllMovie image="/assets/Jurasic.png" alt="Top 2" />
            <AllMovie image="/assets/All-of-us.png" alt="Top 3" />
            <AllMovie
              image="/assets/Sonic.png"
              hoverImage="/assets/Hover-Series.png"
              alt="Top 4"
            />
            <AllMovie
              image="/assets/Big-hero.png"
              alt="Top 5"
              topTen="Top 10"
            />
            <AllMovie image="/assets/Jurasic.png" alt="Top 2" />
            <AllMovie image="/assets/All-of-us.png" alt="Top 3" />
          </AllScroll>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Film Trending
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovie
              image="/assets/The-tomorrow.png"
              alt="Top 1"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/Quantumania.png"
              alt="Top 2"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/Guardians.png"
              alt="Top 3"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/A-man-called.png"
              alt="Top 4"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/Litle-mermaid.png"
              alt="Top 5"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/The-tomorrow.png"
              alt="Top 2"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/Quantumania.png"
              alt="Top 3"
              topTen="Top 10"
            />
          </AllScroll>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Rilis Baru
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovie
              image="/assets/Litle-mermaid.png"
              alt="Top 1"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/Duty-after.png"
              alt="Top 2"
              newEpisode="Episode Baru"
            />
            <AllMovie
              image="/assets/Big-hero.png"
              alt="Top 3"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/All-of-us.png"
              alt="Top 4"
              newEpisode="Episode Baru"
            />
            <AllMovie image="/assets/Missing.png" alt="Top 5" />
            <AllMovie
              image="/assets/The-tomorrow.png"
              alt="Top 2"
              topTen="Top 10"
            />
            <AllMovie
              image="/assets/Quantumania.png"
              alt="Top 3"
              topTen="Top 10"
            />
          </AllScroll>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};
export default Beranda;
