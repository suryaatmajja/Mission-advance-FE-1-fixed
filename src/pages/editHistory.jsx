import Navbar from "../components/navBar";
import InputHistory from "../components/inputHistory";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useHistory from "../hooks/useHistory";

const EditHistory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { history, updateHistory } = useHistory();

  // Cari data yang mau diedit
  const currentData = history.find((item) => String(item.id) === id);

  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    image: null, // file baru
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (currentData) {
      const savedImage = localStorage.getItem(`image-${currentData.id}`);
      setFormData({
        title: currentData.title,
        rating: currentData.rating,
        image: null, // default kosong, nanti kalau upload baru diisi
      });
      if (savedImage) {
        setPreview(savedImage); // tampilkan preview lama
      }
    }
  }, [currentData]);

  // Handle perubahan input text
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle pilih file baru
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file)); // preview sementara
    }
  };

  // Submit update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // simpan gambar baru ke localStorage
        localStorage.setItem(`image-${id}`, reader.result);

        // update judul & rating di API
        updateHistory(id, {
          title: formData.title,
          rating: formData.rating,
        });

        alert("History berhasil diupdate!");
        navigate("/admin");
      };
      reader.readAsDataURL(formData.image);
    } else {
      // kalau tidak upload gambar baru, pakai yang lama
      updateHistory(id, {
        title: formData.title,
        rating: formData.rating,
      });
      alert("History berhasil diupdate!");
      navigate("/admin");
    }
  };

  const menuItems = [
    { name: "Series", path: "/series" },
    { name: "Film", path: "/film" },
    { name: "Daftar Saya", path: "/daftar-saya" },
  ];

  return (
    <>
      <Navbar menuItems={menuItems} />

      <div className="bg-[rgba(24,26,28,1)] text-white relative flex justify-center items-center h-screen font-lato">
        <form
          onSubmit={handleSubmit}
          className="bg-[rgba(47,48,50,1)] w-70 h-auto rounded-2xl md:w-100"
        >
          <h1 className="my-5 ml-20 text-lg md:my-15 md:ml-30 md:text-2xl ">
            Edit History
          </h1>

          <InputHistory
            label="Judul Film"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Masukan judul film"
          />

          <InputHistory
            label="Rating"
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Masukan rating"
          />

          {/* Input file */}
          <label
            htmlFor="imageUpload"
            className="text-gray-400 cursor-pointer flex items-center justify-center w-[260px] h-[28px] rounded-[12px] border border-[rgba(231,227,252,0.23)] 
            font-lato text-[10px] ml-2.5 mt-4
            md:w-[350px] md:h-[40px] md:rounded-[24px] 
            md:text-[14px] md:mx-[25px] md:mt-[40px]"
          >
            {formData.image
              ? formData.image.name
              : preview
              ? "Ganti gambar"
              : "Pilih gambar"}
          </label>

          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {preview && (
            <div className="flex justify-center mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-[200px] h-[120px] object-cover rounded-lg border border-gray-600"
              />
            </div>
          )}

          <button
            type="submit"
            className="text-white cursor-pointer hover:bg-[#898989] hover:text-black w-[260px] h-12 rounded-[12px] border-3 border-[rgba(231,227,252,0.23)]  
            font-lato text-[10px] ml-2.5 mt-15 my-5
            md:w-[350px] md:h-[60px] md:rounded-[24px] 
            md:text-[14px] md:mx-[25px] md:my-10"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default EditHistory;
