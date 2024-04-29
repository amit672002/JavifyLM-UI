import { Link } from "react-router-dom";
import "./Components.css";
import Image from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <img
          src={Image}
          style={{ width: "45px", height: "40px", marginTop: "10px" }}
        />
        <p>JavifyLM</p>
      </div>
      <div className="nav-right">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
