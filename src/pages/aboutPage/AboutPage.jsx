import "./aboutPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import consulting from "../../assets/consulting.png";
import auditing from "../../assets/auditing.png";
import tempratutre from "../../assets/temprature.png";
import quality from "../../assets/quality.png";
import AboutUsCard from "../../components/about/AboutUsCard";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <div className="about-us-banner">
          <h3 data-aos="fade-right"
              data-aos-duration="1500" className="title">About Us</h3>
          <h2 data-aos="fade-right"
              data-aos-duration="1500">SSGM Logistics</h2>
          <div className="overlay2"></div>
        </div>
        <div className="about-us-contents">
          <div className="about-us-contents-left">
            <h2
              data-aos="fade-right"
              data-aos-duration="1500"
              className="heading2"
            >
              We are Cold Chain Consultants..
            </h2>
            <h3 data-aos="fade-right" data-aos-duration="1500">
              GLOBAL SPECIALISTS IN HEALTHCARE TEMPERATURE SENSITIVE SUPPLY
              CHAIN
            </h3>
            <span  data-aos="fade-right" data-aos-duration="1500" className="paragraph" >
              Cold Chain Consultants, has offices located around the world to
              assist the pharmaceutical and life science industries demand for
              supply chain optimisation, GDP, regulatory compliance and
              temperature controlled supply chain requirements. Cold Chain
              Consultants offers unique and specialist services focusing on the
              compliance and operational requirements of temperature sensitive
              supply chain.
            </span>
            <div className="bottom">
              <br />
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="paragraph"
              >
                {" "}
                The cold chain involves the transportation of temperature
                sensitive products along a supply chain through thermal and
                refrigerated packaging methods and the logistical planning to
                protect the integrity of these shipments. There are several
                means in which cold chain products can be transported, including
                refrigerated trucks and railcars, refrigerated cargo ships as
                well as by air cargo.
              </p>

              <div className="about-us-experience">
                <h2>Key Features</h2>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="experience-contents"
                >
                  <span className="about-us-circle">
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                  >
                    {" "}
                    Experience in Temperature Control Solutions for
                    Investigational Pharmaceuticals.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="experience-contents"
                >
                  <span className="about-us-circle">
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    Experience in Direct to Patient Delivery Programs , Cell
                    Therapy Logistics and Life Saving Drug Programs.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="experience-contents"
                >
                  <span className="about-us-circle">
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    Specialties: Final Leg Distribution to Bulk Import.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="experience-contents"
                >
                  <span className="about-us-circle">
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    Vacuum Insulated Panels and Specific Phase Materials.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="experience-contents"
                >
                  <span className="about-us-circle">
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    Single use EPS shippers, handling processes and
                    contingencies.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="experience-contents"
                >
                  <span className="about-us-circle">
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    {" "}
                    Import & Export Regulations for Pharmaceuticals & Clinical
                    Trial Specimens accross Asia. ( - from Pakistan to Seoul and
                    Mongolia to New Zealand..).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us-contents-rights">
            <div className="about-us-right-items">
              <AboutUsCard
                title={" Consulting Services"}
                description1={
                  " Cold Chain Consultants understand the complexities of each stage of logistics and distribution from manufacturing to patient."
                }
                description2={
                  "We use a practical approach to understand our customer’s needs & requirements, depending on their products, type of business "
                }
              />
              <AboutUsCard
                title={"Weather  Sensitive Supply Chain Optimization"}
                description1={
                  "End-to-end integration and plan for your cold chain/temperature supply chain."
                }
                description2={
                  "Our consultants perform audits on site, together with the Responsible Person (RP) and process owner, making sure the results are accurate and reliable to increase your business efficiency."
                }
              />
              <AboutUsCard
                title={"Quality and Compliance"}
                description1={"GDP Compliant Network"}
                description2={"Operating in strict Quality Standards."}
                description3={"All industries covered."}
                description4={"Regulatory expertise"}
              />
              <AboutUsCard
                title={"Reliable Transport Network"}
                description1={
                  "Trusted and reliable global network of offices and strategic partners operating within the Quality Management System."
                }
              />
              <AboutUsCard
                title={"Dedication"}
                description1={
                  "We are100%  dedicated towards Process Developments."
                }
                description2={
                  "Our customers rely on our expertise and build trust with their irreplaceable consignments."
                }
              />
              <AboutUsCard
                title={"Auditing – GDP GAP Analysis"}
                description1={
                  "We are100%  dedicated towards Process Developments."
                }
                description2={
                  "Our customers rely on our expertise and build trust with their irreplaceable consignments."
                }
              />
              <AboutUsCard
                title={" Temperature Sensitive"}
                description1={
                  "We are100%  dedicated towards Process Developments."
                }
                description2={
                  "Our customers rely on our expertise and build trust with their irreplaceable consignments."
                }
              />
              <AboutUsCard
                title={" Qualification & Validation"}
                description1={
                  "We are100%  dedicated towards Process Developments."
                }
                description2={
                  "Our customers rely on our expertise and build trust with their irreplaceable consignments."
                }
              />
              <AboutUsCard
                title={" Temperature Sensitive"}
                description1={
                  "We are100%  dedicated towards Process Developments."
                }
                description2={
                  "Our customers rely on our expertise and build trust with their irreplaceable consignments."
                }
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
