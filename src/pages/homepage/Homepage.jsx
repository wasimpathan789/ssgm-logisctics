import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import ScrollButton from '../../components/scrollButton/ScrollButton'
import Solution from '../../components/solution/Solution'
import Serve from '../../serve/Serve'
import './homepage.css'

const homepage = () => {
  return (
    <div>
      <Navbar/>
      {/* <ScrollButton/> */}
      <Hero/>
      <About/>
      <Serve/>
      <Solution/>
      <Footer/>
      
      
    </div>
  )
}

export default homepage
