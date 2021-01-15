import './styles.css';
import {ReactComponent as Logo} from './logo.svg';

function Navbar(){ //estrutura de um componente em React
    return(
        //Barra de navegação do topo.
        <nav className="main-navbar"> 
            <Logo/>
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;