import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Beranda from "./pages/Beranda";
import Series from "./pages/series";
import Profil from "./pages/profilSaya";
import DaftarSaya from "./pages/daftarSaya";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/series" element={<Series />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/daftar-saya" element={<DaftarSaya />} />
      </Routes>
    </Router>
  );
}
