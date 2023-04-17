import "./aboutPage.css";
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import consulting from '../../assets/consulting.png'
import auditing from '../../assets/auditing.png'
import tempratutre from '../../assets/temprature.png'
import quality from '../../assets/quality.png'


const AboutPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="about-us-container">
    <div className="about-us-banner">
      <h3 className="title">About Us</h3>
      <h2>SSGM Logistics</h2>
    </div>
    <div className="about-us-contents">
      <div className="about-us-contents-left">
        <h2 className="heading2">We are Cold Chain Consultants..</h2>
        <h3>GLOBAL SPECIALISTS IN HEALTHCARE TEMPERATURE SENSITIVE SUPPLY CHAIN</h3>
        <span className="paragraph">Cold Chain Consultants, has offices located around the world to assist the
          pharmaceutical and life science industries demand for supply chain optimisation, GDP, regulatory
          compliance and temperature controlled supply chain requirements. Cold Chain Consultants offers
          unique and specialist services focusing on the compliance and operational requirements of
          temperature sensitive supply chain.</span>
        <div className="bottom">
          <br/>
          <p className="paragraph"> The cold chain involves the transportation of temperature sensitive products along a
            supply chain through
            thermal and refrigerated packaging methods and the logistical planning to protect the integrity of these
            shipments. There are several means in which cold chain products can be transported, including refrigerated
            trucks and railcars, refrigerated cargo ships as well as by air cargo.</p>


          <div className="about-us-experience">
            <h2>Key Features</h2>
            <div className="experience-contents">

              <span className="about-us-circle"> <i className="fa fa-check" aria-hidden="true"></i></span>
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500"> Experience in
                Temperature Control Solutions for Investigational Pharmaceuticals.</p>
            </div>
            <div className="experience-contents">

              <span className="about-us-circle"> <i className="fa fa-check" aria-hidden="true"></i></span>
              <p> Experience in Direct to Patient Delivery
                Programs , Cell Therapy Logistics and Life Saving Drug Programs.</p>
            </div>
            <div className="experience-contents">

              <span className="about-us-circle"> <i className="fa fa-check" aria-hidden="true"></i></span>
              <p> Specialties: Final Leg Distribution to Bulk Import.</p>
            </div>
            <div className="experience-contents">

              <span className="about-us-circle"> <i className="fa fa-check" aria-hidden="true"></i></span>
              <p> Vacuum Insulated Panels and Specific Phase Materials.</p>
            </div>
            <div className="experience-contents">

              <span className="about-us-circle"> <i className="fa fa-check" aria-hidden="true"></i></span>
              <p> Single use EPS shippers, handling processes and contingencies.</p>
            </div>
            <div className="experience-contents">

              <span className="about-us-circle"> <i className="fa fa-check" aria-hidden="true"></i></span>
              <p data-aos="fade-right" data-aos-duration="3000"> Import & Export Regulations for Pharmaceuticals &
                Clinical Trial Specimens accross Asia. ( - from Pakistan to Seoul and Mongolia to New Zealand..).</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-contents-right">
        <div className="about-items">

          <div className=" about-item about-item-1">
            <div className="item-img-1">
              <img src={consulting} alt=""/>
              </div>
            <h4>Consulting Services</h4>
          </div>
          <div className="about-item about-item-2">
            <div className="item-img-2"><img src={auditing} alt=""/></div>
            <h4>Auditing – GDP GAP Analysis</h4>
          </div>
          <div className="about-item about-item-3">
            <div className="item-img-3"><img src={tempratutre} alt=""/></div>
            <h4>Temperature Sensitive</h4>
          </div>
          <div className="about-item about-item-4">
            <div className="item-img-4">
              <img src={quality} alt=""/></div>
            <h4>Qualification & Validation</h4>
          </div>
        {/* <div className="about-item">
                        <h3>Auditing – GDP GAP Analysis</h3>
                        <div className="about-us-img">
                            <img src="" alt=""/>
    
                        </div>
                    </div>
                    <div className="about-item">
                        <h3>Temperature Sensitive Supply Chain Optimization</h3>
                        <div className="about-us-img">
                            <img src="" alt=""/>
    
                        </div>
                    </div>
                    <div className="about-item">
                        <h3>Qualification and Validation</h3>
                        <div className="about-us-img">
                            <img src="" alt=""/>
    
                        </div>
                    </div> */}


        </div>


      </div>
    </div>



  </div>

        <Footer/>
      
    </div>
  )
}

export default AboutPage
