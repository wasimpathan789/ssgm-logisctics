import React from 'react'
import { useSwiper } from 'swiper/react'

const SolutionSwiperButtons = () => {
    const swiper = useSwiper();
  return (
    <div className="r-buttons">
    <button onClick={()=>swiper.slidePrev()}> &lt;</button>
      <button onClick={()=>swiper.slideNext()}> &gt;</button>

</div>
  )
}

export default SolutionSwiperButtons
