import Navbar from "../components/navBar";
import InputHistory from "../components/inputHistory";
import { useState } from "react";
import useHistory from "../hooks/useHistory";

const TambahHistory = () => {
  const { addHistory } = useHistory();

  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    image: null, // file asli
  });

  const [preview, setPreview] = useState(null);

  // Handle perubahan input text
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle pilih file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file)); // preview sementara
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = Date.now(); // id unik biar sama antara localStorage & history

    if (formData.image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // ✅ Simpan gambar base64 ke localStorage
        localStorage.setItem(`image-${newId}`, reader.result);

        // ✅ Simpan data judul & rating ke API
        const newData = {
          id: newId,
          title: formData.title,
          rating: formData.rating,
        };

        addHistory(newData);

        // Reset form
        setFormData({ title: "", rating: "", image: null });
        setPreview(null);
        alert("History berhasil ditambahkan!");
      };
      reader.readAsDataURL(formData.image);
    } else {
      // Kalau gak pilih gambar, tetap simpan data
      const newData = {
        id: newId,
        title: formData.title,
        rating: formData.rating,
      };
      addHistory(newData);
      alert("History berhasil ditambahkan!");
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
            Tambah History
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
            {formData.image ? formData.image.name : "Pilih gambar"}
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

export default TambahHistory;
