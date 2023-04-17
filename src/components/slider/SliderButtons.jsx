import { useSwiper } from 'swiper/react'
import './sliderButtons.css'

const SliderButtons = () => {
    const swiper = useSwiper();
  return (
    <div className='slider-btn'>
        <button onClick={()=>swiper.slidePrev()}> &lt;</button>
        <button onClick={()=>swiper.slideNext()}> &gt;</button>

      
    </div>
  )
}

export default SliderButtons
