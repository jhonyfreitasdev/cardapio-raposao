import { Link } from "react-router-dom"
import logo from "../../assets/images/favico-raposao.jpg"
import "./index.sass"

export const NavBar = () => {
    return (
        <div className="nav-bar"> 
            <Link to="/"><img className="nav-bar-logo" src={logo} alt="Imagem do logo" /></Link>

            <ul>
                <li></li>
            </ul>
        </div>
    )
}