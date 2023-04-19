import "./enquiryPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const EnquiryPage = () => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [cname, setCname] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [telephone, setTelephone] = useState("");
  const [collectionAddress, setCollectionAddress] = useState("");
  const [delivery, setDelivery] = useState("");
  const [shipment, setShipment] = useState("");
  const [instruction, setInstruction] = useState("");
  // const [shipment, setShipment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fname);
    // console.log(setFname);

  }





  return (
    <>
      <Navbar />
      <section className="enquiry-container">
        <h1 data-aos="fade-down" data-aos-duration="1500">Enquiry form</h1>
        <p data-aos="fade-down" data-aos-duration="1500">
          If you have any enquiry, kinldy take a moment to fill up a form. Our
          representive will contact you shortly
        </p>
        <div className="enquiry-wrapper">
          <div className="enquiry-container-left">
            <form action="" onSubmit={handleSubmit}>
              <div className="name-div">
                <div className="name-div-left">
                  <label  data-aos="fade-right" data-aos-duration="1500" for="">First Name</label>
                  <span  data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name" value={fname} onChange={(e)=> setFname(e.target.value) }  />
                </div>
              </div>
              <div className="name-div">
              <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Surname</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name" value={sname} onChange={(e)=> setSname(e.target.value) }  />
                </div>
              </div>
              <div className="name-div">
              <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Email</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name" value={email} onChange={(e)=> setEmail(e.target.value) }  />
                </div>
              </div>
              <div className="name-div">
              <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Company Name</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name" value={cname} onChange={(e)=> setCname(e.target.value) }  />
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Address</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                <textarea   data-aos="fade-right" data-aos-duration="1500" placeholder="Address" name="" id="" cols="30" rows="4" value={address} onChange={(e)=> setAddress(e.target.value) } ></textarea>
                </div>
              </div>
              {/* <div className="textarea-div">
                <label for="">Address</label>
                <span>:</span>
                <textarea placeholder="Address" name="" id="" cols="30" rows="4"></textarea>
    
              </div> */}
               <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Country</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name"  value={country} onChange={(e)=> setCountry(e.target.value) } />
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Telephone</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name" value={telephone} onChange={(e)=> setTelephone(e.target.value) }  />
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Collection Address</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                <textarea   data-aos="fade-right" data-aos-duration="1500" placeholder="Address" name="" id="" cols="30" rows="4" value={collectionAddress} onChange={(e)=> setCollectionAddress(e.target.value) } ></textarea>
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Delivery Address</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                <textarea   data-aos="fade-right" data-aos-duration="1500" placeholder="Address" name="" id="" cols="30" rows="4" value={delivery} onChange={(e)=> setDelivery(e.target.value) } ></textarea>
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Shipment Content</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name"  value={shipment} onChange={(e)=> setShipment(e.target.value) } />
                </div>
              </div>
            


              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Dangerous Goods</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div> 
                <div className="name-div-right">
               
                <div className="radio">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="radio" name="negative1" value="Yes" /> Yes
                  <input   data-aos="fade-right" data-aos-duration="1500" type="radio" name="negative1" value="no" /> No
                </div>
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">First Name</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name"  value={fname} onChange={(e)=> setFname(e.target.value) } />
                </div>
              </div>   <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Shipment Weight</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="text" placeholder="Customer First Name" value={shipment} onChange={(e)=> setShipment(e.target.value) }  />
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Special Instructions</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div>
                <div className="name-div-right">
                <textarea   data-aos="fade-right" data-aos-duration="1500" placeholder="Address" name="" id="" cols="30" rows="4" value={instruction} onChange={(e)=> setInstruction(e.target.value) } ></textarea>
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label   data-aos="fade-right" data-aos-duration="1500" for="">Packaging Required</label>
                  <span   data-aos="fade-right" data-aos-duration="1500">:</span>
                </div> 
                <div className="name-div-right">
                <div className="radio">
                  <input   data-aos="fade-right" data-aos-duration="1500" type="radio" name="negative1" value="Yes" /> Yes
                  <input   data-aos="fade-right" data-aos-duration="1500" type="radio" name="negative1" value="no" /> No
                </div>
                </div>
              </div>
              <div className="submit">
                <button    data-aos="fade-up" data-aos-duration="1500"className="submit-btn" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="enquiry-container-right"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EnquiryPage;
