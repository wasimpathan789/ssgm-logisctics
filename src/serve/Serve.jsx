import "./serve.css"
import automobiles from '../assets/automobiles.png'
import agri2 from '../assets/agri2.png'
import textile from '../assets/textile.png'
import machinery1 from '../assets/machinery1.png'
import Button from "../components/button/Button"


const Serve = () => {
  return (
    <div id="serve" className="serve-container">
    <h2>Industry We Serve</h2>
    <div className="serve-container-subtitle">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae temporibus rerum autem eveniet minima inventore asperiores impedit, et quod?</p>

    </div>
    
    <div className="serve-container-cards">
      <div className="serve-container-card">
        <img src={automobiles} alt=""/>
        <h4>Automobiles products,
          Bio products</h4>
      </div>
      <div className="serve-container-card">
        <img src={agri2} alt=""/>
        <h4>Agricultural products, 
          Fisheries, Dairy 
          products</h4>
      </div>
      <div className="serve-container-card">
        <img src={textile}alt=""/>
        <h4>Textile, Cotton 
          products, Live
          Animals</h4>
      </div>
      <div className="serve-container-card">
        <img src={machinery1} alt=""/>
        <h4>Machinery, Electrical 
          Equipment</h4>
      </div>
    

    </div>

    <div className="serven-btn">
      <Button title={"Explore More"} to={"/services"} />

    </div>
  </div>
  )
}

export default Serve
