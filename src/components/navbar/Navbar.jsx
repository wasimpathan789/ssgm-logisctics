import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import log from "../../assets/logo2.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
    // alert("dfsdf");
  };
  return (
    <nav className="navbar">
      {/* <div className="logo">
  <img src={log} alt="" />
      <h1>SSGM <span>Logistics</span></h1>
    </div> */}
      <div className="logo">
        <img src={log} alt="" />
        <div className="logo-name">
          <h1>SSGM</h1>
          <h2>Logistics</h2>
        </div>
      </div>

      <ul className={click ? "navbar-lists" : "navbar-lists active"}>
        <li>
          {" "}
          <Link to={"/"} className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/aboutpage"} className="navbar-links">
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/services"} className="navbar-links">
            Services
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/homepage"} className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/contactpage"} className="navbar-links">
            Contact
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/enquirypage" className="get-btn">
            Quotation{" "}
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={clickHandler}>
        {click ? <CloseIcon style={{fontSize: "35px", color: "#233f45"}} /> : <MenuIcon style={{fontSize: "35px", color: "#233f45"}} />}
      </div>
    </nav>
  );
};

export default Navbar;
