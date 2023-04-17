import { Link } from "react-router-dom"
import"./button.css"

const Button = ({title, to}) => {
  return (
    <Link to={to}>
    <button  className="btn">{title}</button>
      
    </Link>
  )
}

export default Button
