import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/input";
import InputPassword from "../components/inputPassword";
import Button from "../components/button";
import Logo from "../components/logo";
import useUser from "../hooks/useUser";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(username, password);
      alert("Welcome!");
      navigate("/Beranda");
    } catch (err) {
      alert(err.message || "Username atau password salah!");
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-[rgba(24,26,28,0.84)] text-white rounded-[8px] w-[306px] h-[395px] 
        md:w-[530px] md:h-[663px] md:rounded-[16px]"
      >
        <Logo />

        <h2 className="mt-[20px] text-center font-lato font-bold text-[18px] md:text-[32px]">
          Masuk
        </h2>

        <h4 className="mt-[4px] mb-[15px] text-center font-lato text-[10px] md:text-[16px]">
          Selamat datang kembali!
        </h4>

        <InputField
          label="Username"
          name="username"
          placeholder="Masukan Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputPassword
          label="Kata Sandi"
          type="password"
          name="password"
          placeholder="Masukan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p
          className="font-lato text-[10px] text-[rgba(193,194,196,1)] mx-[24px] -mt-[10px]
          md:text-[16px] md:mx-[40px] md:mt-[12px]"
        >
          Belum punya akun?{" "}
          <a
            className="text-[rgba(255,255,255,1)] font-medium"
            href="/register"
          >
            Daftar
          </a>
        </p>

        <p
          className="font-lato text-[10px] text-[rgba(255,255,255,1)] ml-[210px] -mt-[15px]  mb-[10px]
        md:text-[16px] md:ml-[370px] md:-mt-[24px]"
        >
          <a href="/register">Lupa kata sandi?</a>
        </p>

        <Button text="Masuk" type="submit" />
        <p className="text-center text-[10px] mt-[4px] -mb-[4px] md:text-[14px] md:mt-2">
          Atau
        </p>
        <Button text="Masuk dengan Google" icon="/assets/google.png" />
      </form>
    </div>
  );
};

export default Login;
