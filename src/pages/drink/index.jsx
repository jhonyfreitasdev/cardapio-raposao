import { NavBar } from "../../components/nav-bar";
import { Menu } from "../../components/menu";
import "./index.sass"

export const DrinkPage = () => {
    return (
        <div className="drink-container">
            <NavBar></NavBar>
            <div className="drink-content">
                <h2 className="drink-title"> Drinks </h2>
                <Menu></Menu>
            </div>
        </div>
    )
}
