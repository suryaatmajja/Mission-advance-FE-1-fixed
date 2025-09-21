import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/input";
import InputPassword from "../components/inputPassword";
import Button from "../components/button";
import Logo from "../components/logo";
import useUser from "../hooks/useUser";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { registerUser } = useUser();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Username, email, dan password wajib diisi!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Konfirmasi password tidak sesuai!");
      return;
    }

    try {
      await registerUser({ username, email, password });
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch {
      alert("Registrasi gagal, coba lagi!");
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/background2.jpg')" }}
    >
      <form
        onSubmit={handleRegister}
        className="bg-[rgba(24,26,28,0.84)] text-white rounded-[8px] w-[306px] h-[500px] 
        md:w-[530px] md:h-[825px] md:rounded-[16px]"
      >
        <Logo />

        <h2 className="mt-[20px] text-center font-lato font-bold text-[18px] md:text-[32px]">
          Daftar
        </h2>

        <h4 className="mt-[4px] mb-[15px] text-center font-lato text-[10px] md:text-[16px]">
          Selamat datang!
        </h4>

        {/* Username */}
        <InputField
          label="Username"
          name="username"
          placeholder="Masukan Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Email */}
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Masukan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <InputPassword
          label="Kata Sandi"
          type="password"
          name="password"
          placeholder="Masukan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Konfirmasi Password */}
        <InputPassword
          label="Konfirmasi Kata Sandi"
          type="password"
          name="confirmPassword"
          placeholder="Masukan kata sandi"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <p
          className="font-lato text-[10px] text-[rgba(193,194,196,1)] mx-[24px] -mt-[10px] mb-[10px]
          md:text-[16px] md:mx-[40px] md:mt-[12px]"
        >
          Sudah punya akun?{" "}
          <a className="text-[rgba(255,255,255,1)] font-medium" href="/login">
            Masuk
          </a>
        </p>

        <Button text="Daftar" type="submit" />
        <p className="text-center text-[10px] mt-[4px] -mb-[4px] md:text-[14px] md:mt-2">
          Atau
        </p>
        <Button text="Daftar dengan Google" icon="/assets/google.png" />
      </form>
    </div>
  );
};

export default Register;
