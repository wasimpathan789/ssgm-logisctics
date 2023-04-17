import "./solution.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddIcon from "@mui/icons-material/Add";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import { SolutionSliderSetting } from "./SolutionSilderSetting";
import im from '../../assets/24.png'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import SolutionSwiperButtons from "./SolutionSwiperButtons";

const Solution = () => {
  const data = [
    {
      img: `./assets/24.png`,
      heading: "Proactive Reactivity ",
      paragraph: "On time delivery with 24x7 assistance",
    },
    // { img: "./assets/24.png", heading: "", paragraph: "" },
    {
      img: `./assets/24.png`,
      heading: "Value Added",
      paragraph:
        "Critical destination, Hand carry options, customs clearance, storage capabilities.",
    },
    {
      img: `./assets/24.png`,
      heading: "Tailor Made",
      paragraph:
        "Hassle free shipments during public holidays & remote track and trace ability.",
    },
    { img: `./assets/24.png`, heading: " A dedicated customer service", paragraph: " • Real Time Data • Inbuilt Contingency plan• Track and trace throughout the supply chain." },
    {
      img: `./assets/24.png`,
      heading:
        "A dedicated customer service",
      paragraph: ` • Real Time Data • Inbuilt Contingency plan• Track and trace throughout the supply chain.`,
    },
  ];
  const swiper = useSwiper();
  return (
    <main className="our-solution">
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      <h1>Our Solution </h1>
      <div className="solution-slider">
      {/* <div className="r-buttons">
      <button onClick={()=>swiper.slidePrev()}> &lt;</button>
        <button onClick={()=>swiper.slideNext()}> &gt;</button>

  </div> */}
      <Swiper {...SolutionSliderSetting}>
        <SolutionSwiperButtons/>
       
    
        {
          data.map((card, i)=>(
            <SwiperSlide>
               <div key={i} className="s-card">
              <img src={card.img} alt="" />
              <h1>{card.heading}</h1>
              <p>{card.paragraph}</p>

            </div>

            </SwiperSlide>
           

          ))
        }
        
      </Swiper>

      </div>
    </main>
  );
};

export default Solution;

export const SliderButtons = () =>{
  const swiper = useSwiper();
  <div className="r-buttons">
      <button onClick={()=>swiper.slidePrev()}> &lt;</button>
        <button onClick={()=>swiper.slideNext()}> &gt;</button>

  </div>
}
