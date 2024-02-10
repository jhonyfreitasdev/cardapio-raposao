import { Link } from "react-router-dom"
import { useContext } from "react";
import { selectedPageContext } from "../../context/selected-bar";
import { images } from "../../objects/images";
import "./index.sass";

export const NavBar = () => {
    const { setPage } = useContext(selectedPageContext);

    return (
        <div className="nav-bar">
            <Link to="/">
                <img className="nav-bar-logo" src={images.favicon} alt="Imagem do logo" />
            </Link>

            <ul className="nav-bar-list">
                <li className="item">
                    <Link to="/food" onClick={() => setPage('food')}>
                        <i class="fa-solid fa-burger"></i>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/chopp" onClick={() => setPage('chopp')}>
                        <i class="fa-solid fa-beer-mug-empty"></i>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/drink" onClick={() => setPage('drink')}>
                        <i class="fa-solid fa-martini-glass-citrus"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
};