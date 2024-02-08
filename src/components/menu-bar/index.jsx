import { Link } from "react-router-dom"
import "./index.sass"

export const MenuBar = () => {
    return(
        <div className="container-filter"> 
            <ul className="list">
                <li className="item"><Link to="/food">Comidas</Link></li>
                <li className="item"><Link to="/chopp">Cervejas</Link></li>
                <li className="item"><Link to="/drinks">Drinks</Link></li>
            </ul>
        </div>
    )
}