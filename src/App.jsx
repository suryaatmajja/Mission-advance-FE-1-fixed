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
import Admin from "./pages/admin";
import DaftarSaya from "./pages/daftarSaya";
import TambahHistory from "./pages/tambahHistory";
import EditHistory from "./pages/editHistory";

5;

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
        <Route path="/admin" element={<Admin />} />
        <Route path="/daftar-saya" element={<DaftarSaya />} />
        <Route path="/tambah-history" element={<TambahHistory />} />
        <Route path="/edit-history" element={<EditHistory />} />
      </Routes>
    </Router>
  );
}
