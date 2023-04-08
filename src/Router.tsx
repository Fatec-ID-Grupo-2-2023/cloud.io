import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import { GlobalContext } from "./contexts/GlobalContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/SecureRoute";
import useGlobalContext from "./contexts/useGlobalContext";

export default function Router() {
    const globalContext = useGlobalContext();

    return (
        <GlobalContext.Provider value={globalContext}>
            <App>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <ProtectedRoute path='/' component={Home} />
                </Switch>
            </App>
        </GlobalContext.Provider>
    );
}