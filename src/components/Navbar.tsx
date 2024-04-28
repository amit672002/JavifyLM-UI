import { Link } from "react-router-dom";
import "./Components.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <p></p>
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
