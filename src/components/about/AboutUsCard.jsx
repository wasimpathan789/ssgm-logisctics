import './aboutUsCard.css'

const AboutUsCard = ({title, description1,description2,description3,description4}) => {
  return (
    <div className='about-us-card'>
        <div  data-aos="fade-left"  data-aos-duration="1500" className="about-us-card-top">
           {title}
        </div>
        <div className="about-us-card-left">
            <ul>
                <li data-aos="fade-up"
     data-aos-duration="1500">{description1}</li>
                <li data-aos="fade-up"
     data-aos-duration="1500">{description2}</li>
                <li data-aos="fade-up"
     data-aos-duration="1500">{description3}</li>
                <li data-aos="fade-up"
     data-aos-duration="1500">{description4}</li>


            </ul>


        </div>

      
    </div>
  )
}

export default AboutUsCard
