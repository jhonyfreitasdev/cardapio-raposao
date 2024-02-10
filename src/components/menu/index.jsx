import { useContext } from "react";
import { selectedPageContext } from "../../context/selected-bar";
import { menu } from "../../objects/menu";
import { formattedCurrency } from "../../objects/formatted-currency";
import "./index.sass";

export const Menu = () => {
    const { page } = useContext(selectedPageContext);
    const selectedMenu = menu.find(item => item.id === page);

    return (
        <ul className="menu-list">
            {selectedMenu !== undefined ? selectedMenu.list.map((item, i) => {
                return (
                    <li className="item" key={i}>
                        <div className="border-style">
                            <img className="image" src={item.image} alt={item.name} />
                            <p className="name"> {item.name} </p>
                            {item.desc !== "" ? <p className="describe"> {item.desc} </p> : ""}
                            <p className="price"> {formattedCurrency(item.price)} </p>
                        </div>
                    </li>
                )
            }) : ""}
        </ul>
    )
};