import "./enquiryPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const EnquiryPage = () => {
  return (
    <>
      <Navbar />
      <section className="enquiry-container">
        <h1>Enquiry form</h1>
        <p>
          If you have any enquiry, kinldy take a moment to fill up a form. Our
          representive will contact you shortly
        </p>
        <div className="enquiry-wrapper">
          <div className="enquiry-container-left">
            {/* <form action="">
              <div className="name-div">
                <label for="">First Name</label>
                <span>:</span>
                <input type="text" placeholder="Customer First Name"/>
    
              </div>
              <div className="name-div">
                <label for="">Surame</label>
                <span>:</span>
                <input type="text" placeholder="Customer Surame"/>
    
              </div>
              <div className="name-div">
                <label for="">Email</label>
                <span>:</span>
                <input type="email" placeholder="Customer Email address"/>
    
              </div>
              <div className="name-div">
                <label for="">Company</label>
                <span>:</span>
                <input type="text" placeholder="Company Name"/>
    
              </div>
              <div className="textarea-div">
                <label for="">Address</label>
                <span>:</span>
                <textarea placeholder="Address" name="" id="" cols="30" rows="4"></textarea>
    
              </div>
              <div className="name-div">
                <label for="">Country</label>
                <span>:</span>
                <input type="text" placeholder="Country Name"/>
    
              </div>
              <div className="name-div">
                <label for="">Telephone</label>
                <span>:</span>
                <input type="number" placeholder="Telephone"/>
    
              </div>
              <div className="textarea-div">
                <label for="">Collection Address</label>
                <span>:</span>
                <textarea placeholder="Collection Address" name="" id="" cols="30" rows="4"></textarea>
    
    
              </div>
              <div className="textarea-div">
                <label for="">Delivery Address</label>
                <span>:</span>
                <textarea placeholder="Delivery Address" name="" id="" cols="30" rows="4"></textarea>
    
    
              </div>
              <div className="name-div">
                <label for="">Shipment Content</label>
                <span>:</span>
                <input type="text" placeholder="Shipment Content"/>
    
              </div>
              <div className="name-div">
                <label for="">Dangerous Goods</label>
                <span>:</span>
                <div className="radio">
                  <input type="radio" name="negative1" value="Yes"/> Yes 
                  <input type="radio" name="negative1" value="no"/> No 
                </div>
              </div>
              <div className="name-div">
                <label for="">Shipment Weight</label>
                <span>:</span>
                <input type="text" placeholder="Shipment Weight (kg)"/>
    
              </div>
    
              <div className="textarea-div">
                <label for="">Special Instructions</label>
                <span>:</span>
                <textarea placeholder="Special Instructions" name="" id="" cols="30" rows="4"></textarea>
    
              </div>
              <div className="name-div">
                <label for="">Packaging Required</label>
                <span>:</span>
                <div className="radio">
                  <input type="radio" name="negative" value="Yes" /> Yes 
                  <input type="radio" name="negative" value="no"/> No 
                </div>
              </div>
              <div className="submit">
                <button className="submit-btn">Submit</button>
              </div>
    
            </form> */}
            <form action="">
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">First Name</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>
              <div className="name-div">
              <div className="name-div-left">
                  <label for="">Surname</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>
              <div className="name-div">
              <div className="name-div-left">
                  <label for="">Email</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>
              <div className="name-div">
              <div className="name-div-left">
                  <label for="">Company Name</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">Address</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                <textarea placeholder="Address" name="" id="" cols="30" rows="4"></textarea>
                </div>
              </div>
              {/* <div className="textarea-div">
                <label for="">Address</label>
                <span>:</span>
                <textarea placeholder="Address" name="" id="" cols="30" rows="4"></textarea>
    
              </div> */}
               <div className="name-div">
                <div className="name-div-left">
                  <label for="">Country</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">Telephone</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">Collection Address</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                <textarea placeholder="Address" name="" id="" cols="30" rows="4"></textarea>
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">Delivery Address</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                <textarea placeholder="Address" name="" id="" cols="30" rows="4"></textarea>
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">Shipment Content</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>
            


              <div className="name-div">
                <div className="name-div-left">
                  <label for="">Dangerous Goods</label>
                  <span>:</span>
                </div> 
                <div className="name-div-right">
               
                <div className="radio">
                  <input type="radio" name="negative1" value="Yes" /> Yes
                  <input type="radio" name="negative1" value="no" /> No
                </div>
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">First Name</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>   <div className="name-div">
                <div className="name-div-left">
                  <label for="">Shipment Weight</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                  <input type="text" placeholder="Customer First Name" />
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">Special Instructions</label>
                  <span>:</span>
                </div>
                <div className="name-div-right">
                <textarea placeholder="Address" name="" id="" cols="30" rows="4"></textarea>
                </div>
              </div>
              <div className="name-div">
                <div className="name-div-left">
                  <label for="">Packaging Required</label>
                  <span>:</span>
                </div> 
                <div className="name-div-right">
                <div className="radio">
                  <input type="radio" name="negative1" value="Yes" /> Yes
                  <input type="radio" name="negative1" value="no" /> No
                </div>
                </div>
              </div>
              <div className="submit">
                <button className="submit-btn">Submit</button>
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
