import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Solution from '../../components/solution/Solution'
import Serve from '../../serve/Serve'
import './homepage.css'

const homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Serve/>
      <Solution/>
      <Footer/>
      
      
    </div>
  )
}

export default homepage
