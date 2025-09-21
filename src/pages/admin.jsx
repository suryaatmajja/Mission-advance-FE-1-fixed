import { Link } from "react-router-dom";
import Navbar from "../components/navBar";
import useHistory from "../hooks/useHistory";

const Admin = () => {
  const { history, deleteHistory } = useHistory();

  const menuItems = [
    { name: "Series", path: "/series" },
    { name: "Film", path: "/film" },
    { name: "Daftar Saya", path: "/daftar-saya" },
  ];

  return (
    <>
      <Navbar menuItems={menuItems} />

      <h1 className="absolute z-5 text-white text-center font-lato w-full text-xl mx-auto my-4 md:text-3xl md:my-10 ">
        Admin Dashboard
      </h1>

      <div className="relative bg-[rgba(24,26,28,1)] font-lato min-h-screen bg-cover bg-center">
        <Link to="/tambah-history">
          <button className="bg-[rgba(47,48,50,1)] hover:text-black hover:bg-[rgba(109,110,111,1)] text-white cursor-pointer px-6 py-2 rounded-xl mt-15 ml-25 md:ml-158 md:mt-25">
            Tambah History
          </button>
        </Link>

        {history && history.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-4 px-6">
            {history.map((item) => {
              // Ambil gambar dari localStorage berdasarkan id history
              const savedImage = localStorage.getItem(`image-${item.id}`);
              return (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="relative w-[309px] h-[151px] mt-[64px] flex-shrink-0 mr-[8px] md:w-[302px] md:h-[162px] md:mt-[107px]">
                    {savedImage ? (
                      <img
                        className="w-[309px] h-full object-cover rounded md:w-[302px]"
                        src={savedImage}
                        alt={item.title}
                      />
                    ) : (
                      <div className="w-[309px] h-full bg-gray-600 flex items-center justify-center rounded">
                        <span className="text-gray-300">No Image</span>
                      </div>
                    )}
                    <div className="absolute bottom-[17px] right-[20px] flex items-center z-10">
                      <img
                        className="mr-1 w-4 h-4"
                        src="/assets/star.png"
                        alt="star"
                      />
                      <span className="text-white text-xs md:text-lg">
                        {item.rating}
                      </span>
                    </div>
                    <p className="absolute text-white font-medium bottom-[17px] left-[15px] z-10 text-xs md:text-lg">
                      {item.title}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Link to="/edit-history">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-1 rounded">
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => {
                        // hapus dari API/hook
                        deleteHistory(item.id);
                        // hapus juga gambar dari localStorage
                        localStorage.removeItem(`image-${item.id}`);
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-10 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center h-60">
            <p className="text-gray-400 text-lg md:text-xl text-center mt-50">
              Belum ada history
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
