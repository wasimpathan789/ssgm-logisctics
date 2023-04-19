import "./ceoPage.css";
import ceo from "../../assets/ceo.jpg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

const CeoPage = () => {
    const [hide, setHide] = useState(false);
    const [show, setShow] = useState(false);


    const hideHandler = () => {
        setShow(!show);
    }
    const showHandler = () => {
        setShow(!show);
        console.log("hi");

    }
  return (
    <div className="ceo-container">
      <Navbar />

      <div className="ceo-wrapper">
        <div className="ceo-left-container">
          <div className="ceo-left-top-container">
            <div className="ceo-image">
              <img src={ceo} alt="" />
            </div>
            <h1 data-aos="fade-right" data-aos-duration="1500">Bandu Tathe</h1>
            <p data-aos="fade-right" data-aos-duration="1500">Cold Chain Consultant</p>
            <div className="ceo-social">
              <LinkedInIcon  data-aos="fade-down" data-aos-duration="1500" style={{ color: "white", fontSize: "35px" }} />
              <TwitterIcon data-aos="fade-down" data-aos-duration="1500" style={{ color: "white", fontSize: "35px" }} />
              <FacebookIcon data-aos="fade-down" data-aos-duration="1500" style={{ color: "white", fontSize: "35px" }} />
              <InstagramIcon data-aos="fade-down" data-aos-duration="1500" style={{ color: "white", fontSize: "35px" }} />
            </div>
            <div className="ceo-button">
                <button onClick={showHandler} className="left-btn">Show</button>
                <button onClick={hideHandler} className="right-btn">Hide</button>
            </div>
          </div>
          {/* ceo-left-bottom-container */}
          <div className={show? "ceo-left-bottom-container active" : "ceo-left-bottom-container" }>
            <div data-aos="fade-right" data-aos-duration="1500" className="number">
              <LocalPhoneIcon />
              <p>9309754402  /  8956477791</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" className="number">
              <EmailIcon />
              <p> bandu.tathe@ssgmlogistics.com</p>
            </div>
          </div>
        </div>
        <div className="ceo-right-container">
          <div className="ceo-right-top-container">
            <h1   data-aos="fade-up" data-aos-duration="1500">About Me</h1>
            <h2  data-aos="fade-up" data-aos-duration="1500">Bandu Tathe</h2>
            <p  data-aos="fade-up" data-aos-duration="1500">
              I am Bandu Tathe, World Class COLD CHAIN MANAGEMENT expertise
              person. I have a vast experience in pharma and Bio
              industry,competent professional with 22 years of established
              career in Cold Chain,Operations,training,Sales in Logistics.
            </p>
          </div>
          <div className="ceo-right-center-container">
            <h2  data-aos="fade-up" data-aos-duration="1500">Trainings ...</h2>
            <p  data-aos="fade-left" data-aos-duration="1500">
        
               Internal DG awareness course for class 6.2, Cold
              Chain management awareness internal training,Internal Auditor
              training and GXP have contributed towards enhancement of my skills
              in the field. My ability to streamline operations ensuring smooth
              operational flow and provision of highest level of services to
              client, sets me apart from others. 
            </p>
            <p data-aos="fade-right" data-aos-duration="1500" >As a leader, I also coach and
              motivate my team to perform at their very best and surpass
              challenging targets. Over these years, I have developed expertise
              in energizing low performing channels and managing profit centre
              operations to uplift the organisations.Highly motivated, goal
              oriented and dedicated individuals, I strongly believe that a
              satisfied customer is the best business strategy of all. Career
              progression and recognition for accomplishing assigned tasks
              motivates me to perform better.</p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1500" className="ceo-right-bottom-container">
            <h2>Specialties:</h2>
            <ul>
              <li data-aos="fade-up" data-aos-duration="1500"> Sales & Marketing</li>
              <li data-aos="fade-up" data-aos-duration="1500">  Business Development</li>
              <li data-aos="fade-up" data-aos-duration="1500"> Operations Management</li>
              <li data-aos="fade-up" data-aos-duration="1500"> Training & Development </li>
              <li data-aos="fade-up" data-aos-duration="1500"> Marketing Research & Analysis</li>
              <li data-aos="fade-up" data-aos-duration="1500">  Strategic Planning</li>
              <li data-aos="fade-up" data-aos-duration="1500">  Channel Management</li>
              <li data-aos="fade-up" data-aos-duration="1500"> Business Development </li>
              <li data-aos="fade-up" data-aos-duration="1500">  Team Management</li>
              <li data-aos="fade-up" data-aos-duration="1500">  Distribution Management</li>
            </ul>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default CeoPage;
