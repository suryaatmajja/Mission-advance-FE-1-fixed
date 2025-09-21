import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";
import FormProfil from "../components/formProfil";
import EditProfil from "../components/editProfil";
import MyList from "../components/myListContainer";
import Footer from "../components/footer";
import useUser from "../hooks/useUser"; // hook API

const Profil = () => {
  const { fetchUser, updateUser, deleteUser } = useUser();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("/assets/poto-profil.png");

  const [loading, setLoading] = useState(true);

  // Foto berlangganan tetap fix
  const [subscribePhoto] = useState("/assets/Belum-berlangganan.png");

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId"); // ambil ID user dari login/register

  // Ambil data user dari API
  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          const data = await fetchUser(userId);
          if (data) {
            setUsername(data.username || "");
            setEmail(data.email || "");
            setPassword(data.password || "");
          }
          // ambil foto dari localStorage kalau ada
          const savedPhoto = localStorage.getItem("profilePhoto");
          if (savedPhoto) setPhoto(savedPhoto);
        } catch (error) {
          console.error("Error fetching user:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUser();
  }, [userId, fetchUser]);

  // Simpan perubahan
  const handleSave = async () => {
    try {
      await updateUser(userId, { username, email, password });
      localStorage.setItem("profilePhoto", photo);
      alert("Profil berhasil disimpan!");
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  // Tambah akun (redirect ke register)
  const handleAddAccount = () => {
    navigate("/register");
  };

  // Hapus akun
  const handleDeleteAccount = async () => {
    try {
      await deleteUser(userId);
      localStorage.removeItem("userId");
      localStorage.removeItem("profilePhoto");
      alert("Akun berhasil dihapus!");
      navigate("/register");
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  const menuItems = [
    { name: "Series", path: "/#" },
    { name: "Film", path: "/#" },
    { name: "Daftar Saya", path: "/daftar-saya" },
  ];

  if (loading) return <p className="text-white p-5">Loading profil...</p>;

  return (
    <>
      <NavBar menuItems={menuItems} />

      <div className="bg-[rgba(24,26,28,1)] w-full h-full pt-5">
        {/* Card Berlangganan */}
        <div className="flex w-[320px] h-[191px] font-lato text-white bg-[rgba(61,65,66,1)] rounded-[12px] mx-5 pt-6 md:absolute md:w-[558px] md:h-[193px] md:ml-200 md:mt-25">
          <img
            className="w-[78px] h-[78px] ml-5.5 rounded-full object-cover"
            src={subscribePhoto}
            alt="berlangganan"
          />

          <div className="w-[185px] pl-4 md:w-[412px]">
            <h4 className="text-[18px] font-bold ">Berlangganan</h4>
            <p className="text-sm mt-2.5 md:text-lg">
              Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
              Kamu!
            </p>
          </div>

          <button className="absolute bg-[rgba(47,51,52,1)] hover:bg-[rgba(9,20,122,1)] cursor-pointer w-[154px] h-[29px] text-xs rounded-full mt-30 ml-35 md:text-base md:w-[189px] md:h-[34px] md:ml-85">
            Mulai Berlangganan
          </button>
        </div>

        {/* Profil Saya */}
        <FormProfil photo={photo} setPhoto={setPhoto} />

        {/* Input Edit Profil */}
        <div className="w-full h-full bg-[rgba(24,26,28,1)] pb-4">
          <EditProfil
            type="text"
            label="Username"
            name="username"
            placeholder="Masukan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <EditProfil
            type="email"
            label="Email"
            name="Email"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <EditProfil
            type="password"
            label="Password"
            name="Password"
            placeholder="Masukan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Tombol Simpan / Tambah / Hapus */}
          <div className="flex text-white font-lato mx-5 md:mx-20 ">
            <button
              onClick={handleSave}
              className="bg-[rgba(231,227,252,0.23)] cursor-pointer hover:bg-[rgba(9,20,122,1)] rounded-full mt-6.5 text-sm w-25 h-8 mr-2 md:text-base md:font-bold md:w-37.5 md:h-10.5 md:mr-4 md:mt-8"
            >
              Simpan
            </button>
            <button
              onClick={handleAddAccount}
              className="bg-[rgba(231,227,252,0.23)] cursor-pointer hover:bg-[rgba(9,20,122,1)]  rounded-full mt-6.5 text-sm w-25 h-8 mr-2 md:text-base md:font-bold md:w-37.5 md:h-10.5 md:mr-4 md:mt-8 "
            >
              Tambah Akun
            </button>
            <button
              onClick={handleDeleteAccount}
              className="bg-[rgba(231,227,252,0.23)] cursor-pointer hover:bg-[rgba(9,20,122,1)]  rounded-full mt-6.5 text-sm w-25 h-8 md:text-base md:font-bold md:w-37.5 md:h-10.5 md:mt-8 "
            >
              Hapus Akun
            </button>
          </div>
        </div>

        {/* Daftar Saya */}
        <div className="bg-[rgba(24,26,28,1)] w-full h-full">
          <h1 className="absolute font-lato font-bold text-white text-[20px] ml-4.5 md:text-[32px] md:mt-20 md:ml-20">
            Daftar Saya
          </h1>

          <div className="flex flex-wrap gap-4.5 pl-4.5 pt-10 pb-10 md:pl-20 md:pt-35">
            <MyList
              image="/assets/All-of-us.png"
              alt="trend"
              topTen="Top 10"
              newEpisode="Episode Baru"
            />
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
              newEpisode="Episode Baru"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profil;
