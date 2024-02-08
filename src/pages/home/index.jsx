import { Header } from "../../components/header";
import { MenuBar } from "../../components/menu-bar";
import "./index.sass";

export const Home = () => {
    return (
        <div className="container-home">
            <Header />
            <MenuBar />
        </div>
    )
} 