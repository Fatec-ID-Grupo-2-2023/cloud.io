import { Route, Switch } from "react-router-dom";
import App from "./App";
import { GlobalContext } from "./contexts/GlobalContext";
import useGlobalContext from "./contexts/useGlobalContext";
import Files from "./pages/Files";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/SecureRoute";

export default function Router() {
    const globalContext = useGlobalContext();

    return (
        <GlobalContext.Provider value={globalContext}>
            <App>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <ProtectedRoute path='/files' component={Files} />
                    <ProtectedRoute path='/' component={Home} />
                </Switch>
            </App>
        </GlobalContext.Provider>
    );
}