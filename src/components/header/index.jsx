import { images } from "../../objects/images";
import "./index.sass";

export const Header = () => {
    return (
        <header>
            <img className="logo-image" src={ images.logo } alt="Imagem do logo" />
        </header>
    )
};