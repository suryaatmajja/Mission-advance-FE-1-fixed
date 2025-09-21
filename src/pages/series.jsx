import NavBar from "../components/navBar";
import HeroBaner from "../components/heroBaner";
import LanjutTontonSeries from "../components/lanjutNontonSeries";
import ScrollRow from "../components/scrollRow";
import AllScroll from "../components/allScrollRow";
import AllMovieSeries from "../components/allMovieSeries";
import Footer from "../components/footer";

const Series = () => {
  const menuItems = [
    { name: "Series", path: "/series" },
    { name: "Film", path: "/film" },
    { name: "Daftar Saya", path: "/daftar-saya" },
  ];
  return (
    <>
      <NavBar menuItems={menuItems} />

      <HeroBaner
        image="/assets/happines-hb.png"
        title="Happiness"
        description="Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen."
      />

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[309px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Melanjutkan Tonton Series
        </h1>
        <div className="overflow-hidden mx-[20px]">
          <ScrollRow>
            <LanjutTontonSeries
              image="/assets/alice-1.png"
              title="Alice in Borderland"
              rating="4.5/5"
              newepisode="Episode Baru"
            />
            <LanjutTontonSeries
              image="/assets/my-perfect-1.png"
              title="My Perfect Stranger"
              rating="4.6/5"
              newepisode="Episode Baru"
            />
            <LanjutTontonSeries
              image="/assets/All-of-us-1.png"
              title="Blue Lock"
              rating="4.2/5"
              newepisode="Episode Baru"
            />
            <LanjutTontonSeries
              image="/assets/ted-lasso-1.png"
              title="Ted Lasso"
              rating="4.4/5"
              newepisode="Episode Baru"
            />
            <LanjutTontonSeries
              image="/assets/alice-1.png"
              title="Alice in Borderland"
              rating="4.5/5"
              newepisode="Episode Baru"
            />
            <LanjutTontonSeries
              image="/assets/my-perfect-1.png"
              title="My Perfect Stranger"
              rating="4.6/5"
              newepisode="Episode Baru"
            />
            <LanjutTontonSeries
              image="/assets/All-of-us-1.png"
              title="Blue Lock"
              rating="4.2/5"
              newepisode="Episode Baru"
            />
            <LanjutTontonSeries
              image="/assets/ted-lasso-1.png"
              title="Ted Lasso"
              rating="4.4/5"
              newepisode="Episode Baru"
            />
          </ScrollRow>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Series Persembahan Chill
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovieSeries
              image="/assets/Litle-mermaid.png"
              alt="Top 1"
              premium="Premium"
              topTen="Top 10"
            />

            <AllMovieSeries
              image="/assets/Duty-after.png"
              alt="Top 2"
              premium="Premium"
            />

            <AllMovieSeries
              image="/assets/Big-hero.png"
              alt="Top 3"
              premium="Premium"
            />

            <AllMovieSeries
              image="/assets/All-of-us.png"
              alt="Top 4"
              premium="Premium"
            />

            <AllMovieSeries
              image="/assets/Missing.png"
              alt="Top 5"
              premium="Premium"
            />

            <AllMovieSeries
              image="/assets/Jurasic.png"
              alt="Top 2"
              premium="Premium"
            />
            <AllMovieSeries
              image="/assets/All-of-us.png"
              alt="Top 3"
              premium="Premium"
            />
          </AllScroll>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Top Rating Series Hari ini
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovieSeries
              image="/assets/Suzume.png"
              alt="Top 1"
              newEpisode="Episode Baru"
            />
            <AllMovieSeries image="/assets/Jurasic.png" alt="Top 2" />
            <AllMovieSeries image="/assets/All-of-us.png" alt="Top 3" />
            <AllMovieSeries
              image="/assets/Sonic.png"
              hoverImage="/assets/Hover-Series.png"
              alt="Top 4"
            />
            <AllMovieSeries
              image="/assets/Big-hero.png"
              alt="Top 5"
              topTen="Top 10"
            />
            <AllMovieSeries image="/assets/Jurasic.png" alt="Top 2" />
            <AllMovieSeries image="/assets/All-of-us.png" alt="Top 3" />
          </AllScroll>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Film Trending
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovieSeries
              image="/assets/The-tomorrow.png"
              alt="Top 1"
              topTen="Top 10"
            />
            <AllMovieSeries
              image="/assets/Quantumania.png"
              alt="Top 2"
              topTen="Top 10"
            />
            <AllMovieSeries
              image="/assets/Guardians.png"
              alt="Top 3"
              topTen="Top 10"
            />
            <AllMovieSeries
              image="/assets/A-man-called.png"
              alt="Top 4"
              topTen="Top 10"
            />
            <AllMovieSeries
              image="/assets/Litle-mermaid.png"
              alt="Top 5"
              topTen="Top 10"
            />
            <AllMovieSeries
              image="/assets/The-tomorrow.png"
              alt="Top 2"
              topTen="Top 10"
            />
            <AllMovieSeries
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
            <AllMovieSeries
              image="/assets/Litle-mermaid.png"
              alt="Top 1"
              topTen="Top 10"
            />
            <AllMovieSeries
              image="/assets/Duty-after.png"
              alt="Top 2"
              newEpisode="Episode Baru"
            />
            <AllMovieSeries
              image="/assets/Big-hero.png"
              alt="Top 3"
              topTen="Top 10"
            />
            <AllMovieSeries
              image="/assets/All-of-us.png"
              alt="Top 4"
              newEpisode="Episode Baru"
            />
            <AllMovieSeries image="/assets/Missing.png" alt="Top 5" />
            <AllMovieSeries
              image="/assets/The-tomorrow.png"
              alt="Top 2"
              topTen="Top 10"
            />
            <AllMovieSeries
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
export default Series;
