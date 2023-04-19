import Button from "../button/Button";
import "./about.css";
import worker from '../../assets/worker.png'

const About = () => {
  return (
    <div className="a-container" id="about">
    <div className="a-wrapper">
      <div className="a-left">
        <h3 data-aos="fade-left" data-aos-duration="1500">About Our Company</h3>
        <h2 data-aos="fade-left" data-aos-duration="1500">Who we are..</h2>
        <p data-aos="fade-left" data-aos-duration="1500">SSGM logistics is a complete logistics and supply chain service provider. ssgm is one of the largest and
          fastest growing service providers in the integrated cold chain logistics solution space. ssgm provides
          services such as refrigerated warehousing (cold storages), refrigerated transportation on a pan-india network.
          always on the cusp of innovation, ssgm also provides solutions such as express refrigerated transportation for
          ltl (less than truck load) consignments and portable cold storage. global boasts to be the only company in the
          country to provide complete range of services with such wide gamut of solutions in the cold chain logistics
          industry.</p>
       <Button data-aos="fade-left" data-aos-duration="1500" title={"Learn More"} to={"/aboutpage"} />

      </div>
      <div className="a-right">
        <img  data-aos="fade-right" data-aos-duration="1500" src={worker} alt=""/>
      </div>

    </div>

  </div>
  )
}

export default About
