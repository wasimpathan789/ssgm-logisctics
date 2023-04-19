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
        {/* <img src={log} alt="" /> */}
        <div className="logo-name">
          {/* <h1><span>S</span> <span>S</span><span>G</span><span>M</span></h1> */}
          <h1>SSGM</h1>
          <h2>Logistics</h2>
        </div>
      </div>

      <ul className={click ? "navbar-lists" : "navbar-lists active"}>
        <li>
          <Link data-aos="fade-up" data-aos-duration="1500" to={"/"} className="navbar-links">
            Home
          </Link>
        </li>
        <li>

          <Link data-aos="fade-up" data-aos-duration="1500" to={"/aboutpage"} className="navbar-links">
            About
          </Link>
        </li>
        <li>

          <Link data-aos="fade-up" data-aos-duration="1500" to={"/services"} className="navbar-links">
            Services
          </Link>
        </li>
        <li>

          <Link data-aos="fade-up" data-aos-duration="1500" to={"/ceopage"} className="navbar-links">
            Our CEO
          </Link>
        </li>
        <li>

          <Link data-aos="fade-up" data-aos-duration="1500" to={"/contactpage"} className="navbar-links">
            Contact
          </Link>
        </li>
        <li>

          <Link data-aos="fade-up" data-aos-duration="1500" to="/enquirypage" className="get-btn">
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
