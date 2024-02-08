import LogoImage from "../../assets/images/logo-raposao.jpg"
import "./index.sass";

export const Header = () => {
    return (
        <header>
            <img className="logo-image" src={ LogoImage } alt="Imagem do logo" />
        </header>
    )
}