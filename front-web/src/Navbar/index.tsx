import './styles.css';
import {ReactComponent as Logo} from './logo.svg';
import { Link } from "react-router-dom"

function Navbar(){ //estrutura de um componente em React
    return(
        //Barra de navegação do topo.
        <nav className="main-navbar"> 
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;