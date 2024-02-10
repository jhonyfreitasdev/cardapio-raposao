import { Link } from "react-router-dom"
import { useContext } from "react";
import { selectedPageContext } from "../../context/selected-bar";
import "./index.sass";

export const MenuBar = () => {
    const { setPage } = useContext(selectedPageContext);

    return(
        <div className="container-filter"> 
            <ul className="list">
                <li className="item"><Link to="/food" id="food" onClick={e => setPage(e.target.id)}> Comidas </Link></li>
                <li className="item"><Link to="/chopp" id="chopp" onClick={e => setPage(e.target.id)}> Cervejas </Link></li>
                <li className="item"><Link to="/drink" id="drink" onClick={e => setPage(e.target.id)}> Drinks </Link></li>
            </ul>
        </div>
    )
};