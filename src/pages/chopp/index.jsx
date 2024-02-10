import { NavBar } from "../../components/nav-bar";
import { Menu } from "../../components/menu";
import "./index.sass";

export const ChoppPage = () => {
    return (
        <div className="chopp-container">
            <NavBar></NavBar>
            <div className="chopp-content">
                <h2 className="title"> Cervejas </h2>
                <Menu></Menu>
            </div>
        </div>
    )
};
