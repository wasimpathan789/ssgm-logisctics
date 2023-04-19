import "./contactPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phoneNumber);
    console.log(message);

    if (!name || !email || !phoneNumber || message) {
      setErrorMessage("Please filled all fields");
      return;
    }
    setErrorMessage("");
  };
  return (
    <>
      <Navbar />
      {/* <div  class="contact-container"> */}
      <div className="contact-wrapper">
        <div className="contact-wrapper-top">
          <h1 data-aos="fade-up" data-aos-duration="1500">
            Contact Us
          </h1>
          <div className="contact-wrapper-top-bar">
            <span></span>
          </div>
        </div>
        <div className="contact-wrapper-bottom">
          <div className="contact-wrapper-bottom-left">
            <h1 data-aos="fade-down" data-aos-duration="1500">
              Contact Information
            </h1>
            <h3 data-aos="fade-down" data-aos-duration="1500">
              SGM logistics is a complete logistics and supply chain service
              provider. ssgm is one of the largest and fastest growing service
              providers in the integrated cold chain logistics solution space.
            </h3>
            {/* <div className="line">
              <hr />
            </div> */}
            <hr className="line" />
            <div className="contact-phone">
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="contact-phone-left"
              >
                <LocalPhoneIcon />
              </div>
              <div className="contact-phone-right">
                <div className="contact-phone-right-top">
                  <h1 data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    Contact on phone
                  </h1>
                </div>
                <div className="contact-phone-right-bottom">
                  <p data-aos="fade-up" data-aos-duration="1500">
                    +91- 9921313701
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    +91- 9921313701
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-email">
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="contact-email-left"
              >
                <EmailIcon />
              </div>
              <div className="contact-email-right">
                <div className="contact-phone-right-top">
                  <h1 data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    Contact on mail
                  </h1>
                </div>
                <div className="contact-phone-right-bottom">
                  <p data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    <a href=""> band.thate@ssgmlogistics.com</a>
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    <a href=""> contact@ssgmlogistics.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-address">
              <div className="contact-address-left left-address-icon">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className="left-icon"
                >
                  <FmdGoodIcon />
                </div>
              </div>
              <div className="contact-address-right">
                <div className="contact-phone-right-top">
                  <h1 data-aos="fade-up" data-aos-duration="1500">
                    Contact address
                  </h1>
                </div>
                <div className="contact-phone-right-bottom">
                  <p data-aos="fade-up" data-aos-duration="1500">
                    Office No. 06,Ground floor, <br /> Kamalraj Shivdarshan,{" "}
                    <br /> Near Mutthut Finance, <br /> Sambhaji Raje Chowk,{" "}
                    <br /> Dighi, <br /> Pune-411015.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper-bottom-right">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-wrapper">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="name"
                >
                  <label htmlFor="">Name</label>
                  <input
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name ..."
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="name"
                >
                  <label htmlFor="">Email</label>
                  <input
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your name ..."
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="name"
                >
                  <label htmlFor="">Phone Number</label>
                  <input
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your Phone Number ..."
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="name"
                >
                  <label htmlFor="">Your Message</label>
                  <textarea
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  >
                    Type your message here...{" "}
                  </textarea>
                </div>
              </div>
              {/* <Button title={"Submit"} type="submit"/> */}
              <div className="contact-button">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="contact-form-btn"
                  type="submit"
                >
                  Submit
                </button>
              </div>

              {errorMessage && <div className="error"> {errorMessage} </div>}
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default ContactPage;
