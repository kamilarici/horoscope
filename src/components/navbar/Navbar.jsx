import logo from "../../helpers/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>
      <div className="links">
        <a href="#horoscope">HARİTA </a>
        <a href="#daily">FAVORİ</a>
        <a href="#tarot">EKLE </a>
        <a href="#article">YORUMLAR </a>
        <a href="#contact">İLETİSİM </a>
      </div>
    </div>
  );
};
export default Navbar;
