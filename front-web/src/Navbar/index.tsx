import './styles.css';
import {ReactComponent as Logo} from './logo.svg';
import { Link } from "react-router-dom"

/**
 * Adicionando a barra de navegação no topo da página.
 */

function Navbar(){ //estrutura de um componente em React
    return(
        <nav className="main-navbar"> 
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;

//Link é usado para redirecionar 