import { useState, useEffect } from "react";

const FormProfil = () => {
  const [photo, setPhoto] = useState("/assets/poto-profil.png");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.photo) {
      setPhoto(savedUser.photo);
    }
  }, []);

  // Handle ubah foto
  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      // maksimal 2MB
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);

        // update juga ke localStorage
        const savedUser = JSON.parse(localStorage.getItem("user")) || {};
        const updatedUser = { ...savedUser, photo: reader.result };
        localStorage.setItem("user", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Ukuran foto maksimal 2MB!");
    }
  };

  return (
    <div className="w-[320px] h-full bg-[rgba(24,26,28,1)] text-white font-lato my-5 mx-5 md:w-[642px] md:my-10 md:ml-20">
      <h1 className="text-xl md:text-3xl font-bold">Profil Saya</h1>

      <div className="flex w-full h-full mt-7.5">
        {/* Foto Profil */}
        <img
          className="w-20 h-20 md:w-35 md:h-35 rounded-full object-cover"
          src={photo}
          alt="Foto Profil"
        />

        <div className="relative ml-6 mt-2 h-20 md:mt-10 md:ml-7">
          {/* Tombol Ubah Foto */}
          <label className="w-23 h-9 flex items-center justify-center rounded-full border cursor-pointer hover:border-[rgba(50,84,255,1)] text-sm hover:text-[rgba(50,84,255,1)] md:w-30 md:h-10.5 md:text-base">
            Ubah Foto
            <input
              type="file"
              accept="image/*"
              onChange={handleChangePhoto}
              className="hidden"
            />
          </label>

          <p className="flex items-center text-xs text-[rgba(193,194,196,1)] mt-2.5 md:text-sm">
            <img
              className="w-5 h-5 md:w-6 md:h-6 mr-1"
              src="/assets/file-foto-profil.png"
              alt="icon"
            />
            Maksimal 2MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormProfil;
