import { useEffect, useState } from "react";
import "./scrollButton.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollButton = () => {

  const [isVisible, setIsVisible] = useState(false);
  const goToTop = () => {
    window.scrollTo({left:0, top:0, behavior:"smooth"});

  }
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden){
      setIsVisible(true);
  
    }else{
      setIsVisible(false);
  
    }
  };


  useEffect(()=>{
    window.addEventListener("scroll", listenToScroll);
  },[]);
  return (
    <div className="wrapper">
      {
        isVisible && (  <button onClick={goToTop} className="scroll-btn">
        <ArrowUpwardIcon className="scroll-btn-icon" style={{color: "white"}}/>  
    </button>)
      }
    


    </div>
    
  )
}

export default ScrollButton
