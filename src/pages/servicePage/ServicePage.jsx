import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./servicePage.css";
import twentyFour from "../../assets/24.png";
import truck1 from "../../assets/truck1.png";
import vaq from "../../assets/VAQ MED 7LTRS OPEN.png";
import end from "../../assets/end.png";
import offer from "../../assets/pngwing.com (8).png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <section className="provide-banner">
        <h1 data-aos="fade-right" data-aos-duration="1500">Our Services</h1>
        <p data-aos="fade-right" data-aos-duration="1500">
          We are providing entire supply chain solutions for today’s adaptive
          trial landscape, we ship materials at all temperature ranges to
          investigator sites, depots, and directly to patients’ homes.
        </p>
        <div className="services-slider"></div>
        <div className="provide-overlay"></div>
      </section>
      <div className="provide-contents">
        <h3 data-aos="fade-left" data-aos-duration="1500">
          Providing flexible supply chain solutions for today’s adaptive trial
          landscape, we ship materials at all temperature ranges to investigator
          sites, depots, and directly to patients’ homes.
        </h3>

        <div  data-aos="fade-up" data-aos-duration="1500" className="provide-contents-item">
          <span className="about-us-circle">
          <ArrowForwardIcon style={{fontSize: "20px", fontWeight: "600"}}/>

          </span>
          <h3>Transport of biological specimens to all regional labs</h3>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="provide-contents-item">
        <span className="about-us-circle">
        <ArrowForwardIcon style={{fontSize: "20px", fontWeight: "600"}}/>

          </span>
          <h3>
            Biological sample kit building in all regions, including COVID-19
            test kit building
          </h3>
        </div>
        <div  data-aos="fade-up" data-aos-duration="1500" className="provide-contents-item">
        <span className="about-us-circle">
            <ArrowForwardIcon style={{fontSize: "20px", fontWeight: "600"}}/>
          </span>
          <h3>
            GMP storage and distribution of all clinical trial materials,
            including relabeling when needed
          </h3>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="provide-contents-item">
        <span className="about-us-circle">
        <ArrowForwardIcon style={{fontSize: "20px", fontWeight: "600"}}/>

          </span>
          <h3>
            Transport of clinical drug substance, IMP, clinical drug product,
            and ancillary supplies to anywhere in the world
          </h3>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="provide-contents-item">
        <span className="about-us-circle">
        <ArrowForwardIcon style={{fontSize: "20px", fontWeight: "600"}}/>

          </span>
          <h3>Direct to/from patient and home healthcare services</h3>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="provide-contents-item">
        <span className="about-us-circle">
        <ArrowForwardIcon style={{fontSize: "20px", fontWeight: "600"}}/>

          </span>
          <h3>
            Cell and gene therapy supply chain services including a global LN2
            (cryogenic) network..
          </h3>
        </div>
      </div>
      <div className="provider-cards">
        <div data-aos="fade-down" data-aos-duration="1500" className="provider-card">
          <img src={twentyFour} alt="" />
          <h2>24X365 days</h2>
          <p className="provider-number">01</p>
          <div className="cards-overlay">
            <div className="overlay-contents">
              <p>
                We serve 24X365 days with our best service with High quality
                temp data loggers during transit, we have world's best expertise
                staff to handle temperature sensitive shipments.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="provider-card">
          <img src={end} alt="" />
          <h2>end to end</h2>
          <p className="provider-number">02</p>
          <div className="cards-overlay">
            <div className="overlay-contents">
              <p>
                We are providing end to end Logistics solutions to our clients
                which includes Custom Clearing/Forwarding, Door to Door
                Services, Port to Port Services & Door to Port Services, so that
                our clients can do more.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="1500" className="provider-card">
          <img src={vaq} alt="" />
          <h2>Validated storage</h2>
          <p className="provider-number">03</p>
          <div className="cards-overlay">
            <div className="overlay-contents">
              <p>
                Validated storage for: Controlled ambient (+15°C to +25°C),
                Refrigerated (+2°C to +8°C), -25 to -15*C ,Frozen (-20°C) if
                required, Deep frozen (-70°C) if required, Liquid nitrogen
                (-196°C) if required.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="provider-card">
          <img src={truck1} alt="" />
          <h2>Supply </h2>
          <p className="provider-number">04</p>
          <div className="cards-overlay">
            <div className="overlay-contents">
              <p>
                We provide complete Supply Chain Solutions for the Life Sciences
                Industry,
                Automobiles,Chemicals,Nutrition,Electronics,Electrical,Live
                stocks and all vital Industries requiring transport and
                Logistics by Air and Sea as per requirement.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="1500" className="provider-card">
          <img src={offer} alt="" />
          <h2>We Offers</h2>
          <p className="provider-number">05</p>
          <div className="cards-overlay">
            <div className="overlay-contents">
              <p>
                The company offers warehousing, trucking, courier service,
                supply chain services, delivery and shipping services for
                clinical trials and health care specialists.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="provider-card">
      <img src="" alt=""/>
      <h2></h2>
    </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
