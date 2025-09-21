import NavBar from "../components/navBar";
import MyList from "../components/myListContainer";
import Footer from "../components/footer";

const DaftarSaya = () => {
  const menuItems = [
    { name: "Series", path: "/#" },
    { name: "Film", path: "/#" },
    { name: "Daftar Saya", path: "daftar-saya" },
  ];
  return (
    <>
      <NavBar menuItems={menuItems} />

      <div className="bg-[rgba(24,26,28,1)] w-full h-full">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-4.5 md:text-[32px] md:mt-20 md:ml-20">
          Daftar Saya
        </h1>

        <div className="flex flex-wrap gap-4.5 pl-4.5 pt-15 pb-10 md:pl-20 md:pt-35">
          <MyList
            image="/assets/All-of-us.png"
            alt="trend"
            topTen="Top 10"
            newEpisode="Episode Baru"
          />

          <MyList image="/assets/Baymax.png" alt="trend" />

          <MyList
            image="/assets/My-hero.png"
            alt="trend"
            newEpisode="Episode Baru"
          />

          <MyList
            image="/assets/Blue-lock.png"
            alt="trend"
            newEpisode="Episode Baru"
          />

          <MyList
            image="/assets/Ted-laso.png"
            alt="trend"
            topTen="Top 10"
            newEpisode="Episode Baru"
          />

          <MyList
            image="/assets/Duty-after.png"
            alt="trend"
            topTen="Top 10"
            newEpisode="Episode Baru"
          />

          <MyList
            image="/assets/Suzume.png"
            alt="trend"
            topTen="Top 10"
            newEpisode=""
          />

          <MyList
            image="/assets/Guardians.png"
            alt="trend"
            topTen="Top 10"
            newEpisode=""
          />

          <MyList image="/assets/Spiderman.png" alt="trend" />
          <MyList image="/assets/Sonic.png" alt="trend" />
          <MyList image="/assets/Megan.png" alt="trend" />
          <MyList image="/assets/Dilan.png" alt="trend" />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DaftarSaya;
