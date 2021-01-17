import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Orders from "./Orders"
import Navbar from './Navbar';

function Routers() {
    return (

        /*gerenciador de rotas */
        <BrowserRouter>

            <Navbar />
            
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </BrowserRouter>

    )
}

export default Routers;