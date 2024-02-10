import { NavBar } from "../../components/nav-bar";
import { Menu } from "../../components/menu";
import "./index.sass";

export const FoodPage = () => {
    return (
        <div className="food-container">
            <NavBar></NavBar>
            <div className="food-content">
                <h2 className="title"> Comidas </h2>
                <Menu></Menu>
            </div>
        </div>
    )
};